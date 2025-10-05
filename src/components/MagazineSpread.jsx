import React from "react";

export default function MagazineSpread() {
  return (
    <section id="spread" className="relative section py-24 bg-charcoal">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-black/50 to-charcoal pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            More than heat — <span className="bg-gradient-to-r from-chili to-ember bg-clip-text text-transparent">it’s a ritual.</span>
          </h2>
          <p className="mt-6 text-white/80">
            Layered flavor crafted with precision: charred pepper depth, bright citrus lift, and a smoky finish that lingers like a perfect encore.
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden fire-glow">
          <div className="aspect-[4/3] w-full bg-gradient-to-br from-chili/40 via-ember/20 to-charcoal/80 flex items-center justify-center">
            <img
              src="/assets/images/product-bottle.png"
              alt="APOXIAZULE Hot Sauce Bottle"
              className="h-72 w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
