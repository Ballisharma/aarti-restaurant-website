import React from 'react';
import { Instagram } from 'lucide-react';
import { FloralDivider } from './Ornament';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] text-ach-cream pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-luxury-pattern opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col items-center mb-20">
            <h2 className="font-serif text-5xl md:text-7xl tracking-widest text-center mb-8 text-ach-cream opacity-90">
                AMBASSADORS
            </h2>
            <FloralDivider className="opacity-50" />
        </div>

        <div className="grid md:grid-cols-3 gap-16 border-t border-b border-white/5 py-16">
          
          <div className="text-center md:text-left space-y-6">
            <h4 className="font-sans text-[10px] tracking-[0.3em] text-ach-gold uppercase">Contact</h4>
            <div className="font-serif text-xl leading-relaxed text-gray-400">
                <p>25 Heddon Street</p>
                <p>Mayfair, London W1B 4BH</p>
                <br/>
                <p><a href="tel:+442033198100" className="hover:text-white transition-colors">+44 (0)20 3319 8100</a></p>
                <p><a href="mailto:info@ambassadors.com" className="hover:text-white transition-colors">info@ambassadors.com</a></p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h4 className="font-sans text-[10px] tracking-[0.3em] text-ach-gold uppercase">Opening Hours</h4>
            <div className="font-serif text-xl leading-relaxed text-gray-400">
                <p>Mon - Wed: 12pm - 11pm</p>
                <p>Thu - Sat: 12pm - 12am</p>
                <p>Sun: 12pm - 10pm</p>
            </div>
          </div>

          <div className="text-center md:text-right space-y-6">
            <h4 className="font-sans text-[10px] tracking-[0.3em] text-ach-gold uppercase">Social</h4>
            <div className="flex justify-center md:justify-end gap-6">
                <a href="#" className="hover:text-ach-gold transition-colors font-serif text-lg italic">Instagram</a>
                <a href="#" className="hover:text-ach-gold transition-colors font-serif text-lg italic">Facebook</a>
            </div>
             <div className="mt-8">
                <button className="border border-white/20 px-8 py-3 font-sans text-[10px] uppercase tracking-widest hover:bg-ach-gold hover:text-ach-dark hover:border-ach-gold transition-all">
                    Newsletter
                </button>
             </div>
          </div>

        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest font-sans">
            <div className="flex gap-8 mb-4 md:mb-0">
                <a href="#" className="hover:text-gray-400">Privacy</a>
                <a href="#" className="hover:text-gray-400">Terms</a>
                <a href="#" className="hover:text-gray-400">Accessibility</a>
            </div>
            <p>Concept designed by Letsflydigital</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
