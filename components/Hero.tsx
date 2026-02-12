import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
    const heroBgRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Initial load animation
        tl.fromTo(heroBgRef.current,
            { scale: 1.1, opacity: 0.5 },
            { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
        )
            .fromTo(logoRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
                "-=1.5"
            );

        // Parallax Effect
        gsap.to(heroBgRef.current, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero-section",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }, []);

    return (
        <section className="hero-section relative h-screen w-full overflow-hidden bg-black flex justify-center items-center">
            <div
                ref={heroBgRef}
                className="absolute top-0 left-0 w-full h-[120%] bg-cover bg-no-repeat z-[1] pointer-events-none"
                style={{
                    backgroundImage: "url('https://ambassadorsclubhouse.com/wp-content/uploads/2024/08/24043037-08a-M-1920x1280.jpg')",
                    backgroundPosition: 'center bottom'
                }}
            ></div>
            <div
                className="absolute top-0 left-0 w-full h-full z-[2] pointer-events-none"
                style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1) 70%, rgba(22, 9, 55, 0.7))'
                }}
            ></div>

            <div className="relative z-[3] text-center max-w-[80%]">
                <img
                    ref={logoRef}
                    src="https://ambassadorsclubhouse.com/wp-content/uploads/2026/01/Ambassadors_Wordmark_Rough_offWhite_RGB.svg"
                    alt="Dravida"
                    className="max-w-[600px] w-full h-auto"
                    style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.4))' }}
                />
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 font-serif uppercase text-xs tracking-[0.2rem] z-[4] opacity-0 animate-[fadeIn_1s_2s_forwards]">
                <span>Scroll</span>
                <div className="w-px h-[60px] bg-white/40 mt-4 animate-[growLine_2s_infinite_ease-in-out]"></div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    to { opacity: 1; }
                }
                @keyframes growLine {
                    0%, 100% {
                        height: 40px;
                        transform-origin: top;
                        transform: scaleY(0.8);
                    }
                    50% {
                        height: 70px;
                        transform-origin: top;
                        transform: scaleY(1);
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
