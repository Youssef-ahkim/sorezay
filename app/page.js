import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen text-white text-center bg-black/50">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/truck.webp"
            alt="Truck Background"
            layout="fill"
            objectFit="cover"
            className="object-[70%_center] md:object-center"
            quality={100}
          />

          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl font-bold">Reliable Transport & Logistics</h1>
          <p className="mt-4 text-lg">Moving Goods, Connecting the World</p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
