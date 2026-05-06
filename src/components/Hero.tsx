/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldCheck, Truck, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              Premium Spice Exporter
            </div>
            
            <h1 className="serif text-5xl md:text-7xl font-light leading-tight mb-6">
              Authentic Indian Flavors, <br />
              <span className="italic text-brand-primary">Exported with Integrity.</span>
            </h1>
            
            <p className="text-lg text-deep-ink/60 mb-10 max-w-lg leading-relaxed">
              Berryco Agro Products Ltd delivers the purest turmeric, cumin, and coriander from our Gurugram facilities to kitchens worldwide.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="bg-deep-ink text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Explore Spices
              </button>
              <button className="border border-deep-ink/20 px-8 py-4 rounded-full font-semibold hover:bg-deep-ink/5 transition-all">
                Download Catalog
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-deep-ink/10">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand-secondary h-6 w-6" />
                <span className="text-xs font-bold uppercase tracking-tighter opacity-70 leading-none">FSSAI <br/>Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="text-brand-primary h-6 w-6" />
                <span className="text-xs font-bold uppercase tracking-tighter opacity-70 leading-none">Global <br/>Reach</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="text-brand-accent h-6 w-6" />
                <span className="text-xs font-bold uppercase tracking-tighter opacity-70 leading-none">Direct <br/>Shipping</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-16 lg:mt-0 relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1000" 
                alt="Premium Indian Spices"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-ink/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-80 mb-2">Heritage Grade</p>
                <h3 className="serif text-3xl italic">Pure Turmeric Roots</h3>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
