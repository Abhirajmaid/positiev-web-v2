'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const segments = [
  {
    title: 'Ev Fleets',
    subtitle: 'Reliable Electric Mobility for\nModern Logistics',
    href: '/solutions/ev-fleets',
    image: '/1.png',
  },
  {
    title: 'Original Equipment\nManufacturer (OEM)',
    subtitle: 'Scale Your EV Manufacturing\n& Distribution',
    href: '/solutions/oem',
    image: '/2.png',
  },
  {
    title: 'Vehicle Dealers',
    subtitle: 'Grow EV Retail Opportunities',
    href: '/solutions/dealers',
    image: '/3.png',
  },
];

const ACTIVE_CARD_W = 360;
const ACTIVE_CARD_H = 360;
const INACTIVE_CARD_W = 240;
const INACTIVE_CARD_H = 260;

const ACTIVE_CARD_W_MOBILE = 280;
const ACTIVE_CARD_H_MOBILE = 300;
const INACTIVE_CARD_W_MOBILE = 180;
const INACTIVE_CARD_H_MOBILE = 200;

export function WhoWeServe() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const total = segments.length;

  // Use smaller card dimensions on mobile
  useEffect(() => {
    const check = () => setIsMobile(typeof window !== 'undefined' && window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const activeW = isMobile ? ACTIVE_CARD_W_MOBILE : ACTIVE_CARD_W;
  const activeH = isMobile ? ACTIVE_CARD_H_MOBILE : ACTIVE_CARD_H;
  const inactiveW = isMobile ? INACTIVE_CARD_W_MOBILE : INACTIVE_CARD_W;
  const inactiveH = isMobile ? INACTIVE_CARD_H_MOBILE : INACTIVE_CARD_H;

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % total);

  // Determine which cards to show: Active is always at index 0
  const visibleCards = Array.from({ length: total }, (_, i) => {
    const index = (activeIndex + i) % total;
    return { ...segments[index], slot: i };
  });

  return (
    <Section className="relative overflow-hidden bg-white py-14 text-black md:py-24">
      <Container>
        <header className="mb-10 flex flex-col items-center text-center md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-6 py-2 text-sm font-medium text-neutral-500 border border-neutral-200">
            <span className="text-[8px]">●</span> Who We Serve
          </span>
          <h2 className="mt-8 max-w-2xl text-4xl font-semibold tracking-tight text-[#1A1A1A] md:text-5xl">
            Built for Every Player in the EV Ecosystem
          </h2>
        </header>

        <div className="relative mx-auto flex max-w-[1100px] items-center justify-center">
          {/* Nav Buttons - Left (Curved/Grey) - smaller on mobile */}
          <button
            onClick={goPrev}
            className="absolute left-0 z-40 flex h-10 w-8 items-center justify-center rounded-r-full border border-neutral-200 bg-[#F5F5F5] text-neutral-400 transition-all hover:bg-white hover:text-black shadow-sm md:left-[-20px] md:h-14 md:w-10"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Cards Container - smaller height on mobile */}
          <div
            className="relative flex w-full items-center overflow-visible px-4 md:px-10"
            style={{ height: isMobile ? 320 : 390 }}
          >
            {visibleCards.map((seg, i) => {
              const isActive = i === 0;
              return (
                <div
                  key={seg.href}
                  className="absolute transition-all duration-700 ease-in-out"
                  style={{
                    width: isActive ? activeW : inactiveW,
                    height: isActive ? activeH : inactiveH,
                    left: i === 0 ? (isMobile ? '50%' : '5%') : i === 1 ? (isMobile ? '50%' : '38%') : '65%',
                    transform: `translateX(${i === 0 ? (isMobile ? '-50%' : '0') : '0'}) ${isActive ? 'scale(1)' : 'scale(0.9)'}`,
                    top: isActive ? 0 : (activeH - inactiveH) / 2,
                    zIndex: 30 - i,
                    opacity: i > 2 || (isMobile && i > 0) ? 0 : 1,
                  }}
                >
                  <div className={`relative h-full w-full overflow-hidden rounded-2xl md:rounded-[32px] transition-all duration-500 ${isActive ? 'shadow-[12px_30px_70px_-10px_rgba(0,0,0,0.45),0_-10px_30px_-14px_rgba(0,0,0,0.32),10px_0_26px_-12px_rgba(0,0,0,0.28)]' : 'shadow-none'}`}>
                    <Image src={seg.image} alt="" fill className="object-cover" />
                    <div className={`absolute inset-0 ${isActive ? 'bg-gradient-to-t from-black/95 via-black/50 to-black/30' : 'bg-gradient-to-t from-black/80 via-transparent to-transparent'}`} />
                    {isActive && (
                      <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 text-white">
                        <h3 className="text-xl font-bold leading-tight md:text-3xl">{seg.title}</h3>
                        <p className="mt-1.5 text-xs text-white/80 whitespace-pre-line md:mt-2 md:text-sm">{seg.subtitle}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nav Buttons - Right (Dark/Oval) - smaller on mobile */}
          <button
            onClick={goNext}
            className="absolute right-0 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1A1A] text-white shadow-xl transition-transform hover:scale-105 md:right-[-20px] md:h-14 md:w-14"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Footer Navigation: Line + Pagination + Button */}
        <div className="mt-12 flex flex-col items-center md:mt-20">
          <div className="mb-8 flex w-full max-w-[1100px] items-center justify-end gap-3 pr-2 md:mb-12 md:gap-8">
            {/* Progress Line - shorter on mobile */}
            <div
              className="h-[2px] w-20 shrink-0 md:h-[3px] md:w-48"
              style={{ background: 'linear-gradient(to right, #000 0%, transparent 100%)' }}
            />

            {/* Pagination Numbers 1 2 3 - smaller on mobile */}
            <div className="flex items-baseline gap-2 font-normal leading-none md:gap-4" style={{ fontFamily: 'Sansation, sans-serif' }}>
              {segments.map((_, i) => (
                <span
                  key={i}
                  className={`transition-all duration-300 ${i === activeIndex ? 'text-4xl text-black font-normal md:text-7xl' : 'text-2xl text-neutral-300 font-light md:text-4xl'}`}
                >
                  {i + 1}
                </span>
              ))}
            </div>
          </div>

          {/* Get In Touch Button */}
          <Link
            href="/contact"
            className="group flex items-center gap-3 rounded-full bg-[#1A1A1A] p-1.5 pr-6 text-xs font-bold tracking-widest text-white transition-all hover:bg-black"
          >
            <span className="pl-6 uppercase">Get In Touch</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:rotate-45">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 7l-10 10M17 7H7M17 7v10" />
              </svg>
            </div>
          </Link>
        </div>
      </Container>
    </Section>
  );
}