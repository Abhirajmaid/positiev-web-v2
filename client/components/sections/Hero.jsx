'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative z-0 min-h-[130vh] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpeg"
          alt="Luxury vehicles"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" /> */}
        <div
          className="absolute inset-x-0 bottom-0 h-[15%] min-h-[100px]"
          aria-hidden
        />
      </div>

      <div className="relative z-15 w-full min-h-screen flex flex-col items-center justify-center px-6 text-center mt-[-55vh]">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-6xl">
            The Future of Mobility is Here
          </h1>
          <p className="text-lg md:text-xl text-white/90 animate-hero-subtext max-w-2xl">
          We provide the financial and operational infrastructure to scale EV adoption across OEMs, dealerships, and fleets.
          </p>
          <Link
            href="/vehicles"
            className="rounded-full px-8 py-4 bg-black text-white font-medium shadow-xl hover:bg-gray-800 hover:scale-105 transition-all duration-300 inline-block animate-hero-cta"
          >
            Partner With Us 
          </Link>
        </div>
      </div>
    </section>
  );
}
