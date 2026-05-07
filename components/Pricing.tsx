'use client'

import { useState } from 'react'

const PLANS = [
  {
    name: 'Free',
    monthly: 0,
    yearly: 0,
    description: 'The full free plugin. No account required.',
    cta: 'Install Free Plugin',
    ctaHref: 'https://wordpress.org/plugins/visibly-ai/',
    highlighted: false,
    features: [
      'llms.txt auto-generator',
      'Schema markup wizard (FAQ, HowTo, Article)',
      'Visibility scorer — 8 signals, 0–100',
      'Meta description editor',
      'Gutenberg sidebar integration',
      'Unlimited posts',
      '1 WordPress site',
    ],
  },
  {
    name: 'Pro',
    monthly: 19,
    yearly: 149,
    description: 'For content creators who want AI-powered recommendations.',
    cta: 'Get Pro',
    ctaHref: '#',
    highlighted: true,
    badge: 'Most popular',
    features: [
      'Everything in Free',
      'AI Content Optimizer (Claude)',
      'Copy-pasteable suggestions per post',
      'Google Search Console integration',
      'Per-post query insights + opportunities',
      'AI + GSC combined analysis',
      '1 WordPress site',
    ],
  },
  {
    name: 'Agency',
    monthly: 49,
    yearly: 399,
    description: 'For agencies and teams managing multiple client sites.',
    cta: 'Get Agency',
    ctaHref: '#',
    highlighted: false,
    features: [
      'Everything in Pro',
      'Up to 10 WordPress sites',
      'Multi-site dashboard on visiblyai.com',
      'Team seats (coming soon)',
      'White-label option (coming soon)',
      'Priority support',
    ],
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-cream text-brand-navy text-xs font-semibold uppercase tracking-wide mb-4">Pricing</span>
          <h2 className="text-4xl font-extrabold text-brand-navy mb-4">Simple, honest pricing</h2>
          <p className="text-lg text-[#7d8fa8] max-w-xl mx-auto mb-8">
            Start free. Upgrade when you want AI suggestions and GSC data.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-brand-offwhite rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${!annual ? 'bg-white text-brand-navy shadow-sm' : 'text-[#7d8fa8] hover:text-brand-navy'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${annual ? 'bg-white text-brand-navy shadow-sm' : 'text-[#7d8fa8] hover:text-brand-navy'}`}
            >
              Annual
              <span className="text-xs font-bold text-green-700 bg-green-50 px-1.5 py-0.5 rounded-full">Save 35%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? 'bg-brand-navy text-white shadow-xl shadow-[#b0bfcc] ring-2 ring-brand-navy'
                  : 'bg-white border border-brand-cream-dark'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-red text-white text-xs font-bold">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className={`text-sm font-semibold uppercase tracking-wide mb-1 ${plan.highlighted ? 'text-white/50' : 'text-[#7d8fa8]'}`}>
                  {plan.name}
                </div>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-4xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-brand-navy'}`}>
                    {plan.monthly === 0 ? 'Free' : `$${annual ? Math.round(plan.yearly / 12) : plan.monthly}`}
                  </span>
                  {plan.monthly > 0 && (
                    <span className={`text-sm mb-1 ${plan.highlighted ? 'text-white/50' : 'text-[#8e9eb5]'}`}>/mo</span>
                  )}
                </div>
                {plan.monthly > 0 && annual && (
                  <div className={`text-xs ${plan.highlighted ? 'text-white/50' : 'text-[#8e9eb5]'}`}>
                    Billed ${plan.yearly}/yr
                  </div>
                )}
                <p className={`text-sm mt-3 leading-relaxed ${plan.highlighted ? 'text-white/60' : 'text-[#7d8fa8]'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${plan.highlighted ? 'text-white' : 'text-[#5a6f87]'}`}>
                    <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-brand-blue' : 'text-brand-red'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-colors ${
                  plan.highlighted
                    ? 'bg-brand-red text-white hover:bg-brand-red-dark'
                    : plan.monthly === 0
                      ? 'bg-brand-offwhite text-brand-navy border border-brand-cream-dark hover:bg-brand-cream'
                      : 'bg-brand-navy text-white hover:bg-brand-navy-mid'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#9fafc0] mt-8">
          Pricing is in USD. Cancel anytime. No contracts.
        </p>
      </div>
    </section>
  )
}
