import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { AboutBackbone } from '@/components/sections/AboutBackbone';
import { AboutQuoteAndWhatWeDo } from '@/components/sections/AboutQuoteAndWhatWeDo';
import { AboutVision } from '@/components/sections/AboutVision';

export function AboutContent() {
  return (
    <>
      {/* About hero */}
      <header
        className="relative flex min-h-screen items-center overflow-hidden !py-0"
        aria-label="About PositiEV Mobility"
      >
        <Image
          src="/about-hero.png"
          alt="PositiEV Mobility — team and EV on the road"
          fill
          priority
          className="object-cover object-center"
        />

       

        <Container className="relative z-10 w-full pt-36 pb-20 sm:pt-40 sm:pb-24">
          <div className="max-w-2xl text-left">
            <h1 className="animate-hero-heading text-balance text-[42px] font-light leading-[1.08] tracking-tight text-white sm:text-[56px] lg:text-[64px]">
              About <br /> PositiEV Mobility
            </h1>
            <p className="animate-hero-subtext mt-6 max-w-xl text-[22px] leading-snug text-white/95 sm:text-[28px]">
              Building the Backbone of India&apos;s EV Ecosystem
            </p>
          </div>
        </Container>
      </header>

      <AboutBackbone />
      <AboutQuoteAndWhatWeDo />
      <AboutVision />
    </>
  );
}
