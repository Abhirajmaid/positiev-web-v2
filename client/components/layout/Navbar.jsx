'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/contact', label: 'Contact Us' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = !isScrolled;
  const navBase =
    'fixed top-5 left-0 w-full z-50 overflow-visible transition-all duration-300 ease-in-out pt-5 px-6 sm:px-10 lg:px-20';
  // Dark Apple-style glass (ref): On mobile when scrolled: full capsule. On desktop when scrolled: no outer bg (only inner link capsule shows)
  const glassCapsuleDesktopScrolled =
    'rounded-t-[1.125rem] rounded-b-[1.5rem] border border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.2)] px-6 lg:px-10 py-2.5 backdrop-blur-xl bg-[#0C3560]/50 md:bg-transparent md:backdrop-blur-none md:border-0 md:shadow-none md:rounded-none';
  const linkCapsule = `absolute left-1/2 -translate-x-1/2 min-w-[320px] justify-center gap-7 rounded-full border border-white/15 px-6 py-1.5 backdrop-blur-xl transition-colors duration-300 ${
    isScrolled ? 'bg-[#000]/30' : 'bg-[#000]/25'
  }`;
  const linkLight = 'text-white';
  const linkLightHover = 'text-white/90';
  const mobileBorder = 'border-white/15';
  const hamburgerColor = 'bg-white';

  const handleMenuToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  return (
    <nav className={navBase}>
      <div
        className={`relative mx-auto flex w-full max-w-[1440px] flex-col overflow-visible transition-all duration-300 ease-in-out md:flex-row ${
          isScrolled ? glassCapsuleDesktopScrolled : ''
        }`}
      >
        <div className="flex w-full items-center justify-between gap-8">
          <Link
            href="/"
            className={`shrink-0 transition-all duration-300 hover:opacity-90 ${
              isScrolled ? 'md:opacity-0 md:invisible md:w-0 md:min-w-0 md:overflow-hidden md:pointer-events-none' : ''
            }`}
            aria-label="PositiEV home"
          >
            <Image
              src="/white-logo.png"
              alt="PositiEV"
              width={470}
              height={176}
              priority
              className="h-auto w-[90px] md:w-[110px]"
            />
          </Link>

          <ul
            className={`hidden md:flex flex-row items-center ${linkCapsule}`}
          >
            {navLinks.map((link, index) => (
              <li key={link.href} className="relative z-10">
                <Link
                  href={link.href}
                  className={`group relative z-10 inline-flex overflow-hidden py-1 px-0.5 text-sm font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? 'text-white font-semibold'
                      : hoveredIndex === index
                        ? linkLightHover
                        : linkLight
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span className="relative inline-flex h-[1.5em] items-center justify-center overflow-hidden">
                    <span className="inline-flex min-w-0 items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                      {link.label}
                    </span>
                    <span className="absolute inset-x-0 top-0 inline-flex min-w-0 translate-y-full items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                      {link.label}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="relative z-[100] flex min-w-[48px] min-h-[48px] shrink-0 items-center justify-center rounded-lg touch-manipulation cursor-pointer hover:bg-white/5 active:bg-white/10 md:hidden"
            onClick={handleMenuToggle}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className="pointer-events-none flex flex-col justify-center gap-1.5">
              <span className={`block w-6 h-0.5 rounded-full ${hamburgerColor}`} />
              <span className={`block w-6 h-0.5 rounded-full ${hamburgerColor}`} />
              <span className={`block w-6 h-0.5 rounded-full ${hamburgerColor}`} />
            </span>
          </button>
        </div>

        {/* Mobile: vertical menu - only render when open so it's always visible when toggled */}
        {open && (
          <div
            className="flex flex-col rounded-b-[1.5rem] border-t border-white/15 bg-[#0C3560]/60 backdrop-blur-xl pt-4 pb-4 md:hidden"
            style={{ minHeight: 0 }}
          >
            <ul className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg py-3 px-3 text-base font-medium text-white hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
