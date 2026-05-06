/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SpiceGrid from "./components/SpiceGrid";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen">
      {/* Reading Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-deep-ink/10 to-transparent" />
        
        <SpiceGrid />
        
        <About />
        
        <Contact />
      </main>

      <Footer />
      
      {/* Subtle grain texture overlay for premium feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-50 bg-[url('https://www.transparenttextures.com/patterns/felt.png')]"></div>
    </div>
  );
}

