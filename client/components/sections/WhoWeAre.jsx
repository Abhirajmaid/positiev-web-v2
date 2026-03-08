'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function WhoWeAre() {
  return (
    <Section className="bg-transparent py-16 lg:py-20">
      <Container>
        <div className="mb-16 flex justify-center lg:mb-36">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#e5e5e5] px-8 py-3 text-base font-medium text-neutral-700">
            <span aria-hidden>•</span>
            <span>Who we are</span>
          </span>
        </div>

        <div className="mx-auto grid w-full max-w-[1040px] grid-cols-1 gap-8 lg:gap-10 lg:grid-cols-[0.48fr_0.52fr]">
          <div className="relative scale-[1.02] lg:scale-[1.05]">
            <article className="relative min-h-[450px] md:min-h-[650px] rounded-[1.7rem] bg-[#1b1c20] p-8 text-white shadow-[12px_14px_34px_rgba(0,0,0,0.76),0_-6px_18px_rgba(0,0,0,0.24)] lg:p-10">
              <h3 className="text-3xl font-medium tracking-tight">About Us</h3>
              <p className="mt-8 max-w-[360px] text-lg leading-[1.6] text-white/95">
                PositiEV Mobility is a tech-enabled EV distribution and leasing company redefining mobility, with a clear
                vision to become India&apos;s largest EV distributor by 2030.
              </p>

              <div className="absolute inset-x-8 bottom-6 lg:inset-x-10">
                <Link
                  href="/about"
                  className="flex h-12 items-center justify-center rounded-xl bg-[#d7d7d9] text-xl font-medium text-neutral-900 transition-colors hover:bg-white"
                >
                  Know More
                </Link>
              </div>
            </article>
          </div>

          <article className="overflow-hidden rounded-3xl ">
            <div className="p-7 lg:p-8">
              <div className="flex items-end justify-between">
                <p className="text-6xl md:text-8xl font-medium leading-none tracking-tight text-neutral-800">19+</p>
                <p className="pb-2 text-lg font-medium text-neutral-700">Clients &amp; partners</p>
              </div>
              <div className="my-4 h-px " />
              <p className="text-xl leading-[1.22] text-neutral-800">
                We work with EV manufacturers, dealers to reinforce retail sales networks while also supporting leasing
                to B2B institutional clients.
              </p>
            </div>

            <div className="h-px w-full" />

            <div className="p-7 lg:p-8">
              <h3 className="text-5xl md:text-5xl font-medium leading-[0.95] tracking-tight text-neutral-900">Our Network</h3>
              <div className="my-4 h-px bg-neutral-300" />
              <p className="text-xl leading-[1.22] text-neutral-800">
                We have an extensive network of partners : OEMs , NBFCs , 3PLs/EV Fleet - Customers
              </p>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}
