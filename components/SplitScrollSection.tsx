import React from 'react';
import { SPLIT_SECTIONS } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { FloralDivider, VerticalLine, CornerAccent } from './Ornament';

const SplitScrollSection: React.FC = () => {
  const { activeId, setRef } = useIntersectionObserver({
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0,
  });

  const activeSectionIndex = SPLIT_SECTIONS.findIndex(s => s.id === activeId);
  const activeIndex = activeSectionIndex === -1 ? 0 : activeSectionIndex;

  return (
    <section className="relative bg-ach-black">
      
      {/* Mobile Layout */}
      <div className="md:hidden">
        {SPLIT_SECTIONS.map((section, idx) => (
          <div key={section.id} className="relative pb-16">
             <div className="h-[60vh] w-full relative overflow-hidden">
                <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ach-black via-transparent to-transparent"></div>
             </div>

             <div className="px-4 -mt-16 relative z-10">
                <div className="bg-[#111] p-6 border border-ach-gold/20 shadow-2xl backdrop-blur-sm mx-auto max-w-md">
                    <div className="flex flex-col items-center">
                      <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-ach-gold mb-3 text-center">{section.subtitle}</h3>
                      <h2 className="font-serif text-3xl text-ach-cream text-center mb-4 leading-tight">{section.title}</h2>
                      <FloralDivider className="mb-4" />
                      <p className="font-serif text-base text-gray-400 leading-relaxed text-center italic">{section.content}</p>
                      {section.buttonText && (
                        <button className="mt-6 group relative px-6 py-3 overflow-hidden bg-transparent border border-ach-gold/20 hover:border-ach-gold/60 transition-colors duration-500">
                          <span className="relative z-10 font-sans text-[9px] tracking-[0.3em] uppercase text-ach-gold">
                            {section.buttonText}
                          </span>
                        </button>
                      )}
                    </div>
                </div>
             </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row relative">
        
        {/* Left: Sticky Image Container */}
        <div className="w-1/2 sticky top-0 h-screen overflow-hidden border-r border-white/5">
           {SPLIT_SECTIONS.map((section, index) => (
             <div 
                key={section.id}
                className={`absolute inset-0 w-full h-full transition-all duration-[1200ms] cubic-bezier(0.22, 1, 0.36, 1) transform ${
                    index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}
             >
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover"
                />
                {/* Subtle scrim for readability */}
                <div className="absolute inset-0 bg-black/10"></div>
             </div>
           ))}
           {/* Decorative Border Line */}
           <div className="absolute right-4 top-4 bottom-4 w-[1px] bg-white/10 z-20"></div>
        </div>

        {/* Right: Scrolling Text with "Menu Card" Aesthetic */}
        <div className="w-1/2 bg-ach-black bg-luxury-pattern relative">
          {/* Vertical Guide Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 transform -translate-x-1/2 pointer-events-none"></div>

          {SPLIT_SECTIONS.map((section, index) => (
            <div 
                key={section.id} 
                id={section.id}
                ref={setRef(index)}
                className="min-h-screen flex flex-col justify-center items-center px-20 py-24 relative"
            >
               {/* Floating Card Container */}
               <div className={`
                    relative p-12 max-w-lg transition-all duration-1000 ease-out transform
                    ${activeId === section.id ? 'opacity-100 translate-y-0 blur-0' : 'opacity-20 translate-y-12 blur-sm'}
               `}>
                  {/* Decorative Corners for the "Card" feel */}
                  <CornerAccent position="top-left" />
                  <CornerAccent position="top-right" />
                  <CornerAccent position="bottom-left" />
                  <CornerAccent position="bottom-right" />

                  <div className="text-center space-y-6">
                      <div className="flex justify-center">
                          <VerticalLine height="h-12" />
                      </div>
                      
                      <h3 className="font-sans text-[11px] tracking-[0.4em] uppercase text-ach-gold/80">
                        {section.subtitle}
                      </h3>
                      
                      <h2 className="font-serif text-6xl text-ach-cream leading-tight">
                        {section.title}
                      </h2>
                      
                      <FloralDivider />
                      
                      <p className="font-serif text-xl text-ach-cream/60 leading-relaxed italic font-light">
                          {section.content}
                      </p>
                      
                      <div className="pt-8">
                        {section.buttonText && (
                            <button className="group relative px-10 py-4 overflow-hidden bg-transparent border border-ach-gold/20 hover:border-ach-gold/60 transition-colors duration-500">
                                <span className="relative z-10 font-sans text-[10px] tracking-[0.3em] uppercase text-ach-gold group-hover:text-ach-cream transition-colors">
                                    {section.buttonText}
                                </span>
                            </button>
                        )}
                      </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SplitScrollSection;
