export default function Footer() {
  return (
    <footer className="bg-brand-navy py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src="/visibly-logo.png" alt="Visibly AI" className="h-8 w-auto" />
          </a>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm text-white/50">
            <a href="/#features" className="hover:text-white transition-colors">Features</a>
            <a href="/#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="/blog" className="hover:text-white transition-colors">Blog</a>
            <a href="https://wordpress.org/plugins/visibly-ai/" className="hover:text-white transition-colors">Free Plugin</a>
            <a href="mailto:hello@getvisiblyai.com" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Legal */}
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Visibly AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
