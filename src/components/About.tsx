/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Leaf, Award, Recycle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-deep-ink text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="serif text-brand-primary text-sm font-bold uppercase tracking-widest mb-4">Our Heritage</h2>
              <h3 className="serif text-4xl md:text-5xl font-light mb-8 italic">
                From Gurugram to Global Markets
              </h3>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                Berryco Agro Product Ltd stands at the intersection of traditional Indian spice processing and modern global standards. Based in Gurugram, we have spent years perfecting the art of sourcing and manufacturing premium agro-products that meet the rigorous demands of international exporters.
              </p>
              
              <div className="space-y-8">
                {[
                  { 
                    icon: Leaf, 
                    title: "Farmer First Sourcing", 
                    desc: "We work directly with certified farmers across India to ensure the highest quality harvest.",
                    color: "text-brand-secondary"
                  },
                  { 
                    icon: Award, 
                    title: "Quality Benchmarks", 
                    desc: "Every batch of our turmeric and cumin undergoes multiple levels of quality checks.",
                    color: "text-brand-primary"
                  },
                  { 
                    icon: Recycle, 
                    title: "Sustainable Processing", 
                    desc: "Our Gurugram facility utilizes eco-friendly modern machinery to minimize waste.",
                    color: "text-brand-accent"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className={`mt-1 p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-1">{item.title}</h4>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1621995830745-2be897183067?auto=format&fit=crop&q=80&w=400" 
                  alt="Spice processing"
                  className="rounded-3xl w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-brand-primary p-8 rounded-3xl aspect-square flex flex-col justify-center">
                  <p className="text-5xl font-bold mb-2">15+</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-80">Export Countries</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-brand-secondary p-8 rounded-3xl aspect-square flex flex-col justify-center">
                  <p className="text-5xl font-bold mb-2">100%</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-80">Pure Spices</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=400" 
                  alt="Turmeric fields"
                  className="rounded-3xl w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
