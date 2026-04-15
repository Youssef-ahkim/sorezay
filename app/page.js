'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden pt-20">
      {/* Background with subtle parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/truck.webp"
          alt="Premium Logistics"
          fill
          className="object-cover object-center opacity-40 scale-105"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto flex-grow flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-white/5 border border-white/10 rounded-full backdrop-blur-sm text-indigo-400">
              Worldwide Logistics Partner
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 font-outfit leading-[1.1]">
              Moving Goods, <br />
              <span className="gradient-text">Connecting Worlds.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience the pinnacle of transport and logistics. Reliable, safe, and efficient solutions tailored to your global business needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-500/20"
              >
                Explore Services
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contactUs"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 backdrop-blur-sm transition-all"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Stats/Features */}
      <div className="relative z-10 pb-16">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 p-6 md:p-8 glass-morphism rounded-[2rem] border border-white/10"
          >
            {[
              { label: 'Countries Covered', value: '40+' },
              { label: 'Annual Shipments', value: '1.2M' },
              { label: 'On-time Delivery', value: '99.9%' },
              { label: 'Satisfied Clients', value: '2500+' },
            ].map((stat, idx) => (
              <div key={idx} className={`text-center ${idx === 1 || idx === 3 ? '' : 'sm:border-r'} ${idx % 2 === 0 ? 'border-r' : 'border-0'} lg:border-r lg:last:border-0 border-white/10`}>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-semibold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="hero-glow top-0 left-1/2 -translate-x-1/2 opacity-50"></div>
    </section>
  );
}
