import { getPost, getAllPosts, formatDate } from '@/lib/blog'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getPost(params.slug)
    return {
      title: `${post.title} — Visibly AI`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        url: `https://www.getvisiblyai.com/blog/${post.slug}`,
        type: 'article',
        publishedTime: post.date,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description,
      },
    }
  } catch {
    return {}
  }
}

export default async function BlogPost({ params }: Props) {
  let post
  try {
    post = await getPost(params.slug)
  } catch {
    notFound()
  }

  return (
    <>
      <Nav />
      <main>
        {/* Post header */}
        <section className="bg-brand-offwhite border-b border-brand-cream-dark py-14">
          <div className="mx-auto max-w-2xl px-6">
            <a
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-[#7d8fa8] hover:text-brand-navy mb-6 transition-colors"
            >
              ← All posts
            </a>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs font-medium text-brand-red bg-red-50 px-2 py-1 rounded-full">
                AEO
              </span>
              {post.readTime && (
                <span className="text-xs text-[#9aabb8]">{post.readTime}</span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-navy leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-[#5a6f87] text-lg mb-6 leading-relaxed">{post.description}</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white text-xs font-bold">
                VA
              </div>
              <div>
                <p className="text-sm font-medium text-brand-navy">Visibly AI Team</p>
                <p className="text-xs text-[#9aabb8]">{formatDate(post.date)}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Post body */}
        <section className="py-14 bg-white">
          <div className="mx-auto max-w-2xl px-6">
            <div
              className="prose prose-lg prose-slate max-w-none
                prose-headings:text-brand-navy prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-[#3d4f5c] prose-p:leading-relaxed prose-p:mb-5
                prose-strong:text-brand-navy
                prose-a:text-brand-red prose-a:no-underline hover:prose-a:underline
                prose-li:text-[#3d4f5c]
                prose-hr:border-brand-cream-dark"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-offwhite border-t border-brand-cream-dark py-14">
          <div className="mx-auto max-w-2xl px-6">
            <div className="bg-brand-navy rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-2">
                Score your content for AI citation — free
              </h2>
              <p className="text-white/60 mb-6 text-sm max-w-sm mx-auto">
                Visibly AI checks all 8 AEO signals in your Gutenberg sidebar as you write.
              </p>
              <a
                href="https://wordpress.org/plugins/visibly-ai/"
                className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Install Free Plugin →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
