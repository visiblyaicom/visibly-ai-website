'use client'

import { useState } from 'react'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#ddd0bf]">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="/visibly-logo.png" alt="Visibly AI" className="h-9 w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#features" className="text-sm text-[#6b7a94] hover:text-brand-navy transition-colors">Features</a>
          <a href="/#how-it-works" className="text-sm text-[#6b7a94] hover:text-brand-navy transition-colors">How it works</a>
          <a href="/#pricing" className="text-sm text-[#6b7a94] hover:text-brand-navy transition-colors">Pricing</a>
          <a href="/blog" className="text-sm text-[#6b7a94] hover:text-brand-navy transition-colors">Blog</a>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wordpress.org/plugins/visibly-ai/"
            className="text-sm font-medium text-[#5a6f87] hover:text-brand-navy transition-colors"
          >
            Free Plugin
          </a>
          <a
            href="#pricing"
            className="text-sm font-semibold px-4 py-2 rounded-lg bg-brand-red text-white hover:bg-brand-red-dark transition-colors"
          >
            Get Pro
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-[#7d8fa8] hover:text-brand-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-brand-offwhite bg-white px-6 py-4 space-y-3">
          <a href="/#features" className="block text-sm text-[#5a6f87] hover:text-brand-navy" onClick={() => setMobileOpen(false)}>Features</a>
          <a href="/#how-it-works" className="block text-sm text-[#5a6f87] hover:text-brand-navy" onClick={() => setMobileOpen(false)}>How it works</a>
          <a href="/#pricing" className="block text-sm text-[#5a6f87] hover:text-brand-navy" onClick={() => setMobileOpen(false)}>Pricing</a>
          <a href="/blog" className="block text-sm text-[#5a6f87] hover:text-brand-navy" onClick={() => setMobileOpen(false)}>Blog</a>
          <div className="pt-2 border-t border-brand-offwhite flex gap-3">
            <a href="https://wordpress.org/plugins/visibly-ai/" className="text-sm font-medium text-[#5a6f87]">Free Plugin</a>
            <a href="#pricing" className="text-sm font-semibold px-4 py-2 rounded-lg bg-brand-red text-white">Get Pro</a>

          </div>
        </div>
      )}
    </header>
  )
}
