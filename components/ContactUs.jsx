'use client'
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function ContactUs() {
  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contactUs" className="py-20 bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500 text-center"
        >
          Contact Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Our Office</h3>
                <p className="text-gray-600">123 Logistics Street, Suite 456</p>
                <p className="text-gray-600">Cityville, TX 12345</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhone className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+1 (234) 567-8900</p>
                <p className="text-gray-600">Mon - Fri, 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaEnvelope className="w-8 h-8 text-orange-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">info@sorezay.com</p>
                <p className="text-gray-600">support@sorezay.com</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}