'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const logos = ['Logo', 'Logo', 'Logo', 'Logo', 'Logo', 'Logo', 'Logo'];
const marqueeLogos = [...logos, ...logos];

export function EcosystemTogether() {
  return (
    <Section className="bg-[#f3f3f3] py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
            Powering the EV Ecosystem Together
          </h2>
          <p className="mt-6 text-lg leading-[1.5] text-neutral-600 sm:text-xl">
            Collaborating with OEMs, fleet operators, infrastructure providers, and financial partners to accelerate EV
            adoption.
          </p>
        </div>

        <div className="marquee-pause relative mt-14 overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-4 sm:gap-5">
            {marqueeLogos.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="inline-flex h-11 min-w-[92px] shrink-0 items-center justify-center rounded-xl bg-[#e3e3e3] px-6 text-xl font-medium text-neutral-700"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#f3f3f3] to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#f3f3f3] to-transparent sm:w-24" />
        </div>
      </Container>
    </Section>
  );
}

export function BuildFutureCTA() {
  return (
    <Section className="bg-[#f3f3f3] pb-25 pt-6 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-[1240px] overflow-hidden rounded-3xl bg-gradient-to-b from-[#171a1e] via-[#0f1824] to-[#0d3d6f] px-8 py-16 text-center text-white shadow-[0_10px_20px_rgba(0,0,0,0.2)] sm:px-12 sm:py-20">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-6xl">
            Let&apos;s Build the Future of Electric Mobility Together
          </h2>
          <p className="mx-auto mt-6 max-w-[760px] text-lg leading-[1.45] text-white/85 sm:text-xl">
            From fleets to infrastructure, we provide the backend that powers EV growth.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#111318] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-black"
            >
              Get In Touch
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                <svg viewBox="0 0 20 20" aria-hidden className="h-4 w-4">
                  <path
                    d="M6.5 13.5L13.5 6.5M8.5 6.5h5v5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
