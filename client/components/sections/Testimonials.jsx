'use client';

import { Container } from '@/components/ui/Container';
import { FeaturedTestimonialCard, StandardTestimonialCard } from './TestimonialCard';

const SUBTEXT =
  'Trusted by OEMs, dealers, and fleet partners worldwide for integrated mobility solutions.';

const TESTIMONIALS = [
  {
    id: 'featured',
    featured: true,
    mediaSrc: '/sample.mp4',
    mediaType: 'video',
    rating: 5.0,
    quote:
      'Positiev’s integrated platform transformed how we manage our fleet. Real-time visibility and seamless dealer coordination have made operations smoother than ever.',
    name: 'Rajesh Kumar',
    role: 'Fleet Operations Director',
  },
  {
    id: '2',
    rating: 4.9,
    quote:
      'The OEM–dealer–fleet integration is unmatched. We’ve reduced turnaround time and improved customer satisfaction significantly.',
    name: 'Priya Sharma',
    role: 'Head of Sales, Premium Dealership',
  },
  {
    id: '3',
    rating: 5.0,
    quote:
      'From leasing to maintenance, everything is in one place. Our team saves hours every week thanks to Positiev.',
    name: 'Amit Patel',
    role: 'Fleet Manager',
  },
  {
    id: '4',
    rating: 4.9,
    quote:
      'Partnering with Positiev gave us the edge we needed in a competitive market. Their platform is intuitive and powerful.',
    name: 'Sneha Reddy',
    role: 'Dealer Principal',
  },
  {
    id: '5',
    rating: 4.8,
    quote:
      'Best-in-class support and a roadmap that aligns with our growth. We’re scaling our EV fleet with confidence.',
    name: 'Vikram Singh',
    role: 'CEO, Fleet Leasing Co.',
  },
];

export function Testimonials() {
  const featured = TESTIMONIALS.find((t) => t.featured);
  const standard = TESTIMONIALS.filter((t) => !t.featured);

  return (
    <section className="bg-[#f5f5f5] py-15 lg:py-20">
      <Container>
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-neutral-500 md:text-xl">
            {SUBTEXT}
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {/* Left media card (spans 2 rows on desktop) */}
          <div className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <FeaturedTestimonialCard
              mediaSrc={featured.mediaSrc}
              mediaType={featured.mediaType}
              rating={featured.rating}
              quote={featured.quote}
              name={featured.name}
              role={featured.role}
            />
          </div>

          {/* Right side: 4 standard cards (2 columns x 2 rows on desktop) */}
          {standard.slice(0, 4).map((t) => (
            <div key={t.id}>
              <StandardTestimonialCard
                rating={t.rating}
                quote={t.quote}
                name={t.name}
                role={t.role}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
