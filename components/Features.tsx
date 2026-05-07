const FREE_FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    title: 'llms.txt Auto-Generator',
    description: 'Automatically builds and maintains an llms.txt file at your site root — the emerging standard for telling AI engines what your site is about. Zero configuration.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Schema Markup Wizard',
    description: 'Add FAQ, HowTo, and Article structured data right from the Gutenberg sidebar — no code, no shortcodes. JSON-LD is injected automatically on publish.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Visibility Scorer',
    description: '8-signal score from 0–100 directly in your editor. Exactly like Yoast\'s traffic light — but scoring for AI citability, not just keyword density. Tells you exactly what to fix.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: 'Meta Description Editor',
    description: 'A native meta description field in the sidebar — no Yoast required. With live character count, quality feedback, and auto-detection of other SEO plugins.',
  },
]

const PRO_FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'AI Content Optimizer',
    description: 'Claude reads your post, sees your failing signals, and writes the exact text to add. Not generic tips — actual sentences and definitions you can paste in.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803z" />
      </svg>
    ),
    title: 'GSC Keyword Insights',
    description: 'Connect Google Search Console and see per-post which queries you\'re close to page 1 for, which have low CTR, and exactly what to change to break through.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
    title: 'AI + GSC Combined',
    description: '"You rank #14 for \'what is X\' with 0.8% CTR — here\'s the definition to add that will help AI engines surface your answer." Specific. Actionable. Per post.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">

        {/* Free features */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-cream text-brand-navy text-xs font-semibold uppercase tracking-wide mb-4">Free forever</span>
          <h2 className="text-4xl font-extrabold text-brand-navy mb-4">Everything you need to get found</h2>
          <p className="text-lg text-[#7d8fa8] max-w-2xl mx-auto">
            Install the plugin and you get four tools that move the needle immediately. No account required, no API key, no setup.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {FREE_FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-brand-offwhite p-6 hover:border-brand-cream-dark hover:shadow-sm transition-all bg-white">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-blue-light text-brand-blue mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-brand-navy mb-2">{f.title}</h3>
              <p className="text-sm text-[#7d8fa8] leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Pro features */}
        <div className="rounded-3xl bg-brand-navy p-10 md:p-14">
          <div className="max-w-xl mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-[#fde4e0] text-brand-red text-xs font-semibold uppercase tracking-wide mb-4 border border-[#fab0a6]">Pro</span>
            <h2 className="text-3xl font-extrabold text-white mb-4">AI that does the work for you</h2>
            <p className="text-white/50 leading-relaxed">
              Connect Claude and Google Search Console. Get specific, copy-pasteable suggestions per post — not generic advice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PRO_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/8 transition-colors">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#d6dffe] text-brand-blue mb-4">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-red text-white font-semibold text-sm hover:bg-brand-red-dark transition-colors"
            >
              Get Pro — from $19/mo
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/15 transition-colors border border-white/20"
            >
              See all features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
