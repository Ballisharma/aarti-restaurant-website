import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SplitScrollSection from './components/SplitScrollSection';
import PrivateDining from './components/PrivateDining';
import Newsletter from './components/Newsletter';
import ImageCarousel from './components/ImageCarousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-[#050505] min-h-screen text-ach-cream selection:bg-ach-gold selection:text-ach-dark relative">
      {/* Global Grain Overlay - The "Textile" Texture */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      <Header />
      <main>
        <Hero />
        <SplitScrollSection />
        <PrivateDining />
        <Newsletter />
        <ImageCarousel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
