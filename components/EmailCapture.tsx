'use client'

import { useState } from 'react'

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  'https://web-production-8f080.up.railway.app'

type Status = 'idle' | 'sending' | 'done' | 'error'

export default function EmailCapture({ source = 'homepage' }: { source?: string }) {
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('') // honeypot, hidden from real users
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    setError('')
    try {
      const res = await fetch(`${API_BASE}/v1/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source, company }),
      })
      if (res.ok) {
        setStatus('done')
        setEmail('')
        return
      }
      const body = await res.json().catch(() => null)
      setError(body?.detail || 'Something went wrong. Please try again.')
      setStatus('error')
    } catch {
      setError('Could not reach the server. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section className="py-20 bg-brand-blue-light">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-extrabold text-brand-navy mb-3">
          One AEO tactic, every few days
        </h2>
        <p className="text-base text-[#6b7a94] mb-8">
          Short, practical notes on getting cited by AI search. Written by the person
          building the plugin. Unsubscribe in one click.
        </p>

        {status === 'done' ? (
          <p
            role="status"
            className="text-brand-navy font-semibold bg-white border border-brand-cream-dark rounded-xl py-4 px-6 inline-block"
          >
            You are on the list. Check your inbox for the first one.
          </p>
        ) : (
          <form
            onSubmit={submit}
            className="flex flex-col sm:flex-row gap-3 justify-center"
            noValidate
          >
            <label htmlFor="ec-email" className="sr-only">
              Email address
            </label>
            <input
              id="ec-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-invalid={status === 'error'}
              aria-describedby={status === 'error' ? 'ec-error' : undefined}
              className="flex-1 min-w-0 sm:max-w-xs px-4 py-3.5 rounded-xl border border-brand-cream-dark bg-white text-brand-navy placeholder:text-[#9aa7bd] focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            {/* Honeypot. Hidden from people, usually filled by bots. */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="absolute left-[-9999px] w-px h-px opacity-0"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-brand-red text-white font-semibold text-base hover:bg-brand-red-dark transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Signing you up...' : 'Send them to me'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p id="ec-error" role="alert" className="mt-4 text-sm text-brand-red font-medium">
            {error}
          </p>
        )}
      </div>
    </section>
  )
}
