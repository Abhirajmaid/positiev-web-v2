'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.avif"
          alt="Luxury car"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-cyan-400/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 flex-1 w-full">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight text-white max-w-4xl mx-auto animate-hero-heading">
          Your trusted car
          <br />
          dealership in Frankfurt
        </h1>
        <p className="text-base md:text-lg text-white/80 mt-6 max-w-2xl mx-auto animate-hero-subtext">
          Discover a curated selection of luxury vehicles built for performance.
        </p>
        <Link
          href="/vehicles"
          className="mt-10 bg-black text-white rounded-full px-8 py-4 font-medium shadow-xl hover:scale-105 transition-all duration-300 inline-block animate-hero-cta"
        >
          Explore Vehicles
        </Link>
      </div>
    </section>
  );
}
