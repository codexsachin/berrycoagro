/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-warm-bg/80 backdrop-blur-md border-b border-deep-ink/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center"
          >
            <span className="serif text-2xl font-bold tracking-tight text-deep-ink uppercase">
              Berryco<span className="text-brand-primary">.</span>
            </span>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-deep-ink/70 hover:text-brand-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-primary/90 transition-all flex items-center gap-2 group">
                Global Export <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-deep-ink p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-warm-bg border-b border-deep-ink/5 px-4 pt-2 pb-6 space-y-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-deep-ink hover:text-brand-primary"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full mt-4 bg-brand-primary text-white px-5 py-4 rounded-xl text-md font-semibold">
            Contact Sales
          </button>
        </motion.div>
      )}
    </nav>
  );
}
