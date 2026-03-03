'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

gsap.registerPlugin(ScrollTrigger);

// Match TestimonialCard styling
const cardGlass =
  'bg-white/80 backdrop-blur-lg border border-neutral-400 shadow-lg hover:shadow-xl';
const cardClipPath =
  'polygon(20% 0%, 100% 0, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 1% 100%, 0% 20%)';

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.94 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.15 + i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Leadership({ members = [] }) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const fallback = [
    { name: 'Leader One', role: 'CEO' },
    { name: 'Leader Two', role: 'COO' },
    { name: 'Leader Three', role: 'CFO' },
  ];
  const list = members.length ? members : fallback;

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    if (!section || !title || !subtitle) return;

    gsap.set([title, subtitle], { opacity: 0, y: 32 });

    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top 82%',
      once: true,
      onEnter: () => {
        gsap.to(title, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
        gsap.to(subtitle, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.12,
          ease: 'power3.out',
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
      aria-labelledby="leadership-heading"
    >
      <div
        className="absolute inset-0 bg-neutral-900"
        aria-hidden
      />

      <Container className="relative">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <h2
            id="leadership-heading"
            ref={titleRef}
            className="text-3xl md:text-6xl font-semibold tracking-tight text-white mb-4"
          >
            Leadership
          </h2>
          <p
            ref={subtitleRef}
            className="text-base md:text-lg text-white"
          >
            Meet the team driving mobility forward.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {list.map((person, i) => (
            <motion.article
              key={person.name}
              custom={i}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.25 }}
              className={`relative flex h-full min-w-0 flex-col overflow-hidden rounded-none p-6 transition-all duration-300 ease-out hover:-translate-y-1 ${cardGlass}`}
              style={{ clipPath: cardClipPath }}
            >
              <div className="mb-6 flex flex-1" />
              <div className="flex shrink-0 items-center gap-3">
                <motion.div
                  className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-neutral-200"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <span className="flex h-full w-full items-center justify-center text-sm font-semibold text-neutral-500">
                    {person.name.charAt(0)}
                  </span>
                </motion.div>
                <div className="min-w-0">
                  <p className="font-semibold text-neutral-900">{person.name}</p>
                  <p className="text-sm text-neutral-500">{person.role ?? ''}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
