import React from "react";

function HeatMeter() {
  return (
    <div className="mt-4 flex gap-1" aria-label="Heat meter">
      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <div
          key={i}
          className={"h-3 w-6 rounded-sm " + (i < 7 ? "bg-gradient-to-r from-ember to-chili" : "bg-white/20")}
          title={i < 7 ? "Heat" : "Air"}
        />
      ))}
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="product" className="relative py-24 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-1 md:order-none">
          <div className="relative rounded-2xl overflow-hidden fire-glow flex items-center justify-center bg-gradient-to-b from-ember/20 via-charcoal/40 to-charcoal/80">
            <img
              src="/assets/images/product-bottle.png"
              alt="APOXIAZULE Hot Sauce Bottle"
              className="h-[420px] w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Fire-crafted flavor</h2>
          <p className="mt-5 text-white/80">
            Texture that clings. Aroma that pulls you in. A blend of roasted peppers, bright citrus, smoky undertones, and garlic that hits hard and finishes clean.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/80">
            <li>• Roasted pepper depth</li>
            <li>• Citrus lift</li>
            <li>• Smoky finish</li>
            <li>• Garlicky snap</li>
          </ul>
          <div className="mt-6">
            <span className="text-sm uppercase tracking-widest text-white/60">Heat</span>
            <HeatMeter />
          </div>
        </div>
      </div>
    </section>
  );
}
