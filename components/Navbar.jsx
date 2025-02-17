'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet"; // Make sure SheetTitle is imported

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
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
      className={`fixed top-0 left-0 w-full bg-gray-900 bg-opacity-60 backdrop-blur-lg text-white py-4 px-6 shadow-md z-50 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-extrabold tracking-wide font-serif">SOREZAY</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium font-sans">
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

        {/* Mobile Navigation Sheet */}
        <Sheet>
          <SheetTrigger className="md:hidden p-2 hover:text-yellow-500 transition-colors">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="left" className="bg-gray-900 border-gray-700">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                {/* Add SheetTitle with visually hidden text */}
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <span className="text-2xl font-extrabold text-white font-serif">SOREZAY</span>
                <SheetClose className="text-white hover:text-yellow-500">
                  <X className="h-7 w-7" />
                </SheetClose>
              </div>
              <nav className="flex flex-col">
                <ul className=" text-white text-lg font-medium font-sans">
                  <li>
                    <Link href="#home">
                      <SheetClose>
                        <span className="hover:text-yellow-500 transition-colors duration-300">Home</span>
                      </SheetClose>
                    </Link>
                  </li>
                  <li>
                    <Link href="#services">
                      <SheetClose>
                        <span className="hover:text-yellow-500 transition-colors duration-300">Services</span>
                      </SheetClose>
                    </Link>

                  </li>
                  <li>
                    <Link href="#contact">
                      <SheetClose>
                        <span className="hover:text-yellow-500 transition-colors duration-300">Contact</span>
                      </SheetClose>
                    </Link>

                  </li>
                </ul>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}