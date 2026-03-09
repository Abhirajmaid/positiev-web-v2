'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
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

const CARD_W = 400;
const CARD_H = 460;
const CARD_W_MOBILE = 280;
const CARD_H_MOBILE = 320;

// Inactive cards share the same scale so they are equal in size.
// x positions are computed dynamically; y offset is derived in render for vertical centering.
const INACTIVE_SCALE = 0.80;

const SLOT_META = [
  { scale: 1,              z: 30, opacity: 1,    blur: 0   },
  { scale: INACTIVE_SCALE, z: 20, opacity: 0.95, blur: 0   },
  { scale: INACTIVE_SCALE, z: 10, opacity: 0.88, blur: 0.6 },
];

const MOBILE_SLOT_META = [
  { scale: 1,              z: 30, opacity: 1, blur: 0 },
  { scale: INACTIVE_SCALE, z: 20, opacity: 0, blur: 0 },
  { scale: INACTIVE_SCALE, z: 10, opacity: 0, blur: 0 },
];

// Gap in px between card visual edges
const CARD_GAP = 16;

const TRANSITION = 'transform 0.65s cubic-bezier(0.22,1,0.36,1), opacity 0.65s cubic-bezier(0.22,1,0.36,1), filter 0.65s ease';

export function WhoWeServe() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const total = segments.length;

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 768);
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const cardW = isMobile ? CARD_W_MOBILE : CARD_W;
  const cardH = isMobile ? CARD_H_MOBILE : CARD_H;
  const slotMeta = isMobile ? MOBILE_SLOT_META : SLOT_META;

  // Visual widths of each slot (card width × scale, since transformOrigin is top-left)
  const vw0 = cardW * SLOT_META[0].scale; // = cardW
  const vw1 = cardW * SLOT_META[1].scale; // cardW × 0.82
  const vw2 = cardW * SLOT_META[2].scale; // cardW × 0.72

  // Total visual span of the three-card group
  const groupWidth = isMobile ? vw0 : vw0 + CARD_GAP + vw1 + CARD_GAP + vw2;

  // Offset so the group is horizontally centered in the container
  const startX = containerWidth > 0 ? Math.max(0, (containerWidth - groupWidth) / 2) : 0;

  // X positions per slot — equal gaps, centered as a group
  const xPositions = isMobile
    ? [startX, startX, startX]
    : [startX, startX + vw0 + CARD_GAP, startX + vw0 + CARD_GAP + vw1 + CARD_GAP];

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % total);

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
          {/* Left nav button */}
          <button
            onClick={goPrev}
            className="absolute left-0 z-40 flex h-10 w-8 items-center justify-center rounded-r-full border border-neutral-200 bg-[#F5F5F5] text-neutral-400 transition-all hover:bg-white hover:text-black shadow-sm md:left-[-20px] md:h-14 md:w-10"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards container — fixed height, overflow visible so cards can stack outward */}
          <div
            ref={containerRef}
            className="relative w-full overflow-visible"
            style={{ height: cardH }}
          >
            {segments.map((seg, segIndex) => {
              const slot = (segIndex - activeIndex + total) % total;
              const { scale, z, opacity, blur } = slotMeta[slot];
              const x = xPositions[slot];
              const isActive = slot === 0;

              // Vertically center inactive cards against the active card.
              // Since transformOrigin is top-left, scaling shrinks downward from y=0.
              // Shift down by half the difference so the visual center matches.
              const yOffset = (cardH - cardH * scale) / 2;

              return (
                <div
                  key={seg.href}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: cardW,
                    height: cardH,
                    transformOrigin: 'top left',
                    transform: `translate3d(${x}px, ${yOffset}px, 0px) scale(${scale})`,
                    zIndex: z,
                    opacity,
                    filter: blur > 0 ? `blur(${blur}px)` : undefined,
                    transition: TRANSITION,
                    willChange: 'transform',
                  }}
                >
                  <div
                    className={`relative h-full w-full overflow-hidden rounded-2xl md:rounded-[32px] transition-shadow duration-500 ${
                      isActive
                        ? 'shadow-[0_40px_100px_-8px_rgba(0,0,0,0.75),0_20px_50px_-10px_rgba(0,0,0,0.6),20px_0_50px_-15px_rgba(0,0,0,0.5),-4px_0_30px_-8px_rgba(0,0,0,0.35)]'
                        : 'shadow-none'
                    }`}
                  >
                    <Image src={seg.image} alt="" fill className="object-cover" />
                    <div
                      className={`absolute inset-0 transition-all duration-500 ${
                        isActive
                          ? 'bg-gradient-to-t from-black/95 via-black/50 to-black/30'
                          : 'bg-gradient-to-t from-black/90 via-black/30 to-transparent'
                      }`}
                    />
                    <div
                      className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-white"
                      style={{ transition: 'opacity 0.4s ease' }}
                    >
                      <h3 className={`font-bold leading-tight whitespace-pre-line ${isActive ? 'text-xl md:text-3xl' : 'text-sm md:text-base'}`}>
                        {seg.title}
                      </h3>
                      <p className={`mt-1 whitespace-pre-line ${isActive ? 'text-xs text-white/80 md:text-sm' : 'text-[10px] text-white/70 md:text-xs'}`}>
                        {seg.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right nav button */}
          <button
            onClick={goNext}
            className="absolute right-0 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1A1A] text-white shadow-xl transition-transform hover:scale-105 md:right-[-20px] md:h-14 md:w-14"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Footer: progress line + pagination + CTA */}
        <div className="mt-12 flex flex-col items-center md:mt-20">
          <div className="mb-8 flex w-full max-w-[1100px] items-center justify-end gap-3 pr-2 md:mb-12 md:gap-8">
            <div
              className="h-[2px] w-20 shrink-0 md:h-[3px] md:w-48"
              style={{ background: 'linear-gradient(to right, #000 0%, transparent 100%)' }}
            />
            <div
              className="flex items-baseline gap-2 font-normal leading-none md:gap-4"
              style={{ fontFamily: 'Sansation, sans-serif' }}
            >
              {segments.map((_, i) => (
                <span
                  key={i}
                  className={`transition-all duration-300 ${
                    i === activeIndex
                      ? 'text-4xl text-black font-normal md:text-7xl'
                      : 'text-2xl text-neutral-300 font-light md:text-4xl'
                  }`}
                >
                  {i + 1}
                </span>
              ))}
            </div>
          </div>

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
