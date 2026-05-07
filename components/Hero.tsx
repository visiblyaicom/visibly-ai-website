export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-cream rounded-full blur-3xl opacity-40" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-cream border border-brand-cream-dark px-4 py-1.5 text-sm font-medium text-brand-navy mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
          </span>
          Free WordPress plugin — no API key required
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-brand-navy leading-tight mb-6">
          Rank in search.
          <br />
          <span className="gradient-text">Get cited by AI.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl text-[#6b7a94] max-w-2xl mx-auto mb-10 leading-relaxed">
          Visibly AI optimizes your WordPress content for Google, ChatGPT Search, and Perplexity.
          The SEO tool built for the AI era — not the blue-links world Yoast was built for.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wordpress.org/plugins/visibly-ai/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-red text-white font-semibold text-base hover:bg-brand-red-dark transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Install Free Plugin
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-brand-navy font-semibold text-base border border-brand-cream-dark hover:bg-brand-offwhite transition-colors"
          >
            See Pro Features
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Social proof */}
        <p className="mt-8 text-sm text-[#8e9eb5]">
          Works alongside Yoast, Rank Math, and AIOSEO &mdash; no conflicts
        </p>

        {/* Score preview card */}
        <div className="mt-16 mx-auto max-w-sm rounded-2xl border border-brand-cream-dark bg-white shadow-xl overflow-hidden text-left">
          <div className="bg-brand-offwhite border-b border-brand-cream-dark px-4 py-2.5 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-brand-red" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="text-xs text-[#8e9eb5] ml-2">Visibly AI — Gutenberg sidebar</span>
          </div>
          <div className="p-5">
            <div className="text-center mb-4">
              <div className="text-5xl font-bold text-brand-blue leading-none">78</div>
              <div className="text-xs text-[#8e9eb5] mt-1">/ 100</div>
              <div className="mt-2 inline-block px-3 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Good</div>
            </div>
            <div className="space-y-2 text-xs">
              {[
                { label: 'Question-format heading', pass: true, pts: 20 },
                { label: 'Short answer after question', pass: true, pts: 15 },
                { label: 'FAQ schema attached', pass: true, pts: 15 },
                { label: 'Intro paragraph ≤100 words', pass: true, pts: 10 },
                { label: 'Clean heading hierarchy', pass: true, pts: 10 },
                { label: 'Word count 300–1500', pass: false, pts: 10 },
                { label: 'Meta description present', pass: false, pts: 10 },
                { label: 'Defined terms', pass: false, pts: 10 },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between py-1.5 border-b border-brand-offwhite last:border-0">
                  <span className="flex items-center gap-1.5">
                    <span className={s.pass ? 'text-green-600 font-bold' : 'text-brand-red font-bold'}>{s.pass ? '✓' : '✗'}</span>
                    <span className={s.pass ? 'text-brand-navy' : 'text-[#7d8fa8]'}>{s.label}</span>
                  </span>
                  <span className={s.pass ? 'text-green-600 font-semibold' : 'text-[#b0bfcc]'}>
                    {s.pass ? `+${s.pts}` : '0'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
