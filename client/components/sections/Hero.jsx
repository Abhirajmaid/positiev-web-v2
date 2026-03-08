import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export function Hero() {
  return (
    <Section className="relative flex min-h-screen items-center overflow-hidden !py-0">
      <Image
        src="/hero.png"
        alt="Electric car"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Gradient: strong on the left where text lives, fades to transparent on the right */}
     

      <Container className="relative z-10 w-full pt-36 pb-20 sm:pt-40 sm:pb-24">
        <div className="max-w-2xl text-left">
          <h1 className="animate-hero-heading text-balance text-[46px] font-light leading-[1.08] tracking-tight text-white sm:text-[62px] lg:text-[72px]">
            Reimagining the Way the <br /> World Moves.
          </h1>

          <p className="animate-hero-subtext mt-6 max-w-xl text-[25px] leading-snug text-white/90 sm:text-[34px]">
            Powering India's EV Ecosystem <br /> From Asset to Uptime.
          </p>

          <div className="animate-hero-cta mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#1A1A1A] p-1.5 pr-6 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-black"
            >
              <span className="pl-5">Get In Touch</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:rotate-45">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="h-4 w-4"
                >
                  <path d="M6.5 13.5L13.5 6.5M8.5 6.5h5v5" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
