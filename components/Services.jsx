'use client';
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Services() {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  // Reset refs on every render
  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animation for each card
            cardsRef.current.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate");
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px", // Shrinks the bottom boundary so the observer fires earlier
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Define services data directly in the component
  const services = [
    {
      title: "Wood Transport",
      description:
        "Specialized handling and secure transportation for all wood materials",
      keywords: "wood",
      icon: ({ className }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      title: "Glass Transport",
      description: "Climate-controlled transport for fragile glass items",
      keywords: "glass",
      icon: ({ className }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
    },
    {
      title: "Package Delivery",
      description: "Reliable same-day delivery solutions for packages of all sizes",
      keywords: "packages",
      icon: ({ className }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
    },
    {
      title: "Heavy Goods",
      description: "Industrial-grade transport for heavy machinery and equipment",
      keywords: "heavy",
      icon: ({ className }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Bulk Shipments",
      description: "Efficient container solutions for large-scale shipments",
      keywords: "bulk",
      icon: ({ className }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white text-gray-900"
    >
      {/* Inline CSS for animation */}
      <style jsx>{`
        .card {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .card.animate {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Delivering excellence through specialized logistics solutions
          </p>
        </div>

        {/* Top Row: 3 Cards in a Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:px-[7%]">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="card group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <div className="overflow-hidden rounded-t-xl h-48 relative">
                <Image
                  src={`/${service.keywords}.webp`}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <service.icon
                    className="w-12 h-12 p-2 bg-blue-600 text-white rounded-lg mb-4"
                    aria-label={service.title}
                  />
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row: 2 Cards Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 lg:px-[20%]">
          {services.slice(3).map((service, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="card group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <div className="overflow-hidden rounded-t-xl h-48 relative">
                <Image
                  src={`/${service.keywords}.webp`}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <service.icon
                    className="w-12 h-12 p-2 bg-blue-600 text-white rounded-lg mb-4"
                    aria-label={service.title}
                  />
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
