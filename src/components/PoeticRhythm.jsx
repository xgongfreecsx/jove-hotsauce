import React from "react";

const lines = [
  { big: "Sear.", small: "Start the spark." },
  { big: "Savor.", small: "Ride the flavor." },
  { big: "Repeat.", small: "Chase the blaze." },
  { big: "Feel the Blaze.", small: "Heart, heat, harmony." },
  { big: "Flavors that Roar.", small: "Heat with purpose." },
];

export default function PoeticRhythm() {
  return (
    <section id="rhythm" className="relative py-24 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lines.map((l, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-8 bg-gradient-to-br from-charcoal/60 via-black/40 to-charcoal/80 border border-white/10 hover:border-white/20 transition relative overflow-hidden"
          >
            <div className="absolute -inset-12 bg-fiery-conic opacity-20 animate-heat" />
            <h3 className="relative z-10 text-3xl font-extrabold bg-gradient-to-r from-ember to-chili bg-clip-text text-transparent">
              {l.big}
            </h3>
            <p className="relative z-10 mt-3 text-white/80">{l.small}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
