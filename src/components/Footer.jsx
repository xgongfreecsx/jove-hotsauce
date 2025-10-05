import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">
          © {new Date().getFullYear()} APOXIAZULE Hot Sauce. All rights reserved.
        </p>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#product" className="text-white/70 hover:text-white">Ingredients</a>
          <a href="#cta" className="text-white/70 hover:text-white">Shipping</a>
          <a href="#hero" className="text-white/70 hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
