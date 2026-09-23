#!/usr/bin/env node
/**
 * Verifies that the published JavaScript SDKs still speak the product API.
 *
 *   node scripts/verify-sdks.mjs
 *
 * No API key required, and nothing leaves the machine: global fetch is
 * intercepted, so we inspect what each client *would* have sent. That is enough
 * to catch the failure mode that matters — a client built against the wrong
 * contract, which authenticates with the wrong header and calls the wrong paths.
 *
 * Expectations come from the Postman collection (the product API):
 *   base   https://pteri.xyz/api
 *   auth   Authorization: Bearer <key>   +   Usev2: true
 *   scope  wallet / encryptedPassphrase headers where applicable
 *
 * Run it after any SDK release, or on a schedule. Exit code is non-zero if a
 * package that is supposed to work has drifted.
 */

import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);

const EXPECT = {
  host: 'https://pteri.xyz',
  authHeader: 'authorization',
  authPrefix: 'Bearer ',
  versionHeader: 'usev2',
};

const KEY = 'pt_live_fake_key_for_probing';
let captured = null;

const realFetch = globalThis.fetch;
globalThis.fetch = async (url, opts = {}) => {
  const headers = {};
  if (opts.headers) {
    if (typeof opts.headers.forEach === 'function') opts.headers.forEach((v, k) => (headers[k] = v));
    else Object.assign(headers, opts.headers);
  }
  captured = {url: String(url), method: opts.method || 'GET', headers};
  return new Response(JSON.stringify({successful: true, message: 'intercepted', data: {}}), {
    status: 200,
    headers: {'Content-Type': 'application/json'},
  });
};

const results = [];

function check(pkg, expectWorking, req) {
  const problems = [];
  if (!req) {
    problems.push('no request was sent');
  } else {
    const lower = Object.fromEntries(Object.entries(req.headers).map(([k, v]) => [k.toLowerCase(), v]));
    if (!req.url.startsWith(EXPECT.host)) problems.push(`host is ${new URL(req.url).origin}, expected ${EXPECT.host}`);
    if (!lower[EXPECT.authHeader]) problems.push(`no ${EXPECT.authHeader} header`);
    else if (!String(lower[EXPECT.authHeader]).startsWith(EXPECT.authPrefix)) problems.push('auth header is not a Bearer token');
    if (!lower[EXPECT.versionHeader]) problems.push(`no ${EXPECT.versionHeader} header`);
    if (lower.nodeurlorapiaccesskey) problems.push('sends nodeUrlOrApiAccessKey — built from the SDK-Creator spec, not the product API');
  }
  results.push({pkg, expectWorking, req, problems});
}

// ---------------------------------------------------------------- liaas-js --
try {
  const LiaaS = require('liaas-js');
  const c = new LiaaS(KEY);
  captured = null;
  try { await c.walletBalance(KEY, 'probe-wallet'); } catch {}
  check('liaas-js', true, captured);
} catch (e) {
  results.push({pkg: 'liaas-js', expectWorking: true, problems: [`could not load: ${e.message}`]});
}

// -------------------------------------------------------------- pteri-sdk --
try {
  const m = require('pteri-sdk');
  const api = new m.WalletApi(new m.Configuration({basePath: EXPECT.host}));
  captured = null;
  try { await api.apiWalletBalanceGet({nodeUrlOrApiAccessKey: KEY, walletName: 'probe'}); } catch {}
  check('pteri-sdk', false, captured);
} catch (e) {
  results.push({pkg: 'pteri-sdk', expectWorking: false, problems: [`could not load: ${e.message}`]});
}

globalThis.fetch = realFetch;

// ------------------------------------------------------------------ report --
let failed = false;
for (const r of results) {
  const ok = r.problems.length === 0;
  const icon = ok ? '✓' : '✗';
  console.log(`\n${icon} ${r.pkg}${r.expectWorking ? '' : '  (known-broken)'}`);
  if (r.req) console.log(`   ${r.req.method} ${r.req.url}`);
  for (const p of r.problems) console.log(`   → ${p}`);
  if (ok) console.log('   speaks the product API correctly');
  if (!ok && r.expectWorking) failed = true;
}

console.log(
  failed
    ? '\nFAIL — a package that should work has drifted from the product API.'
    : '\nOK — every package behaved as expected.',
);
process.exit(failed ? 1 : 0);
