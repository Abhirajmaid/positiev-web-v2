'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function AboutVision() {
  return (
    <Section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left: text vertical with clear gaps, right-aligned to match image */}
          <div className="text-right">
            <h2 className="text-[3rem] font-bold leading-[0.95] tracking-tight text-neutral-900 sm:text-[3.75rem] lg:text-[6rem]">
              <span className="block">Our</span>
              <span className="block">Vision</span>
            </h2>
            <h3 className="mt-10 text-xl font-bold leading-tight text-neutral-900 sm:text-2xl">
              Scaling EV Mobility Across India
            </h3>
            <p className="mt-8 text-base leading-[1.55] text-neutral-600 sm:text-lg">
              Our vision is to become India&apos;s largest EV distributor by 2030 by building strong
              distribution networks, enabling fleet growth, and supporting the EV ecosystem with
              reliable infrastructure.
            </p>
          </div>

          {/* Right: blue rounded box — tall (high h), moderate width, subtle shadow */}
          <div
            className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#2a6bb7] via-[#1d5fb5] to-[#164a8f] shadow-[0_8px_24px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.08)]"
          >
            <div className="aspect-[4/3] w-full sm:aspect-[3/2]">
              <Image
                src="/3.png"
                alt="Scaling EV mobility — collaboration and growth"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
