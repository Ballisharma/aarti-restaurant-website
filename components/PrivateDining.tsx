import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PrivateDining: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        })
            .from(contentRef.current, { y: 100, opacity: 0, duration: 1.2, ease: "power3.out" });
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden text-white">
            {/* Background Image Wrapper */}
            <div className="absolute top-0 left-0 w-full h-full z-[1]">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
                    style={{ backgroundImage: "url('https://ambassadorsclubhouse.com/wp-content/uploads/2024/08/24043037-03a-M-2-683x1024.jpg')" }}
                ></div>
                {/* Dark Overlay */}
                <div
                    className="absolute inset-0 z-[2]"
                    style={{ background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(22, 9, 55, 0.6))' }}
                ></div>
            </div>

            {/* Content Container */}
            <div ref={contentRef} className="relative z-10 text-center max-w-[800px] px-8 py-8">
                <h2 className="font-serif text-5xl md:text-7xl mb-8 uppercase tracking-wider text-ach-cream">
                    Private Dining
                </h2>
                <p className="font-sans text-lg md:text-xl mb-12 leading-relaxed text-ach-cream/90">
                    Hark back to a time of celebration in the party mansions of Northern India, with feasts courtesy of Dravida.
                </p>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center">
                    <button className="px-8 py-3 border border-ach-gold/30 hover:border-ach-gold transition-colors font-sans text-xs tracking-[0.2em] uppercase text-ach-cream hover:text-ach-gold">
                        Explore London
                    </button>
                    <button className="px-8 py-3 border border-ach-gold/30 hover:border-ach-gold transition-colors font-sans text-xs tracking-[0.2em] uppercase text-ach-cream hover:text-ach-gold">
                        Explore New York
                    </button>
                </div>
            </div>

            {/* Mobile: Remove fixed background */}
            <style>{`
                @media (max-width: 768px) {
                    .bg-fixed {
                        background-attachment: scroll !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default PrivateDining;
