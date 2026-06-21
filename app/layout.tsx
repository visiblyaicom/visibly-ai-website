import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const GA_ID = 'G-5BCK8QB8DP'

export const metadata: Metadata = {
  title: 'Visibly AI — SEO for the AI Search Era',
  description: 'Optimize your WordPress content for Google, ChatGPT Search, and Perplexity. llms.txt, schema markup, AI-powered suggestions, and GSC insights — all in one plugin.',
  metadataBase: new URL('https://www.getvisiblyai.com'),
  verification: {
    google: 'TiDYTAeZ4mAJ8ogLj2_2k2tIlaujyViqhEOpJvwncEE',
  },
  openGraph: {
    title: 'Visibly AI — SEO for the AI Search Era',
    description: 'Optimize your content for Google and AI answer engines. Free WordPress plugin.',
    url: 'https://www.getvisiblyai.com',
    siteName: 'Visibly AI',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Visibly AI — SEO for the AI Search Era' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visibly AI — SEO for the AI Search Era',
    description: 'Optimize your content for Google and AI answer engines. Free WordPress plugin.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
