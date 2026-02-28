'use client';

const BRANDS = [
  'Acme Corp',
  'Boltshift',
  'Epicurious',
  'Nietzsche',
  'Interlock',
  'Velocity',
  'Apex Motors',
];

export function BrandCarousel() {
  return (
    <section
      className="relative z-20 w-full bg-neutral-50 py-20 lg:py-28 overflow-hidden"
      aria-label="Brand partners"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="marquee-pause marquee-mask w-full overflow-hidden select-none">
          <div className="marquee-track flex gap-16 lg:gap-20 w-max">
            {[...BRANDS, ...BRANDS].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="shrink-0 text-neutral-400 font-medium text-lg md:text-xl tracking-wide transition-colors duration-200 hover:text-neutral-700"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
