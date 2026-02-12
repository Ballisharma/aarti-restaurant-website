import React, { useRef } from 'react';
import { CAROUSEL_IMAGES } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-0 bg-[#0F1115]">
      {/* Scroll Buttons (Desktop only for better UX, mobile uses touch) */}
      <button
        onClick={() => scroll('left')}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-sm"
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => scroll('right')}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-sm"
        aria-label="Scroll right"
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-pl-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {CAROUSEL_IMAGES.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[85vw] md:w-[40vw] h-[300px] md:h-[500px] snap-center relative mr-1"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
            {/* Optional Overlay on hover */}
            <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageCarousel;