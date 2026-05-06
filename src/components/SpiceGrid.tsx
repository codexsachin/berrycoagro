/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Search, ShoppingBag } from "lucide-react";

const spices = [
  {
    id: 1,
    name: "Golden Turmeric Powder",
    type: "Powdered",
    image: "https://images.unsplash.com/photo-1615485245457-307f59458641?auto=format&fit=crop&q=80&w=600",
    desc: "Premium Grade Curcumin-rich turmeric powder sourced from Erode.",
    features: ["4.5% Curcumin Content", "Fine Mesh Texture"]
  },
  {
    id: 2,
    name: "Aromatic Cumin Seeds",
    type: "Whole Seeds",
    image: "https://images.unsplash.com/photo-1605141014169-dc30799f9c7e?auto=format&fit=crop&q=80&w=600",
    desc: "Machine cleaned Bold Cumin seeds with high oil content and intense aroma.",
    features: ["99.5% Purity", "Sun-dried Quality"]
  },
  {
    id: 3,
    name: "Dried Turmeric Fingers",
    type: "Roots",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600",
    desc: "Whole Salem and Nizamabad turmeric fingers with consistent color.",
    features: ["Polished/Unpolished", "Direct Factory Grade"]
  },
  {
    id: 4,
    name: "Coriander Whole",
    type: "Seeds",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=600",
    desc: "Selected parrot green coriander seeds for export-grade flavor profiles.",
    features: ["Minimal Moisture", "Hand-Sorted"]
  }
];

export default function SpiceGrid() {
  return (
    <section id="products" className="py-24 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="serif text-brand-primary text-sm font-bold uppercase tracking-widest mb-4">Our Catalog</h2>
            <h3 className="serif text-4xl md:text-5xl font-light mb-6 italic leading-snug">
              Premium Spices, <br />
              <span className="text-deep-ink">Sourced at the Source.</span>
            </h3>
            <p className="text-deep-ink/60">
              We maintain rigorous standards for each product in our export catalog, ensuring that only the finest grades reach our clients.
            </p>
          </div>
          
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-deep-ink/40 w-5 h-5 group-focus-within:text-brand-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search product catalog..."
              className="pl-12 pr-6 py-4 bg-white border border-deep-ink/10 rounded-2xl w-full md:w-80 shadow-sm focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {spices.map((spice, idx) => (
            <motion.div
              key={spice.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] border border-deep-ink/5 p-4 group hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-500"
            >
              <div className="aspect-square rounded-[1.5rem] overflow-hidden mb-6 relative">
                <img 
                  src={spice.image} 
                  alt={spice.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-deep-ink">
                  {spice.type}
                </div>
              </div>
              
              <div className="px-2">
                <h4 className="serif text-xl font-medium mb-2 group-hover:text-brand-primary transition-colors">{spice.name}</h4>
                <p className="text-sm text-deep-ink/50 leading-relaxed mb-6 h-10 overflow-hidden">
                  {spice.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {spice.features.map((feat, fidx) => (
                    <span key={fidx} className="text-[10px] font-bold border border-deep-ink/10 px-2 py-1 rounded-md opacity-60">
                      {feat}
                    </span>
                  ))}
                </div>
                
                <button className="w-full py-3 rounded-xl border border-deep-ink/10 flex items-center justify-center gap-2 text-sm font-semibold group-hover:bg-deep-ink group-hover:text-white transition-all">
                  Inquire Now <ShoppingBag className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-sm italic text-deep-ink/40 mb-6">Looking for custom blends or bulk packaging solutions?</p>
          <button className="text-brand-primary font-bold border-b-2 border-brand-primary/20 hover:border-brand-primary transition-all pb-1 tracking-tight">
            View All Spices & Grains
          </button>
        </div>
      </div>
    </section>
  );
}
