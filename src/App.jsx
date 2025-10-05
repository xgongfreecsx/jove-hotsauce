import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import MagazineSpread from "./components/MagazineSpread.jsx";
import PoeticRhythm from "./components/PoeticRhythm.jsx";
import ProductShowcase from "./components/ProductShowcase.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-charcoal text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <MagazineSpread />
        <PoeticRhythm />
        <ProductShowcase />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
