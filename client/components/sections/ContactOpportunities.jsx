'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const cards = [
  {
    title: 'Business Inquiries',
    description:
      'Interested in working with us or exploring EV business opportunities? Connect with our team to learn more about our ecosystem and solutions.',
  },
  {
    title: 'Partnerships',
    description:
      'We collaborate with EV manufacturers, fleet operators, infrastructure providers, and financial partners to accelerate EV adoption.',
  },
  {
    title: 'Franchise & Dealer Network',
    description:
      'Looking to become part of our growing Dealer Lessor Franchisee (DLF) network? Contact us to explore dealership and franchise opportunities.',
  },
];

export function ContactOpportunities() {
  return (
    <Section className="bg-[#fafafa] py-16 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left column: heading + paragraphs */}
          <div className="max-w-xl">
            <h2 className="font-sansation text-4xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-7xl">
              Let&apos;s Build the <br /> Future of Electric <br /> Mobility Together
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-neutral-600 sm:text-lg">
              Have a question, partnership idea, or business inquiry? Our team would love to hear from you. Whether
              you&apos;re an OEM, fleet operator, dealer, investor, or strategic partner, we&apos;re here to help you
              explore opportunities within the PositiEV Mobility ecosystem.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-neutral-600 sm:text-lg">
              Reach out to us for partnerships, fleet leasing solutions, franchise inquiries, or general information,
              and our team will get back to you as soon as possible.
            </p>
          </div>

          {/* Right column: 3 dark blue cards */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl bg-[#0C3560] px-6 py-6 text-white shadow-[10px_10px_40px_rgba(0,0,0,0.7),6px_6px_20px_rgba(0,0,0,0.55)] sm:px-8 sm:py-7"
              >
                <h3 className="font-sansation text-xl font-bold sm:text-2xl">{card.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/90 sm:text-base">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
