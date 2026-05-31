import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Visibly AI',
  description: 'Privacy Policy for Visibly AI, the WordPress SEO and AEO optimization plugin.',
}

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold text-[#2e3d5c] mb-2">Privacy Policy</h1>
        <p className="text-sm text-[#6b7a94] mb-12">Last updated: May 14, 2025</p>

        <div className="space-y-10 text-[#4a5568] leading-relaxed">

          <section>
            <p>
              Visibly AI is built on a simple principle: we only collect what we need to run the
              service, we don't sell or share your data, and we don't track you in the background.
              This policy explains what we collect, why, and how it's handled.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2e3d5c] mb-3">1. What We Collect</h2>

            <h3 className="font-semibold text-[#2e3d5c] mt-5 mb-2">Email address</h3>
            <p>
              Collected at the point of purchase to deliver your Pro license key and send order
              receipts. We do not add you to a marketing list without your explicit opt-in.
            </p>

            <h3 className="font-semibold text-[#2e3d5c] mt-5 mb-2">License key</h3>
            <p>
              When you activate your Pro license in WordPress, the key is sent to our API to verify
              it is valid and to track usage against your plan limits. The key is stored on our
              servers only for this purpose.
            </p>

            <h3 className="font-semibold text-[#2e3d5c] mt-5 mb-2">Post content (Pro only — on demand)</h3>
            <p>
              When you click "Analyze with AI" in the WordPress editor, the text content of the
              post you are editing is sent to the Visibly AI API. This content is passed to the
              Claude AI model (Anthropic) to generate improvement suggestions and is not stored on
              our servers after the response is returned. It is never used to train AI models.
            </p>
            <p className="mt-2">
              No content is collected automatically or in the background. If you never click
              "Analyze with AI," no post content is ever sent.
            </p>

            <h3 className="font-semibold text-[#2e3d5c] mt-5 mb-2">Usage counts</h3>
            <p>
              We track the number of AI analyses you have run in a given billing period to enforce
              plan limits (e.g., 50 analyses/month on the Starter plan). This is a counter
              associated with your license key — we do not store the content of each analysis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2e3d5c] mb-3">2. What We Don't Collect</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>No browsing or usage analytics on how you use the plugin day-to-day.</li>
              <li>No data about your WordPress site, users, or visitors beyond what you explicitly submit for analysis.</li>
              <li>No tracking pixels, fingerprinting, or third-party ad tracking on the plugin or API.</li>
              <li>No cookies set by the plugin on your site or your visitors' browsers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2e3d5c] mb-3">3. Third-Party Services</h2>
            <p>
              Visibly AI uses the following third-party providers. Each has its own privacy policy
              that governs how they handle data.
            </p>

            <div className="mt-4 space-y-5">
              <div>
                <h3 className="font-semibold text-[#2e3d5c]">Anthropic (Claude AI)</h3>
                <p className="mt-1">
                  Your post content is sent to Anthropic's API when you trigger an AI analysis.
                  Anthropic does not use API data to train their models. See{' '}
                  <a
                    href="https://www.anthropic.com/privacy"
                    className="text-[#4a71f6] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Anthropic's privacy policy
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2e3d5c]">Stripe</h3>
                <p className="mt-1">
                  Processes all payments. We do not store payment card information — Stripe handles
                  it entirely. See{' '}
                  <a
                    href="https://stripe.com/privacy"
                    className="text-[#4a71f6] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stripe's privacy policy
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2e3d5c]">Resend</h3>
                <p className="mt-1">
                  Used to send transactional emails — license delivery, receipts. Your email
                  address is shared with Resend for this purpose. See{' '}
                  <a
                    href="https://resend.com/legal/privacy-policy"
                    className="text-[#4a71f6] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resend's privacy policy
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2e3d5c]">Railway</h3>
                <p className="mt-1">
                  The Visibly AI API is hosted on Railway. Your API requests (post content, license
                  keys) pass through Railway's infrastructure. See{' '}
                  <a
                    href="https://railway.com/legal/privacy"
                    className="text-[#4a71f6] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Railway's privacy policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2e3d5c] mb-3">4. Data Retention</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>License and account data</strong> is kept for as long as your subscription
                is active, and for a reasonable period after to handle billing disputes or
                reactivations. You can request deletion at any time.
              </li>
              <li>
                <strong>Post content</strong> submitted for analysis is not stored on our servers.
                It is processed in memory, the response is returned, and it is discarded.
              </li>
              <li>
                <strong>Usage counters</strong> are reset each billing cycle and retained for a
                short period for billing and support purposes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2e3d5c] mb-3">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete the personal data we hold about
              you. To exercise these rights, email us at{' '}
              <a
                href="mailto:hello@getvisiblyai.com"
                className="text-[#4a71f6] hover:underline"
              >
                hello@getvisiblyai.com
              </a>
              . We will respond within a reasonable timeframe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2e3d5c] mb-3">6. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the
              "Last updated" date at the top of this page. For significant changes, we will notify
              active Pro users by email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2e3d5c] mb-3">7. Contact</h2>
            <p>
              Questions about this Privacy Policy or how we handle your data? Reach us at{' '}
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
            <a href="/terms" className="hover:text-[#2e3d5c] transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-[#2e3d5c] transition-colors font-medium text-[#2e3d5c]">Privacy</a>
            <a href="mailto:hello@getvisiblyai.com" className="hover:text-[#2e3d5c] transition-colors">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
