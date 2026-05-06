/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 7225815610",
      link: "tel:+917225815610"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "berrycoagro@gmail.com",
      link: "mailto:berrycoagro@gmail.com"
    },
    {
      icon: MapPin,
      title: "Our Base",
      value: "Gurugram, Haryana, India",
      link: "https://maps.google.com/?q=Gurugram"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-warm-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="serif text-brand-primary text-sm font-bold uppercase tracking-widest mb-4">Connect With Us</h2>
            <h3 className="serif text-4xl md:text-6xl font-light mb-8 italic">
              Ready to <span className="text-deep-ink">Partner?</span>
            </h3>
            <p className="text-lg text-deep-ink/60 mb-12">
              Whether you are an international buyer or a domestic partner, our dedicated export team is ready to assist with your spice requirements.
            </p>

            <div className="space-y-6 mb-12">
              {contactInfo.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link}
                  className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-40 mb-1">{item.title}</p>
                    <p className="text-xl font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-10 border-t border-deep-ink/10">
              <p className="text-sm font-bold uppercase tracking-widest opacity-40 mb-6">Follow Our Harvest</p>
              <div className="flex gap-4">
                {[Instagram, Linkedin, Facebook].map((Icon, idx) => (
                  <button key={idx} className="w-12 h-12 rounded-full border border-deep-ink/10 flex items-center justify-center hover:bg-deep-ink hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 lg:mt-0"
          >
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-brand-primary/5 border border-deep-ink/5">
              <h4 className="serif text-3xl mb-8">Business Inquiry</h4>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-2">Your Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-warm-bg border-none rounded-xl focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-2">Company Email</label>
                    <input type="email" className="w-full px-5 py-4 bg-warm-bg border-none rounded-xl focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-2">Inquiry Type</label>
                  <select className="w-full px-5 py-4 bg-warm-bg border-none rounded-xl focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all appearance-none">
                    <option>International Export Inquiry</option>
                    <option>Bulk Manufacturer Supply</option>
                    <option>Product Samples Request</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-2">Message Details</label>
                  <textarea rows={4} className="w-full px-5 py-4 bg-warm-bg border-none rounded-xl focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-brand-primary text-white rounded-xl font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
}
