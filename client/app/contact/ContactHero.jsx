'use client';

import Image from 'next/image';

export function ContactHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image - full bleed */}
      <div className="absolute inset-0">
        <Image
          src="/contact.png"
          alt=""
          fill
          className="object-cover object-right md:object-center"
          priority
          sizes="100vw"
        />
      </div>
      {/* Hero content - left-aligned like reference image, same horizontal alignment as navbar */}
      <div className="relative z-10 flex min-h-[85vh] flex-col justify-center pt-32 pb-20">
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-20">
          <div className="max-w-3xl text-left">
            <h1 className="font-sansation text-5xl md:text-6xl font-light tracking-tight text-white sm:text-7xl">
              Contact Us
            </h1>
            <p className="mt-8 font-sans text-lg text-white/95 sm:text-4xl ">
              Let&apos;s Build the Future of Electric <br /> Mobility Together
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
