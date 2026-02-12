import React from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-ach-dark relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-[#0D1012] border border-white/5 p-1 md:p-2">
            <div className="border border-ach-gold/20 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 bg-noise">
                
                <div className="text-center md:text-left md:w-1/2 space-y-4">
                    <h3 className="font-serif text-3xl md:text-5xl text-ach-cream">
                        Join the <span className="text-ach-gold italic">Club</span>
                    </h3>
                    <p className="text-gray-400 font-sans text-sm leading-relaxed tracking-wide">
                        Sign up to receive news, updates and exclusive invitations from Dravida, directly to your inbox.
                    </p>
                </div>

                <div className="w-full md:w-1/2">
                    <form className="flex flex-col gap-4">
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="w-full bg-transparent border-b border-gray-700 py-3 text-ach-cream placeholder-gray-600 focus:outline-none focus:border-ach-gold transition-colors font-sans text-sm tracking-wide"
                            />
                        </div>
                        <div className="flex gap-4 mt-4">
                            <button type="submit" className="flex items-center gap-2 text-ach-gold text-xs uppercase tracking-widest hover:text-white transition-colors group">
                                <span>Subscribe</span>
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <label className="flex items-center gap-2 text-gray-500 text-[10px] uppercase tracking-widest cursor-pointer hover:text-gray-400">
                                <input type="checkbox" className="accent-ach-gold" />
                                <span>London</span>
                            </label>
                            <label className="flex items-center gap-2 text-gray-500 text-[10px] uppercase tracking-widest cursor-pointer hover:text-gray-400">
                                <input type="checkbox" className="accent-ach-gold" />
                                <span>New York</span>
                            </label>
                        </div>
                    </form>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
