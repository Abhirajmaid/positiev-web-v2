'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const services = [
  {
    title: 'EV Asset Leasing',
    description:
      'Flexible operating lease and lease-to-own models that reduce upfront capital requirements.',
  },
  {
    title: 'Charging Infrastructure',
    description: 'Reliable charging solutions available through flexible leasing arrangements.',
  },
  {
    title: 'Maintenance & Fleet Support',
    description: 'End-to-end servicing and maintenance to ensure maximum fleet uptime.',
  },
];

export function AboutQuoteAndWhatWeDo() {
  return (
    <Section className="bg-white py-16 lg:py-24">
      <Container>
        {/* Quote (left) + descriptive text (right) — match reference layout */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8 lg:items-start">
          <div className="relative">
            <h2 className="relative inline-block pl-12 pr-12  text-left text-2xl font-bold tracking-tight text-neutral-900 sm:pl-16 sm:pr-16 sm:text-3xl lg:text-4xl">
              <span className="block pt-3 text-center ">Driving the Future of <br /> EV Distribution</span>
              <span
              className="absolute left-0 -top-3 font-sans leading-none text-neutral-900 sm:-left-2"
              style={{ fontSize: '120px' }}
              aria-hidden
            >
              {"\u201C"}
            </span>
                <span
                  className="absolute right-0 -bottom-16 sm:-right-2 font-sans leading-none text-neutral-900"
                  style={{ fontSize: '120px' }}
                  aria-hidden
                >
                  {"\u201D"}
                </span>
            </h2>
          </div>
          <div className="space-y-5 text-left text-base leading-relaxed text-neutral-500 sm:text-xl">
            <p>
              We work with EV manufacturers and dealer networks to strengthen retail sales while also
              supporting B2B fleet leasing solutions for institutional clients.
            </p>
            <p>
              Our growing ecosystem of OEMs, dealers, fleet operators, and NBFC partners allows us to
              create scalable EV deployment models for businesses across the country.
            </p>
          </div>
        </div>

        {/* Bottom: What We Do (black, w-small / h-big) + 3 white cards — shifted slightly right */}
        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.75fr)] lg:gap-10 lg:items-stretch ml-6 lg:ml-12">
          {/* Left: dark card — narrow, tall, clear gaps between title / subtitle / description */}
          <div
            className="flex min-h-0 flex-col rounded-2xl bg-neutral-900 px-6 py-10 text-white sm:px-8 sm:py-12"
            style={{
              boxShadow:
                '0 -4px 20px rgba(0,0,0,0.15), 8px 4px 24px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.6)',
            }}
          >
            <h3 className="text-2xl font-bold tracking-tight sm:text-6xl">
              <span className="block">What</span>
              <span className="block">We</span>
              <span className="block">Do</span>
            </h3>
            <p className="mt-8 text-xl font-semibold text-white/95">
              Complete Asset Backend for EV Fleets
            </p>
            <p className="mt-6 text-sm leading-relaxed text-white/80 sm:text-base">
              We provide an integrated backend that enables businesses to adopt and scale EV fleets
              efficiently.
            </p>
          </div>

          {/* Right: 3 white cards — taller, more gap between heading and description */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {services.map((item) => (
              <div
                key={item.title}
                className="min-h-[120px] rounded-2xl border border-neutral-200/80 bg-neutral-50/90 px-6 py-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] sm:px-8 sm:py-7"
              >
                <h4 className="text-2xl font-semibold text-neutral-900 sm:text-xl">{item.title}</h4>
                <p className="mt-5 text-xl leading-relaxed text-neutral-600 sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
