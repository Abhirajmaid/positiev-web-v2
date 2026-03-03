'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/franchise', label: 'Franchise' },
  { href: '/fleet-leasing', label: 'Fleet Leasing' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const isTransparent = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBase =
    'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out pt-4 px-4 sm:px-6 lg:px-8';
  const capsuleDefault = isTransparent
    ? ''
    : 'bg-white/95 border border-neutral-100';
  const capsuleScrolled = isTransparent
    ? 'bg-black/20 backdrop-blur-lg border border-white/20 shadow-lg'
    : 'bg-white/80 backdrop-blur-lg border border-neutral-200 shadow-lg';
  const capsuleClassName = isScrolled ? capsuleScrolled : capsuleDefault;
  const navClassName = navBase;

  const innerPadding = isScrolled ? 'py-3' : 'py-4';
  const linkLight = isTransparent ? 'text-white' : 'text-neutral-600';
  const linkLightHover = isTransparent ? 'text-blue-400' : 'text-neutral-900';
  const logoLight = isTransparent ? 'text-white' : 'text-neutral-900';
  const btnTransparent = isTransparent
    ? '!py-2 !bg-white !text-black hover:!bg-neutral-100'
    : '!py-2';
  const mobileBorder = isTransparent ? 'border-white/20' : 'border-neutral-200';
  const hamburgerColor = isTransparent ? 'bg-white' : 'bg-black';

  return (
    <nav className={navClassName}>
      <div
        className={`max-w-7xl mx-auto rounded-full ${capsuleClassName} px-6 lg:px-10 ${innerPadding} flex items-center justify-between gap-8 transition-all duration-300 ease-in-out`}
      >
        <Link
          href="/"
          className={`font-semibold text-lg md:text-xl tracking-tight hover:opacity-90 transition-opacity shrink-0 ${logoLight}`}
        >
          Positiev
        </Link>

        <ul className="hidden md:flex flex-row items-center gap-6 relative flex-1 justify-center">
          {navLinks.map((link, index) => (
            <li key={link.href} className="relative z-10">
              <Link
                href={link.href}
                className={`
                  group relative z-10 inline-flex overflow-hidden py-2 px-1 text-sm font-semibold transition-colors duration-200
                  ${hoveredIndex === index ? linkLightHover : linkLight}
                `}
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

        <div className="hidden md:flex items-center shrink-0">
          <Button href="/contact" variant="primary" className={btnTransparent}>
            Contact
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 mb-1 ${hamburgerColor}`} />
          <span className={`block w-8 h-0.5 mb-1 ${hamburgerColor}`} />
          <span className={`block w-8 h-0.5 ${hamburgerColor}`} />
        </button>
      </div>

      {open && (
        <div
          className={`md:hidden py-4 px-6 border-t ${mobileBorder} ${isScrolled ? 'bg-black/10 backdrop-blur-lg' : ''}`}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    isTransparent
                      ? 'block text-white/90 hover:text-white font-medium'
                      : 'block text-neutral-600 hover:text-black font-medium'
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Button
                href="/contact"
                variant="primary"
                className="w-full !py-2"
                onClick={() => setOpen(false)}
              >
                Contact
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
