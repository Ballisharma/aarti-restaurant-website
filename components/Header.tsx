import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import MenuOverlay from './MenuOverlay';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 px-6 md:px-12 flex justify-between items-start pt-6 md:pt-8 ${
          isScrolled ? 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Left: Menu Trigger (Always clickable on desktop, hidden on mobile when scrolled) */}
        <div className="pointer-events-auto">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="group flex flex-col items-center gap-2 text-ach-cream hover:text-ach-gold transition-colors"
          >
            <span className="block w-8 h-[1px] bg-ach-cream group-hover:bg-ach-gold transition-colors"></span>
            <span className="block w-8 h-[1px] bg-ach-cream group-hover:bg-ach-gold transition-colors"></span>
            <span className="text-[9px] tracking-[0.3em] uppercase mt-1 font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300">Menu</span>
          </button>
        </div>

        {/* Center: Brand Logo (Fades out on scroll to reduce clutter) */}
        <div className={`transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
          <a href="/" className="block text-center group">
             <div className="flex flex-col items-center justify-center text-ach-cream">
                <h1 className="font-serif text-3xl md:text-4xl tracking-wide font-medium leading-none group-hover:text-ach-gold transition-colors duration-500">
                    DRAVIDA
                </h1>
             </div>
          </a>
        </div>

        {/* Right: Reservation Action (Always clickable on desktop, hidden on mobile when scrolled) */}
        <div className="pointer-events-auto">
            <button className="relative group px-4 md:px-6 py-2 border border-ach-gold/30 hover:border-ach-gold transition-colors">
                <span className="font-sans text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-ach-cream group-hover:text-ach-gold transition-colors">
                    Reserve
                </span>
            </button>
        </div>
      </header>

      {/* Floating Sticky Header when Scrolled - Higher z-index for mobile */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-ach-black/95 backdrop-blur-md border-b border-white/5 py-3 md:py-4 px-4 md:px-12 flex justify-between items-center transition-transform duration-500 ${
        isScrolled ? 'translate-y-0' : '-translate-y-full'
      }`}>
           <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden flex items-center gap-2 text-ach-cream"
          >
            <Menu size={20} />
          </button>
           <span className="font-serif text-base md:text-lg text-ach-cream">DRAVIDA</span>
           <button className="font-sans text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-ach-gold border border-ach-gold/30 px-3 md:px-4 py-1.5 md:py-2 hover:bg-ach-gold/10 transition-colors">
               Book
           </button>
      </div>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
