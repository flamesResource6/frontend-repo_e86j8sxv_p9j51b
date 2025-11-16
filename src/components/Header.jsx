import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-[#05060A]/60 border-b border-white/5">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 h-14 flex items-center justify-between">
        <div className="text-white font-semibold tracking-tight">NOVA</div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#testimonials" className="hover:text-white">Stories</a>
        </nav>
        <a href="#" className="text-[var(--accent)] font-semibold">Sign in</a>
      </div>
    </header>
  )
}
