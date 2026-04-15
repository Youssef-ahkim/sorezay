'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
} from '@/components/ui/sheet';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const SCROLL_THRESHOLD = 50;

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contactUs' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (Math.abs(currentScrollY - lastScrollY.current) > SCROLL_THRESHOLD) {
        setIsVisible(currentScrollY < lastScrollY.current || currentScrollY <= SCROLL_THRESHOLD);
        lastScrollY.current = currentScrollY;
      }

      const sections = document.querySelectorAll('section');
      for (const section of sections) {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setActiveSection(`#${section.id}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled ? 'py-3 bg-black/40 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight font-outfit">
              <span className="text-white">SORE</span>
              <span className="gradient-text">ZAY</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium tracking-wide border-b-2 border-transparent transition-all duration-300 hover:text-white ${activeSection === item.href ? 'text-white border-indigo-500' : 'text-gray-400'
                    }`}
                  onClick={() => setActiveSection(item.href)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contactUs"
                className="ml-4 px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold transition-all hover:scale-105 active:scale-95"
              >
                Get Started
              </Link>
            </li>
          </ul>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger className="p-2 text-white" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/95 border-l border-white/10 w-full sm:max-w-xs">
                <div className="flex flex-col h-full pt-12">
                  <SheetTitle className="text-2xl font-bold mb-8 px-4 font-outfit">
                    SOREZAY
                  </SheetTitle>
                  <nav className="flex-1 px-2">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={`block py-4 px-4 text-xl font-medium rounded-xl transition-all ${activeSection === item.href ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}