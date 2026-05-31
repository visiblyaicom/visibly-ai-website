import { getAllPosts, formatDate } from '@/lib/blog'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Visibly AI',
  description: 'AEO tips, AI search insights, and WordPress optimization guides from the team at Visibly AI.',
  openGraph: {
    title: 'Blog — Visibly AI',
    description: 'AEO tips, AI search insights, and WordPress optimization guides.',
    url: 'https://www.getvisiblyai.com/blog',
  },
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <>
      <Nav />
      <main>
        {/* Header */}
        <section className="bg-brand-offwhite border-b border-brand-cream-dark py-16">
          <div className="mx-auto max-w-4xl px-6">
            <p className="text-sm font-semibold text-brand-red uppercase tracking-widest mb-3">Blog</p>
            <h1 className="text-4xl font-bold text-brand-navy mb-4">
              AEO insights &amp; guides
            </h1>
            <p className="text-lg text-[#5a6f87] max-w-xl">
              How to structure your WordPress content so AI answer engines cite it — practical guides, no fluff.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            {posts.length === 0 ? (
              <p className="text-[#7d8fa8]">No posts yet — check back soon.</p>
            ) : (
              <div className="grid gap-8 md:grid-cols-2">
                {posts.map((post) => (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-white border border-brand-cream-dark rounded-2xl p-7 hover:border-brand-blue hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-medium text-brand-red bg-red-50 px-2 py-1 rounded-full">
                        AEO
                      </span>
                      {post.readTime && (
                        <span className="text-xs text-[#9aabb8]">{post.readTime}</span>
                      )}
                    </div>
                    <h2 className="text-lg font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#5a6f87] leading-relaxed mb-5 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#9aabb8]">{formatDate(post.date)}</span>
                      <span className="text-sm font-semibold text-brand-red group-hover:underline">
                        Read →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-navy py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Score your content for AI citation — free
            </h2>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Visibly AI checks all 8 AEO signals in your Gutenberg sidebar as you write. No API key needed.
            </p>
            <a
              href="https://wordpress.org/plugins/visibly-ai/"
              className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Install Free Plugin
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
