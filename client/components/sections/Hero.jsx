import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';

const ctas = [
  { label: 'Become Franchise', href: '/franchise', variant: 'primary' },
  { label: 'Fleet Leasing', href: '/fleet-leasing', variant: 'secondary' },
  { label: 'OEM Partner', href: '/solutions/oem', variant: 'secondary' },
  { label: 'Invest With Us', href: '/investors', variant: 'ghost' },
];

export function Hero({ headline, subtext } = {}) {
  const title = headline || 'Premium automotive mobility, integrated.';
  const desc =
    subtext ||
    'Lease, charging infrastructure, and maintenance — one partner for OEMs, dealers, EV fleets, and investors.';

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">
      <Container>
        <div className="max-w-4xl">
          <Heading as="h1" size="hero" className="mb-6 animate-reveal">
            {title}
          </Heading>
          <p className="text-base md:text-lg text-neutral-600 mb-10 max-w-2xl animate-reveal">
            {desc}
          </p>
          <div className="flex flex-wrap gap-4 animate-reveal">
            {ctas.map((cta) => (
              <Button key={cta.href} href={cta.href} variant={cta.variant}>
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
