import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-fiery-radial" />
      <div className="absolute inset-0 bg-fiery-conic opacity-30 animate-heat" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/10 to-charcoal" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="block">Turn up the heat.</span>
            <span className="block bg-gradient-to-r from-chili to-ember bg-clip-text text-transparent">Taste the rush.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-prose">
            SAUCECHO Hot Sauce blends fire and flavor—smoke, citrus, and roasted pepper intensity that electrifies every bite.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-chili to-ember px-5 py-3 text-sm font-semibold text-white shadow-ember hover:shadow-lg hover:shadow-ember/80 transition">
              Ignite Now
            </a>
            <a href="#product" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 hover:text-white hover:border-white/40 transition">
              Scoville Scale
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-6 rounded-full blur-2xl bg-ember/20 animate-flicker" />
          <img
            src="/assets/images/product-bottle.png"
            alt="Hot Sauce Bottle"
            className="relative z-10 h-[420px] w-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
