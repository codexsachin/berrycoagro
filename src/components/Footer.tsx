/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-deep-ink text-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <h2 className="serif text-3xl font-bold tracking-tight uppercase">
              Berryco<span className="text-brand-primary">.</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Pioneers in high-purity Indian spice exports. Bringing the essence of ancient spice heritage to the global modern market with integrity and precision.
            </p>
            <div className="flex gap-2">
              <span className="bg-white/5 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest border border-white/10">IEC Certified</span>
              <span className="bg-white/5 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest border border-white/10">APEDA Member</span>
            </div>
          </div>

          <div>
            <h4 className="serif text-xl mb-6">Quick Navigation</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#home" className="hover:text-brand-primary transition-colors">Home Experience</a></li>
              <li><a href="#products" className="hover:text-brand-primary transition-colors">Product Catalog</a></li>
              <li><a href="#about" className="hover:text-brand-primary transition-colors">Company Heritage</a></li>
              <li><a href="#contact" className="hover:text-brand-primary transition-colors">Partnership Inquiry</a></li>
            </ul>
          </div>

          <div>
            <h4 className="serif text-xl mb-6">Spice Expertise</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Turmeric (Curcumin)</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Cumin (Jeera)</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Coriander (Dhania)</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Black Pepper</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Custom Spice Blends</a></li>
            </ul>
          </div>

          <div className="relative">
            <h4 className="serif text-xl mb-6">Subscribe to Market Trends</h4>
            <p className="text-sm text-white/40 mb-6 leading-relaxed">
              Receive monthly updates on spice market pricing and harvest trends from India.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Exporters email..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm outline-none focus:border-brand-primary transition-all pr-12"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-primary hover:text-white transition-colors">
                <ArrowUp className="w-5 h-5 rotate-90" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xs text-white/20 font-medium tracking-widest uppercase">
            © 2024 Berryco Agro Product Ltd. Gurugram, India. All Rights Reserved.
          </div>
          
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Export Terms</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Quality Standards</a>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary group transition-all"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Subtle branding water-mark */}
      <div className="absolute -bottom-10 -right-10 serif text-[20rem] font-bold opacity-[0.02] leading-none pointer-events-none select-none">
        SPICES
      </div>
    </footer>
  );
}
