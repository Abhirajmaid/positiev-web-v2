'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';

const segments = [
  { title: 'OEMs', description: 'Distribution, fleet programs, and charging infra partnerships.', href: '/solutions/oem', image: '/images/1st.png' },
  { title: 'Dealers', description: 'Retail, leasing, and certified network expansion.', href: '/solutions/dealers', image: '/images/2nd.png' },
  { title: 'EV Fleets', description: 'Operating lease, uptime guarantee, and charging support.', href: '/solutions/ev-fleets', image: '/images/3rd.png' },
];

export function WhoWeServe() {
  return (
    <section className="relative z-30 py-24 lg:py-32 bg-neutral-50 text-black overflow-hidden">
      <Container>
        <header className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            Who we serve
          </h2>
          <p className="text-neutral-600 text-lg text-center mt-4 max-w-2xl mx-auto">
            We power mobility for OEMs, dealers, EV fleets, and capital partners.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {segments.map((seg, index) => {
            const textBlock = (
              <div className="p-6 lg:p-8 flex-1" key="text">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {seg.title}
                </h3>
                <p className="text-base text-neutral-700 group-hover:text-neutral-800 transition-colors duration-200">
                  {seg.description}
                </p>
              </div>
            );
            const imageBlock = (
              <div className="relative w-full aspect-[4/3] bg-neutral-100 flex-shrink-0" key="img">
                <Image
                  src={seg.image}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            );
            const isMiddle = index === 1;
            return (
              <Link
                key={seg.href}
                href={seg.href}
                className="group flex flex-col h-full rounded-3xl bg-white shadow-sm border border-neutral-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {isMiddle ? (
                  <>
                    {textBlock}
                    {imageBlock}
                  </>
                ) : (
                  <>
                    {imageBlock}
                    {textBlock}
                  </>
                )}
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
