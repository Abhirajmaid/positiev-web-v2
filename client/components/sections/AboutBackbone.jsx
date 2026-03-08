'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function AboutBackbone() {
  return (
    <Section className="bg-white py-16 lg:py-24">
      <Container className="max-w-[100rem]">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.5rem]">
            Building the backbone of India&apos;s electric mobility ecosystem.
          </h2>
          <p className="mt-6 text-lg leading-[1.55] text-neutral-600 sm:text-xl">
            PositiEV Mobility is a tech-enabled EV distribution and leasing company connecting manufacturers,
            dealers, fleet operators, and financial partners to accelerate EV adoption across India.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-16 w-full overflow-hidden rounded-t-2xl s">
          <div className="aspect-[21/9] w-full bg-neutral-200">
            <Image
              src="/1.png"
              alt="EV charging station with multiple vehicles"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 100rem"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
