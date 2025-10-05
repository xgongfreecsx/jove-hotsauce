import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-charcoal/40 bg-charcoal/60 text-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="font-extrabold tracking-wide text-xl">
          SAUCECHO<span className="text-ember"> Hot Sauce</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="#product" className="hidden sm:inline text-sm text-white/90 hover:text-white transition">Bottle</a>
          <a href="#cta" className="hidden sm:inline text-sm text-white/90 hover:text-white transition">Get It</a>

          <div className="relative group">
            <button className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide">
              <span className="bg-gradient-to-r from-chili to-ember bg-clip-text text-transparent group-hover:animate-flicker">
                INDEX
              </span>
              <svg className="w-4 h-4 text-ember group-hover:text-white transition" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.062l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="pointer-events-none absolute right-0 mt-2 w-48 rounded-lg border border-white/10 bg-charcoal/95 shadow-ember opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition p-2">
              <a href="#hero" className="block px-3 py-2 rounded-md text-sm hover:bg-white/5">Hero</a>
              <a href="#spread" className="block px-3 py-2 rounded-md text-sm hover:bg-white/5">Spread</a>
              <a href="#rhythm" className="block px-3 py-2 rounded-md text-sm hover:bg-white/5">Rhythm</a>
              <a href="#product" className="block px-3 py-2 rounded-md text-sm hover:bg-white/5">Product</a>
              <a href="#cta" className="block px-3 py-2 rounded-md text-sm hover:bg-white/5">Get It</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
