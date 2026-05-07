import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Visibly AI — SEO for the AI Search Era',
  description: 'Optimize your WordPress content for Google, ChatGPT Search, and Perplexity. llms.txt, schema markup, AI-powered suggestions, and GSC insights — all in one plugin.',
  metadataBase: new URL('https://visiblyai.com'),
  openGraph: {
    title: 'Visibly AI — SEO for the AI Search Era',
    description: 'Optimize your content for Google and AI answer engines. Free WordPress plugin.',
    url: 'https://visiblyai.com',
    siteName: 'Visibly AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visibly AI — SEO for the AI Search Era',
    description: 'Optimize your content for Google and AI answer engines. Free WordPress plugin.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
