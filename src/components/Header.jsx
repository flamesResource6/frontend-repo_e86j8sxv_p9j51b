import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-white/60 border-b border-slate-200/80">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 h-14 flex items-center justify-between">
        <div className="text-slate-900 font-semibold tracking-tight">NOVA</div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#testimonials" className="hover:text-slate-900">Stories</a>
        </nav>
        <a href="#" className="text-[var(--accent)] font-semibold">Sign in</a>
      </div>
    </header>
  )
}
