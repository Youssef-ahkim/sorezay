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
    let timeoutId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > SCROLL_THRESHOLD) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;

      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    const throttledScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const DesktopNavItem = ({ item }) => (
    <li key={item.href}>
      <Link
        href={item.href}
        className="relative group px-3 py-2 transition-colors"
        onClick={() => setActiveSection(item.href)}
      >
        <span
          className={`text-lg ${
            activeSection === item.href
              ? 'text-indigo-400'
              : 'text-white hover:text-indigo-300'
          } transition-colors duration-300`}
        >
          {item.label}
        </span>
        <span
          className={`absolute bottom-0 left-0 ${
            activeSection === item.href ? 'w-full' : 'w-0'
          } h-[2px] bg-indigo-400 transition-all duration-300`}
        />
      </Link>
    </li>
  );

  const MobileNavItem = ({ item }) => (
    <li>
      <SheetClose asChild>
        <Link
          href={item.href}
          className={`block py-4 px-4 text-xl rounded-lg transition-colors ${
            activeSection === item.href
              ? 'bg-indigo-800/50 text-indigo-400'
              : 'text-white hover:bg-gray-800/50'
          }`}
          onClick={() => setActiveSection(item.href)}
        >
          {item.label}
        </Link>
      </SheetClose>
    </li>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-out backdrop-blur-lg bg-gray-900/80 border-b border-gray-800 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="group flex items-center gap-2"
            aria-label="Home"
          >
            <span className="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-500">
              SOREZAY
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <DesktopNavItem key={item.href} item={item} />
            ))}
          </ul>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger
                className="p-2 text-white hover:text-indigo-300 transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-8 h-8" />
              </SheetTrigger>

              <SheetContent
                side="left"
                className="bg-gray-900/95 backdrop-blur-xl border-r border-gray-800 w-full max-w-xs"
              >
                <div className="flex flex-col h-full p-4">
                  <div className="flex justify-between items-center mb-8">
                    <SheetTitle className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      SOREZAY
                    </SheetTitle>
                    <SheetClose className="text-white hover:text-indigo-300 transition-colors">
                      <X className="w-8 h-8" />
                    </SheetClose>
                  </div>

                  <nav className="flex-1">
                    <ul className="space-y-2">
                      {navItems.map((item) => (
                        <MobileNavItem key={item.href} item={item} />
                      ))}
                    </ul>
                  </nav>

                  <div className="mt-auto pt-8 border-t border-gray-800">
                    <p className="text-gray-400 text-sm text-center">
                      © 2024 Sorezay. All rights reserved.
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
