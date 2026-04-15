'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Clock, Globe, Zap, Heart, Leaf } from "lucide-react";

export default function AboutUs() {
  const reasons = [
    {
      icon: Clock,
      title: "Reliable & On-Time",
      description: "Punctuality is our core value. We ensure your cargo arrives exactly when needed.",
      color: "text-blue-400"
    },
    {
      icon: Shield,
      title: "Safe Handling",
      description: "Specialized training for every member to ensure zero damage to delicate goods.",
      color: "text-green-400"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "A wide network of partners across 40+ countries for seamless international logistics.",
      color: "text-purple-400"
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Dedicated account managers available 24/7 to handle your requests instantly.",
      color: "text-amber-400"
    },
    {
      icon: Heart,
      title: "Client Centric",
      description: "Custom solutions tailored specifically to your business model and logistics requirements.",
      color: "text-rose-400"
    },
    {
      icon: Leaf,
      title: "Eco-Transport",
      description: "Active investment in green technologies to reduce the carbon footprint of every mile.",
      color: "text-emerald-400"
    },
  ];

  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-indigo-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block italic">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-outfit leading-tight text-white">
              Redefining the Future of <span className="gradient-text">Logistics.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              At <strong className="text-white">SOREZAY</strong>, we don't just move boxes; we bridge distances and build trust. Established with a vision to streamline global trade, we have evolved into a leading logistics powerhouse.
            </p>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              Our commitment to excellence and innovation drives us to integrate the latest tracking technologies and sustainable practices into every stage of the supply chain. From delicate glass transport to heavy industrial machinery, we handle it all with precision.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-gray-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-background bg-indigo-600 flex items-center justify-center text-xs font-bold text-white">
                  +2k
                </div>
              </div>
              <div className="text-sm">
                <p className="text-white font-bold">Trusted by 2,000+ Companies</p>
                <p className="text-gray-500">Across Europe and North America</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/team.webp"
                alt="Our Professional Team"
                width={800}
                height={600}
                className="w-full object-cover"
              />
              <div className="absolute bottom-10 left-10 right-10 p-8 glass-morphism rounded-3xl border border-white/10">
                <p className="text-white font-bold text-xl italic mb-2">"Excellence is not an act, but a habit in every delivery we make."</p>
                <p className="text-indigo-400 font-bold uppercase tracking-widest text-sm">— CEO SOREZAY</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div id="why-us" className="pt-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6 font-outfit text-white">Why Choose <span className="gradient-text">SOREZAY</span>?</h2>
            <p className="text-gray-400">Our values define our service. We go above and beyond to ensure your peace of mind.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white/5 hover:bg-white/[0.08] border border-white/5 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-black/50 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform`}>
                  <reason.icon className={`w-8 h-8 ${reason.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white font-outfit">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}