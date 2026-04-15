'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { Package, Truck, Layers, Boxes, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Wood Transport",
    description: "Specialized handling and secure transportation for all wood and timber materials with specialized rigs.",
    keywords: "wood",
    icon: Truck,
    color: "from-amber-400 to-orange-600",
  },
  {
    title: "Glass Transport",
    description: "Climate-controlled, shock-absorbent transport for fragile glass and precise delicate items.",
    keywords: "glass",
    icon: ShieldCheck,
    color: "from-cyan-400 to-blue-600",
  },
  {
    title: "Package Delivery",
    description: "Reliable same-day and express delivery solutions for packages of all sizes worldwide.",
    keywords: "packages",
    icon: Package,
    color: "from-indigo-400 to-purple-600",
  },
  {
    title: "Heavy Goods",
    description: "Industrial-grade transport for heavy machinery, construction equipment, and oversized loads.",
    keywords: "heavy",
    icon: Layers,
    color: "from-red-400 to-rose-600",
  },
  {
    title: "Bulk Shipments",
    description: "Efficient containerized and bulk volume solutions for large-scale international shipments.",
    keywords: "bulk",
    icon: Boxes,
    color: "from-emerald-400 to-teal-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 font-outfit"
          >
            Our <span className="gradient-text">Specialized</span> Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            We provide a wide range of logistics and transport solutions tailored to the specific needs of your cargo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute -inset-px bg-gradient-to-r transition-opacity duration-500 opacity-0 group-hover:opacity-10 rounded-[2rem] blur-xl z-0"
                style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))` }}></div>

              <div className="relative glass-morphism rounded-[2rem] overflow-hidden border border-white/5 h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={`/${service.keywords}.webp`}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </div>

                <div className="p-8 pt-0 flex-1 relative mt-[-2rem] z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-outfit text-white group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>

                <div className="p-8 pt-0 mt-auto">
                  <button className="text-sm font-bold uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2 group/btn">
                    Learn More
                    <span className="block w-4 h-[1px] bg-indigo-400 group-hover/btn:w-8 transition-all"></span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
