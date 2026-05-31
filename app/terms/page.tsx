import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Visibly AI',
  description: 'Terms of Service for Visibly AI, the WordPress SEO and AEO optimization plugin.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple header */}
      <header className="border-b border-[#ddd0bf] bg-white">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/visibly-logo.png" alt="Visibly AI" className="h-9 w-auto" />
          </a>
          <a
            href="/"
            className="text-sm text-[#6b7a94] hover:text-[#2e3d5c] transition-colors"
          >
            ← Back to home
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold text-[#2e3d5c] mb-2">Terms of Service</h1>
        <p className="text-sm text-[#6b7a94] mb-12">Last updated: May 14, 2025</p>

        <div className="space-y-10 text-[#4a5568] leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-[#2e3d5c] mb-3">1. Acceptance of Terms</h2>
            <p>
              By installing, activating, or using the Visibly AI WordPress plugin, or by accessing
              the Visibly AI API or website at getvisiblyai.com, you agree to be bound by these
              Terms of Service. If you do not agree to these terms, do not use the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2e3d5c] mb-3">2. Description of Service</h2>
            <p>
              Visibly AI is a WordPress plugin that helps website owners optimize their content for
              traditional search engines and AI answer engines (AEO — Answer Engine Optimization).
              The free version of the plugin provides local features including llms.txt generation,
              schema markup tools, and visibility scoring — all processed on your WordPress server
              with no external API calls.
            </p>
            <p className="mt-3">
              The Pro version optionally connects to the Visibly AI API to deliver AI-powered
              content analysis and improvement suggestions, powered by Claude AI (Anthropic). Pro
              features are only activated when you purchase a license and explicitly trigger an
              analysis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2e3d5c] mb-3">3. Pro Subscription</h2>
            <p>
              Pro licenses are available on a monthly or annual subscription basis. Payments are
              processed securely through Stripe. By purchasing a Pro license, you authorize Visibly
              AI to charge your payment method on a recurring basis according to your selected plan.
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>You may cancel your subscription at any time from your account or by emailing hello@getvisiblyai.com.</li>
              <li>Cancellation takes effect at the end of the current billing period — you retain access until then.</li>
              <li>We do not offer refunds for partial billing periods, but we will work with you if there is an exceptional circumstance.</li>
              <li>We reserve the right to change pricing with reasonable notice. Price changes will not affect your current billing period.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2e3d5c] mb-3">4. Data You Send Us</h2>
            <p>When you use Visibly AI, the following data may be involved:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                <strong>Post content:</strong> When you click "Analyze with AI" in the editor,
                the text content of that post is sent to the Visibly AI API for analysis. This is
                initiated only by your explicit action — no content is sent automatically or passively.
              </li>
              <li>
                <strong>License key:</strong> When you activate a Pro license, your key is sent to
                our API to verify it is valid.
              </li>
              <li>
                <strong>Email address:</strong> Collected at the point of purchase to deliver your
                license key. We do not send marketing email without your opt-in.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2e3d5c] mb-3">5. Third-Party Services</h2>
            <p>Visibly AI relies on the following third-party services to operate:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                <strong>Anthropic / Claude AI:</strong> Powers the AI content analysis in the Pro
                plan. Your post content is sent to Anthropic's API when you trigger an analysis.
                Anthropic's{' '}
                <a
                  href="https://www.anthropic.com/privacy"
                  className="text-[#4a71f6] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy policy
                </a>{' '}
                governs how they handle that data.
              </li>
              <li>
                <strong>Stripe:</strong> Handles all payment processing. We do not store your card
                details. Stripe's{' '}
                <a
                  href="https://stripe.com/privacy"
                  className="text-[#4a71f6] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy policy
                </a>{' '}
                applies to payment data.
              </li>
              <li>
                <strong>Resend:</strong> Used to send transactional email (license delivery,
                receipts). Resend's{' '}
                <a
                  href="https://resend.com/legal/privacy-policy"
                  className="text-[#4a71f6] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy policy
                </a>{' '}
                applies to email delivery data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2e3d5c] mb-3">6. Intellectual Property</h2>
            <p>
              The Visibly AI plugin, website, and API are owned by Visibly AI and protected by
              applicable intellectual property laws. The free plugin is licensed under the GPLv2
              or later, consistent with WordPress plugin repository requirements. The Pro API
              and its underlying systems remain proprietary.
            </p>
            <p className="mt-3">
              Your content remains yours. We make no claim to ownership of any content you submit
              for analysis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2e3d5c] mb-3">7. Disclaimer of Warranties</h2>
            <p>
              Visibly AI is provided "as is" and "as available" without warranties of any kind,
              either express or implied. We do not warrant that the service will be uninterrupted,
              error-free, or that AI-generated suggestions will be accurate, complete, or suitable
              for any particular purpose. SEO and AEO outcomes are not guaranteed — search engine
              behavior is outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2e3d5c] mb-3">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Visibly AI shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages, including but
              not limited to loss of revenue, loss of data, or loss of business opportunity, arising
              out of your use or inability to use the service. Our total liability to you for any
              claim shall not exceed the amount you paid us in the three months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2e3d5c] mb-3">9. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with applicable law. Any
              disputes arising under these Terms will be subject to the exclusive jurisdiction of
              the courts in the applicable jurisdiction. We encourage you to contact us first —
              most issues can be resolved quickly and informally.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2e3d5c] mb-3">10. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. When we do, we will update the "Last
              updated" date at the top of this page. Continued use of the service after changes
              are posted constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2e3d5c] mb-3">11. Contact</h2>
            <p>
              Questions about these Terms? Email us at{' '}
              <a
                href="mailto:hello@getvisiblyai.com"
                className="text-[#4a71f6] hover:underline"
              >
                hello@getvisiblyai.com
              </a>
              .
            </p>
          </section>

        </div>
      </main>

      {/* Simple footer */}
      <footer className="border-t border-[#ddd0bf] mt-16">
        <div className="mx-auto max-w-3xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6b7a94]">
            &copy; {new Date().getFullYear()} Visibly AI. All rights reserved.
          </p>
          <nav className="flex items-center gap-6 text-xs text-[#6b7a94]">
            <a href="/terms" className="hover:text-[#2e3d5c] transition-colors font-medium text-[#2e3d5c]">Terms</a>
            <a href="/privacy" className="hover:text-[#2e3d5c] transition-colors">Privacy</a>
            <a href="mailto:hello@getvisiblyai.com" className="hover:text-[#2e3d5c] transition-colors">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
