export default function CTABanner() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-extrabold text-brand-navy mb-4">
          Start optimizing for AI search today
        </h2>
        <p className="text-lg text-[#6b7a94] mb-10 max-w-xl mx-auto">
          The free plugin takes 60 seconds to install. Your llms.txt is live the moment you activate it.
        </p>
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
            View Pro plans
          </a>
        </div>
      </div>
    </section>
  )
}
