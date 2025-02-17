'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-gray-900 bg-opacity-60 backdrop-blur-lg text-white py-4 px-6 shadow-md z-50 transition-transform duration-300 ${
        isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-extrabold tracking-wide font-serif">SOREZAY</span>
        </Link>
        <ul className="flex space-x-6 text-lg font-medium font-sans">
          <li>
            <Link href="#home">
              <span className="hover:text-yellow-500 transition-colors duration-300">Home</span>
            </Link>
          </li>
          <li>
            <Link href="#services">
              <span className="hover:text-yellow-500 transition-colors duration-300">Services</span>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <span className="hover:text-yellow-500 transition-colors duration-300">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
