'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const uspCards = [
  {
    title: 'EV Asset Leasing',
    subtitle: 'Operating Lease for Electric Vehicles',
    description:
      'We provide EV assets on a flexible lease-to-own model, enabling fleet operators to scale without heavy upfront investment. Businesses can deploy vehicles quickly while gradually building ownership over time.',
  },
  {
    title: 'Charging Infrastructure',
    subtitle: 'Reliable Charging, Fully Supported',
    description:
      'Our charging infrastructure solutions are available on a leasing model, allowing fleets to operate without worrying about setup costs or infrastructure management. We ensure dependable charging access to keep vehicles running efficiently.',
  },
  {
    title: 'Maintenance & Uptime',
    subtitle: 'End-to-End Fleet Maintenance',
    description:
      'We manage vehicle servicing, monitoring, and maintenance through a structured monthly billing system. This ensures maximum uptime, predictable costs, and seamless fleet operations.',
  },
];

function SideCard({ card, curvePosition }) {
  const isRight = curvePosition === 'right';
  return (
    <article className="relative flex min-h-[180px] flex-1 flex-col overflow-hidden rounded-2xl p-5 shadow-[0_8px_20px_rgba(0,0,0,0.1)] sm:min-h-[320px] sm:p-6">
      {/* Background: Frame 9.png folder image; flip for left card so tab is on correct side */}
      <div
        className="absolute inset-0 rounded-2xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Frame%209.png')",
          ...(isRight ? {} : { transform: 'scaleX(1)' }),
        }}
        aria-hidden
      />
      <h3 className="relative z-10 flex flex-1 items-center justify-start text-left text-xl font-semibold leading-[1.2] tracking-tight text-neutral-900 sm:text-5xl">
        {card.title}
      </h3>
    </article>
  );
}

function CenterCard({ card }) {
  return (
    <article className="relative z-10 mx-4 flex min-h-[280px] flex-1 flex-col rounded-2xl bg-[#0C3560] p-6 shadow-[0_12px_28px_rgba(12,53,96,0.45),0_4px_12px_rgba(0,0,0,0.25)] sm:min-h-[320px] sm:p-7 lg:min-h-[370px] lg:scale-[1.08] lg:p-8 gap-6">
      <h3 className="text-left text-2xl font-medium leading-[1.15] tracking-tight text-white sm:text-3xl">
        {card.title}
      </h3>
      <p className="mt-3 text-left text-lg font-medium leading-[1.25] text-white/95 sm:text-xl">
        {card.subtitle}
      </p>
      <p className="mt-4 text-left text-sm leading-[1.4] text-white/90 sm:text-base">
        {card.description}
      </p>
    </article>
  );
}

export function OurUSP() {
  return (
    <Section className="bg-[#f3f3f3] py-16 lg:py-25">
      <Container>
        <span className="inline-flex items-center gap-2 rounded-full bg-[#e5e5e5] px-8 py-3 text-base font-medium text-neutral-700">
          <span aria-hidden>•</span>
          <span>Our USP</span>
        </span>

        <h2 className="mt-12 max-w-[700px] text-3xl font-medium leading-[1.12] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Powering EV Fleets with a
          <br />
          Fully Integrated Backend
        </h2>
        <p className="mt-4 max-w-[620px] text-lg leading-[1.35] text-neutral-600 sm:text-xl lg:text-2xl">
          From vehicle leasing to charging and maintenance, we simplify fleet operations end-to-end.
        </p>

        <div className="mt-12 flex flex-col items-stretch gap-6 md:flex-row md:items-end md:justify-center md:gap-4 lg:gap-6">
          <div className="flex flex-1 justify-end md:max-w-[430px] ">
            <SideCard card={uspCards[0]} curvePosition="right" />
          </div>
          <div className="flex flex-[1.4] justify-center md:max-w-[420px]">
            <CenterCard card={uspCards[1]} />
          </div>
          <div className="flex flex-1 justify-start md:max-w-[430px]">
            <SideCard card={uspCards[2]} curvePosition="left" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
