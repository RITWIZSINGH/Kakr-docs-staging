/**
 * Enterprise "talk to sales" form, submitting to HubSpot.
 *
 * Docusaurus builds a static site — there is no server runtime, so there is no
 * equivalent of a Nuxt `defineEventHandler` route to proxy through. This posts
 * straight to HubSpot's forms endpoint from the browser, which is what that
 * endpoint is designed for: it takes no auth and is CORS-enabled.
 *
 * portalId / formId come from .env via customFields in docusaurus.config.js.
 */
import React, {useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const FIELDS = [
  {name: 'firstname', label: 'First name', type: 'text', required: true, autoComplete: 'given-name'},
  {name: 'lastname', label: 'Last name', type: 'text', required: true, autoComplete: 'family-name'},
  {name: 'email', label: 'Work email', type: 'email', required: true, autoComplete: 'email'},
  {name: 'phone', label: 'Phone', type: 'tel', required: false, autoComplete: 'tel'},
  {
    name: 'company_sizes',
    label: 'Company size',
    type: 'select',
    required: false,
    options: ['1–10', '11–50', '51–200', '201–1000', '1000+'],
  },
  {
    name: 'industry',
    label: 'Industry',
    type: 'select',
    required: false,
    options: [
      'Fintech / Payments',
      'Crypto / Exchange',
      'AI / Agents',
      'Enterprise SaaS',
      'Infrastructure',
      'Other',
    ],
  },
];

const EMPTY = Object.fromEntries(FIELDS.map((f) => [f.name, '']));

export default function EnterpriseContactForm() {
  const {siteConfig} = useDocusaurusContext();
  const {portalId, formId} = siteConfig.customFields ?? {};

  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState(null);

  const configured = Boolean(portalId && formId);
  const update = (name) => (e) => setForm((f) => ({...f, [name]: e.target.value}));

  async function handleSubmit(e) {
    e.preventDefault();
    if (!configured || status === 'submitting') return;

    setStatus('submitting');
    setError(null);

    const payload = {
      fields: FIELDS.filter((f) => form[f.name]).map((f) => ({
        name: f.name,
        value: form[f.name],
      })),
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(payload),
        },
      );

      if (!res.ok) {
        // HubSpot returns a JSON body describing which field failed validation.
        const detail = await res.json().catch(() => null);
        throw new Error(
          detail?.errors?.[0]?.message ?? detail?.message ?? `Submission failed (${res.status})`,
        );
      }

      setStatus('success');
      setForm(EMPTY);
    } catch (err) {
      setStatus('error');
      setError(err.message ?? 'Something went wrong. Please try again.');
    }
  }

  if (!configured) {
    return (
      <div className={styles.notice}>
        <strong>Form not configured.</strong> Set <code>PORTAL_ID</code> and{' '}
        <code>FORM_ID</code> in <code>.env</code> (or in the host's environment
        variables) and rebuild.
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <strong>Thanks — we have your details.</strong>
        <p>Someone from the enterprise team will be in touch.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate={false}>
      <div className={styles.grid}>
        {FIELDS.map((f) => (
          <label
            key={f.name}
            className={f.type === 'select' ? styles.field : styles.field}>
            <span className={styles.label}>
              {f.label}
              {f.required ? <span className={styles.req} aria-hidden="true"> *</span> : null}
            </span>

            {f.type === 'select' ? (
              <select
                className={styles.input}
                name={f.name}
                value={form[f.name]}
                required={f.required}
                onChange={update(f.name)}>
                <option value="">Select…</option>
                {f.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                className={styles.input}
                type={f.type}
                name={f.name}
                value={form[f.name]}
                required={f.required}
                autoComplete={f.autoComplete}
                onChange={update(f.name)}
              />
            )}
          </label>
        ))}
      </div>

      {status === 'error' ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}

      <button
        className={styles.submit}
        type="submit"
        disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Talk to the enterprise team'}
      </button>

      <p className={styles.legal}>
        Submitting sends these details to our CRM so the enterprise team can reply.
        See the <a href="/privacy-policy">privacy policy</a>.
      </p>
    </form>
  );
}
