'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/franchise', label: 'Franchise' },
  { href: '/fleet-leasing', label: 'Fleet Leasing' },
  { href: '/investors', label: 'Investors' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const isTransparent = pathname === '/';

  return (
    <nav
      className={
        isTransparent
          ? 'absolute top-0 left-0 w-full z-20'
          : 'sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-100'
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <Link
          href="/"
          className={
            isTransparent
              ? 'text-white font-semibold text-lg hover:opacity-90 transition-opacity'
              : 'text-xl font-semibold tracking-tight text-neutral-900 hover:opacity-90 transition-opacity'
          }
        >
          Positiev
        </Link>

        <ul className="hidden md:flex flex-row items-center gap-8 relative">
          {navLinks.map((link, index) => (
            <li key={link.href} className="relative z-10">
              <Link
                href={link.href}
                className={`
                  group relative z-10 inline-flex overflow-hidden py-2 px-1 text-sm font-semibold transition-colors duration-200
                  ${isTransparent
                    ? hoveredIndex === index
                      ? 'text-blue-700'
                      : 'text-white'
                    : hoveredIndex === index
                      ? 'text-neutral-900'
                      : 'text-neutral-600'}
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

        <div className="hidden md:flex items-center gap-4">
          <Button
            href="/franchise"
            variant="secondary"
            className={
              isTransparent
                ? '!py-2 !border-white !text-white hover:!bg-white hover:!text-black'
                : '!py-2'
            }
          >
            Become Franchise
          </Button>
          <Button
            href="/contact"
            variant="primary"
            className={
              isTransparent
                ? '!py-2 !bg-white !text-black hover:!bg-neutral-100'
                : '!py-2'
            }
          >
            Contact
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 mb-1 ${isTransparent ? 'bg-white' : 'bg-black'}`}
          />
          <span
            className={`block w-6 h-0.5 mb-1 ${isTransparent ? 'bg-white' : 'bg-black'}`}
          />
          <span
            className={`block w-6 h-0.5 ${isTransparent ? 'bg-white' : 'bg-black'}`}
          />
        </button>
      </div>

      {open && (
        <div
          className={`md:hidden py-4 px-6 border-t ${
            isTransparent ? 'border-white/20' : 'border-neutral-100'
          }`}
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
            <li className="pt-4 flex flex-col gap-2">
              <Button
                href="/franchise"
                variant="secondary"
                className="w-full !py-2"
                onClick={() => setOpen(false)}
              >
                Become Franchise
              </Button>
              <Button href="/contact" variant="primary" className="w-full !py-2" onClick={() => setOpen(false)}>
                Contact
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
