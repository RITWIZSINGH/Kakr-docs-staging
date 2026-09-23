#!/usr/bin/env node
/**
 * Verifies that the published JavaScript SDKs still speak the product API.
 *
 *   node scripts/verify-sdks.mjs
 *
 * Self-contained: it installs the packages into a temp directory of its own, so
 * it runs from a clean checkout with no setup and without adding SDK packages to
 * this project's dependencies. Pass --keep to leave the temp dir for poking at.
 *
 * No API key required, and nothing leaves the machine: global fetch is
 * intercepted, so we inspect what each client *would* have sent. That is enough
 * to catch the failure that matters — a client built against the wrong contract,
 * which authenticates with the wrong header and calls the wrong paths. No key
 * would fix that, so there is no point having one.
 *
 * Expectations come from the Postman collection (the product API):
 *   base   https://pteri.xyz/api
 *   auth   Authorization: Bearer <key>   +   Usev2: true
 *   scope  wallet / encryptedPassphrase headers where applicable
 *
 * Exit codes:  0 all as expected · 1 a working package drifted · 2 setup failed
 */

import {createRequire} from 'node:module';
import {execFileSync} from 'node:child_process';
import {mkdtempSync, rmSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';

const KEEP = process.argv.includes('--keep');

const EXPECT = {
  host: 'https://pteri.xyz',
  authHeader: 'authorization',
  authPrefix: 'Bearer ',
  versionHeader: 'usev2',
};

const PACKAGES = [
  {name: 'liaas-js', expectWorking: true},
  {name: 'pteri-sdk', expectWorking: false},
];

const KEY = 'pt_live_fake_key_for_probing';

// ------------------------------------------------------------------ setup ---

const dir = mkdtempSync(join(tmpdir(), 'pteri-sdk-check-'));
writeFileSync(join(dir, 'package.json'), JSON.stringify({name: 'sdk-check', private: true}));

console.log(`Installing ${PACKAGES.map((p) => p.name).join(', ')} into a temp dir…`);
try {
  execFileSync('npm', ['install', '--silent', '--no-audit', '--no-fund', ...PACKAGES.map((p) => p.name)], {
    cwd: dir,
    stdio: ['ignore', 'ignore', 'pipe'],
  });
} catch (e) {
  console.error('\nCould not install the packages. Are you online?\n');
  console.error(String(e.stderr || e.message).trim().split('\n').slice(0, 5).join('\n'));
  if (!KEEP) rmSync(dir, {recursive: true, force: true});
  process.exit(2);
}

const require = createRequire(join(dir, 'noop.js'));

// -------------------------------------------------------------- intercept ---

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

// ----------------------------------------------------------------- probes ---

/** Each probe returns the request the client tried to send. */
const PROBES = {
  'liaas-js': async () => {
    const LiaaS = require('liaas-js');
    const c = new LiaaS(KEY);
    try { await c.walletBalance(KEY, 'probe-wallet'); } catch {}
  },
  'pteri-sdk': async () => {
    const m = require('pteri-sdk');
    const api = new m.WalletApi(new m.Configuration({basePath: EXPECT.host}));
    try { await api.apiWalletBalanceGet({nodeUrlOrApiAccessKey: KEY, walletName: 'probe'}); } catch {}
  },
};

function grade(req) {
  if (!req) return ['no request was sent'];
  const lower = Object.fromEntries(Object.entries(req.headers).map(([k, v]) => [k.toLowerCase(), v]));
  const problems = [];
  if (!req.url.startsWith(EXPECT.host)) problems.push(`host is ${new URL(req.url).origin}, expected ${EXPECT.host}`);
  if (!lower[EXPECT.authHeader]) problems.push(`no ${EXPECT.authHeader} header`);
  else if (!String(lower[EXPECT.authHeader]).startsWith(EXPECT.authPrefix)) problems.push('auth header is not a Bearer token');
  if (!lower[EXPECT.versionHeader]) problems.push(`no ${EXPECT.versionHeader} header`);
  if (lower.nodeurlorapiaccesskey) problems.push('sends nodeUrlOrApiAccessKey — built from the SDK-Creator spec, not the product API');
  return problems;
}

const results = [];
for (const {name, expectWorking} of PACKAGES) {
  captured = null;
  let loadError = null;
  try {
    await PROBES[name]();
  } catch (e) {
    loadError = e.message.split('\n')[0];
  }
  results.push({name, expectWorking, req: captured, loadError, problems: loadError ? [] : grade(captured)});
}

globalThis.fetch = realFetch;
if (!KEEP) rmSync(dir, {recursive: true, force: true});
else console.log(`\n(temp dir kept at ${dir})`);

// ----------------------------------------------------------------- report ---

let drifted = false;
for (const r of results) {
  const ok = !r.loadError && r.problems.length === 0;
  console.log(`\n${ok ? '✓' : '✗'} ${r.name}${r.expectWorking ? '' : '  (known-broken)'}`);
  if (r.loadError) {
    console.log(`   could not load: ${r.loadError}`);
  } else {
    if (r.req) console.log(`   ${r.req.method} ${r.req.url}`);
    for (const p of r.problems) console.log(`   → ${p}`);
    if (ok) console.log('   speaks the product API correctly');
  }
  if (!ok && r.expectWorking) drifted = true;
}

console.log(
  drifted
    ? '\nFAIL — a package that should work no longer speaks the product API.'
    : '\nOK — every package behaved as expected.',
);
process.exit(drifted ? 1 : 0);
