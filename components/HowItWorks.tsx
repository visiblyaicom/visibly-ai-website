const STEPS = [
  {
    number: '01',
    title: 'Install the free plugin',
    description: 'Download from WordPress.org and activate. Your llms.txt is generated immediately. No API key, no account, no setup.',
    note: 'Free forever',
  },
  {
    number: '02',
    title: 'See your Visibility Score',
    description: 'Open any post in Gutenberg. The Visibly AI sidebar shows your score out of 100 with a breakdown of all 8 signals — and exactly what to fix for each one.',
    note: 'Instant, per post',
  },
  {
    number: '03',
    title: 'Get AI-powered suggestions',
    description: 'Upgrade to Pro and hit "Analyze with AI". Claude reads your post, checks your failing signals, and writes the exact text to paste in — in seconds.',
    note: 'Pro feature',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-brand-offwhite">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-cream text-brand-navy text-xs font-semibold uppercase tracking-wide mb-4">How it works</span>
          <h2 className="text-4xl font-extrabold text-brand-navy mb-4">From install to ranking in minutes</h2>
          <p className="text-lg text-[#7d8fa8] max-w-xl mx-auto">
            No configuration maze. Works out of the box on any WordPress site.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px bg-brand-cream-dark" />
              )}
              <div className="relative bg-white rounded-2xl border border-brand-cream-dark p-8 hover:shadow-sm transition-shadow">
                <div className="text-4xl font-extrabold text-brand-cream mb-4">{step.number}</div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">{step.title}</h3>
                <p className="text-sm text-[#7d8fa8] leading-relaxed mb-4">{step.description}</p>
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-blue-light text-brand-blue border border-[#c2cffd]">
                  {step.note}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Problem statement */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#fef2f0] text-brand-red text-xs font-semibold uppercase tracking-wide border border-[#fbc6be] mb-4">The problem</span>
            <h3 className="text-3xl font-extrabold text-brand-navy mb-4">
              40% of searches now go through AI. Your SEO plugin doesn&apos;t know that.
            </h3>
            <p className="text-[#7d8fa8] leading-relaxed mb-4">
              Yoast and Rank Math were built for the Google blue-links world. They measure keyword density, readability scores, and title lengths. None of those signals determine whether ChatGPT or Perplexity cites your content.
            </p>
            <p className="text-[#7d8fa8] leading-relaxed">
              AI answer engines look for structured data, question-and-answer formatting, clear definitions, and concise direct answers. Visibly AI scores exactly those signals.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { tool: 'Yoast', ai: false, score: 'Keyword density' },
              { tool: 'Rank Math', ai: false, score: 'Schema + keywords' },
              { tool: 'Visibly AI', ai: true, score: 'AI citability + Search' },
            ].map((row) => (
              <div key={row.tool} className={`flex items-center gap-4 p-4 rounded-xl border ${row.tool === 'Visibly AI' ? 'bg-brand-blue-light border-[#adbcfc]' : 'bg-white border-brand-cream-dark'}`}>
                <div className="w-24 font-semibold text-sm text-brand-navy">{row.tool}</div>
                <div className="flex items-center gap-1 w-24">
                  {row.ai
                    ? <span className="text-xs font-semibold text-brand-blue bg-[#d6dffe] px-2 py-0.5 rounded-full border border-[#c2cffd]">AI-native</span>
                    : <span className="text-xs text-[#9fafc0]">Legacy</span>
                  }
                </div>
                <div className="flex-1 text-sm text-[#6b7a94]">{row.score}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
