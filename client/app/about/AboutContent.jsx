'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { BrandCarousel } from '@/components/sections/BrandCarousel';
import { Leadership } from '@/components/sections/Leadership';

gsap.registerPlugin(ScrollTrigger);

const TYPING_MS = 28;

const blocks = [
  {
    id: 'vision',
    title: 'Vision',
    body: 'To be the integrated partner for OEMs, dealers, and EV fleets — combining lease, charging infrastructure, and maintenance under one roof.',
    icon: '◇',
  },
  {
    id: 'problem',
    title: 'Problem we solve',
    body: 'Fragmented offerings across lease, charging, and service create complexity and risk. We unify distribution, infra, and lifecycle support for predictable outcomes.',
    icon: '◆',
  },
  {
    id: 'mdl',
    title: 'MDL positioning',
    body: 'We sit at the intersection of vehicle distribution, EV infrastructure, and fleet operations — enabling guaranteed ROI frameworks and scalable growth for partners.',
    icon: '◈',
  },
];

export function AboutContent() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const blockRefs = useRef([]);
  const [typedLengths, setTypedLengths] = useState([0, 0, 0]);
  const [typingStarted, setTypingStarted] = useState(false);

  useEffect(() => {
    const blocksEl = blockRefs.current.filter(Boolean);
    if (!blocksEl.length) return;

    gsap.set(blocksEl, { opacity: 0, y: 48 });

    ScrollTrigger.create({
      trigger: contentRef.current,
      start: 'top 78%',
      once: true,
      onEnter: () => {
        gsap.to(blocksEl, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          onComplete: () => setTypingStarted(true),
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === contentRef.current) t.kill();
      });
    };
  }, []);

  // Auto-typer: all 3 cards type in parallel after cards animate in
  useEffect(() => {
    if (!typingStarted) return;
    const lengths = blocks.map((b) => b.body.length);
    const done = typedLengths.every((len, i) => len >= lengths[i]);
    if (done) return;

    const t = setTimeout(() => {
      setTypedLengths((prev) =>
        prev.map((len, i) => (len < lengths[i] ? len + 1 : len))
      );
    }, TYPING_MS);
    return () => clearTimeout(t);
  }, [typingStarted, typedLengths]);

  return (
    <>
      {/* Dark hero */}
      <header
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center overflow-hidden bg-neutral-900"
        aria-label="About us"
      >
        <Container className="relative z-10 py-20 lg:py-28">
          <div className="max-w-3xl">
            <motion.span
              className="inline-block mb-5 text-sm font-medium tracking-widest uppercase text-white"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
            </motion.span>
            <motion.h1
              className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl mb-5 drop-shadow-sm"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Who we are
            </motion.h1>
            <motion.p
              className="text-base text-white md:text-lg max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Vision, problem we solve, and how we position in the mobility ecosystem.
            </motion.p>
          </div>
        </Container>
      </header>

      <BrandCarousel />

      {/* Content blocks — typing effect */}
      <section
        ref={contentRef}
        className="relative py-20 lg:py-25 "
      >
        <Container className="relative">
          <div className="max-w-4xl space-y-8">
            {blocks.map((block, i) => (
              <div
                key={block.id}
                ref={(el) => { blockRefs.current[i] = el; }}
                className="group relative rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative p-8 md:p-10">
                  <span className="text-2xl text-slate-700 mb-3 block" aria-hidden>
                    {block.icon}
                  </span>
                  <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl mb-3">
                    {block.title}
                  </h2>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed min-h-[4.5rem]">
                    {block.body.slice(0, typedLengths[i])}
                    {typedLengths[i] < block.body.length && (
                      <span
                        className="inline-block w-0.5 min-h-[1em] align-text-bottom bg-slate-600 ml-0.5 animate-pulse"
                        aria-hidden
                      />
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership: bg blends with content section above */}
      <Leadership />
    </>
  );
}
