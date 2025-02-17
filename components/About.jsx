'use client'
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion"; // For animations
import { FaCheckCircle, FaShieldAlt, FaTruck, FaDollarSign, FaHeadset, FaLeaf } from "react-icons/fa"; // Icons for "Why Choose Us"

export default function AboutUs() {
  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // "Why Choose Us" data
  const reasons = [
    {
      icon: <FaCheckCircle className="w-12 h-12 mb-4 text-blue-600" />,
      title: "Reliable & On-Time",
      description: "We value punctuality and ensure your shipments arrive as scheduled without delays.",
    },
    {
      icon: <FaShieldAlt className="w-12 h-12 mb-4 text-green-600" />,
      title: "Safe Handling",
      description: "Our team is trained to handle fragile and valuable goods with the utmost care and security.",
    },
    {
      icon: <FaTruck className="w-12 h-12 mb-4 text-orange-600" />,
      title: "Flexible Solutions",
      description: "From bulk shipments to customized logistics, we tailor our services to meet your unique needs.",
    },
    {
      icon: <FaDollarSign className="w-12 h-12 mb-4 text-purple-600" />,
      title: "Affordable Pricing",
      description: "We offer competitive rates without compromising on quality or safety.",
    },
    {
      icon: <FaHeadset className="w-12 h-12 mb-4 text-pink-600" />,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available around the clock to assist with your inquiries.",
    },
    {
      icon: <FaLeaf className="w-12 h-12 mb-4 text-teal-600" />,
      title: "Eco-Friendly Transport",
      description: "We implement sustainable practices to minimize environmental impact.",
    },
  ];

  return (
    <>
      <Navbar />
      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white text-gray-900">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500"
          >
            About Us
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-lg leading-relaxed text-gray-700"
          >
            At <span className="font-semibold text-blue-600">SOREZAY</span>, we are committed to providing top-tier transportation and logistics solutions. With years of expertise in handling goods with care and efficiency, our mission is to connect businesses and individuals with safe, reliable, and timely transport services. Whether you need to move delicate glass, bulk shipments, or heavy equipment, we ensure your cargo reaches its destination securely.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Image
              src="/team.jpg"
              alt="Our Team"
              width={800}
              height={450}
              className="rounded-lg mx-auto shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500"
          >
            Why Choose Us?
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-8 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center">
                  {reason.icon}
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}