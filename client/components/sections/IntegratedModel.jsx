'use client';

import { useCallback, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';

const pillars = [
  {
    title: 'Lease',
    description: 'Operating lease and lease-to-own models with guaranteed ROI frameworks for fleets and dealers.',
  },
  {
    title: 'Infrastructure',
    description: 'Charging infrastructure planning, deployment, and management for EV fleets and retail.',
  },
  {
    title: 'Maintenance',
    description: 'Backend maintenance, uptime guarantees, and lifecycle support for vehicles and charging assets.',
  },
];

const spring = { type: 'spring', stiffness: 350, damping: 30 };

export function IntegratedModel() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [pillRect, setPillRect] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const gridRef = useRef(null);
  const cardRefs = useRef([]);

  const handleMouseEnter = useCallback((index) => {
    setHoveredIndex(index);
    const cardEl = cardRefs.current[index];
    const gridEl = gridRef.current;
    if (cardEl && gridEl) {
      const cardRect = cardEl.getBoundingClientRect();
      const gridRect = gridEl.getBoundingClientRect();
      setPillRect({
        left: cardRect.left - gridRect.left,
        top: cardRect.top - gridRect.top,
        width: cardRect.width,
        height: cardRect.height,
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-white text-black relative overflow-hidden">
      <Container>
        <div className="max-w-3xl mb-12 lg:mb-16">
          <Heading as="h2" size="section" className="mb-4 text-black">
            Integrated lease + infra + maintenance
          </Heading>
          <p className="text-base md:text-lg text-neutral-600">
            One partner for the full stack — from vehicle to charger to service.
          </p>
        </div>

        <div
          ref={gridRef}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Connectivity: faint animated dashed path connecting the three pillars */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none text-[0]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="integratedPathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="rgb(59 130 246)" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            <motion.path
              fill="none"
              stroke="url(#integratedPathGradient)"
              strokeWidth="0.6"
              strokeDasharray="6 4"
              strokeLinecap="round"
              d="M 15 50 L 50 50 L 85 50 L 15 50"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ strokeDashoffset: { duration: 3, repeat: Infinity, ease: 'linear' } }}
            />
          </svg>

          {/* Sliding pill / spotlight */}
          {hoveredIndex !== null && (
            <motion.span
              className="absolute rounded-2xl pointer-events-none z-0 bg-blue-500/10"
              animate={{
                left: pillRect.left,
                top: pillRect.top,
                width: pillRect.width,
                height: pillRect.height,
              }}
              initial={false}
              transition={spring}
            />
          )}

          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="relative z-10"
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { type: 'spring', stiffness: 400, damping: 25 },
              }}
              animate={{
                boxShadow: hoveredIndex === index ? '0 0 30px rgba(59, 130, 246, 0.4)' : '0 0 0 rgba(59, 130, 246, 0)',
              }}
              transition={{ duration: 0.25 }}
            >
              <div
                className="group block h-full p-6 lg:p-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/80 hover:border-blue-200/60 cursor-default"
              >
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                  {pillar.title}
                </h3>
                <p className="text-base md:text-lg text-gray-400 group-hover:text-gray-800 transition-colors duration-200">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
