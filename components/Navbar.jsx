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
} from "@/components/ui/sheet";

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
      className={`fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-xl text-white z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 shadow-xl' : '-translate-y-full shadow-none'
        }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-5">
        <Link href="/" className="group">
          <span className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300 hover:from-orange-300 hover:to-amber-400 transition-all duration-500">
            SOREZAY
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <Link href="#home" className="relative group px-2 py-1">
              <span className="text-gray-300 group-hover:text-amber-300 transition-colors duration-300">
                Home
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300" />
            </Link>
          </li>
          <li>
            <Link href="#services" className="relative group px-2 py-1">
              <span className="text-gray-300 group-hover:text-amber-300 transition-colors duration-300">
                Services
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300" />
            </Link>
          </li>
          <li>
            <Link href="#contact" className="relative group px-2 py-1">
              <span className="text-gray-300 group-hover:text-amber-300 transition-colors duration-300">
                Contact
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300" />
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation Sheet */}
        <Sheet>
          <SheetTrigger className="md:hidden p-2 hover:text-amber-400 transition-colors">
            <Menu className="h-8 w-8" />
          </SheetTrigger>
          <SheetContent side="left" className="bg-gray-900/95 backdrop-blur-xl border-r border-gray-700">
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-12">
                <SheetTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">
                  SOREZAY
                </SheetTitle>
                <SheetClose className="text-gray-300 hover:text-amber-400 rounded-sm transition-colors">
                  <X className="h-8 w-8" />
                </SheetClose>
              </div>

              <nav className="flex-1">
                <ul className="space-y-6 text-xl">
                  <li>

                    <Link href="#home" className="block py-3 text-gray-300 hover:text-amber-400 transition-colors">
                      <SheetClose>
                        Home
                      </SheetClose>
                    </Link>

                  </li>
                  <li>
                    <Link href="#services" className="block py-3 text-gray-300 hover:text-amber-400 transition-colors">
                      <SheetClose>
                        Services
                      </SheetClose>
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="block py-3 text-gray-300 hover:text-amber-400 transition-colors " >
                      <SheetClose>
                        Contact
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