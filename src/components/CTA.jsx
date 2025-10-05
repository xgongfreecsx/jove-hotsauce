import React from "react";

export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="absolute inset-0 bg-fiery-radial opacity-40" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-white/10 bg-charcoal/80 backdrop-blur p-10 text-center shadow-ember">
          <h3 className="text-3xl md:text-4xl font-black">
            It’s not just a sauce. <span className="bg-gradient-to-r from-chili to-ember bg-clip-text text-transparent">It’s fire in a bottle.</span>
          </h3>
          <p className="mt-4 text-white/80">
            Stoke your dishes with a clean, complex burn—crafted for everything from eggs to ramen, tacos to steaks.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#product"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-chili to-ember px-6 py-3 text-sm font-semibold text-white shadow-ember hover:shadow-lg hover:shadow-ember/80 transition"
            >
              Ignite Your Taste
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
