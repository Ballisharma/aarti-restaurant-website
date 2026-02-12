import React from 'react';
import { X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Ornament } from './Ornament';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-[#080A0B] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Decorative Border */}
      <div className="absolute inset-4 border border-white/5 pointer-events-none"></div>

      {/* Close Button */}
      <div className="absolute top-8 right-8 z-50">
         <button 
            onClick={onClose} 
            className="group flex items-center gap-2 text-ach-cream hover:text-ach-gold transition-colors p-2"
         >
            <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
            <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-ach-gold transition-colors">
                <X size={20} />
            </div>
         </button>
      </div>

      <div className="h-full flex flex-col items-center justify-center relative">
        <div className="mb-12 opacity-50"><Ornament /></div>
        
        <nav className="flex flex-col items-center space-y-6">
            {NAV_LINKS.map((link, index) => (
            <div 
                key={index}
                className="overflow-hidden"
            >
                <a
                    href={link.href}
                    onClick={onClose}
                    className={`block font-serif text-4xl md:text-6xl text-ach-cream hover:text-ach-gold transition-colors duration-500 transform ${
                        isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                >
                    {link.label}
                </a>
            </div>
            ))}
        </nav>

        <div className={`mt-16 flex flex-col items-center space-y-4 text-xs font-sans tracking-[0.2em] text-ach-gold uppercase transition-all duration-1000 delay-500 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
           <div className="flex gap-8">
               <a href="#" className="hover:text-white transition-colors relative group">
                   LONDON
                   <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
               </a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
