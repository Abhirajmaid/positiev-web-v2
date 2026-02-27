import { GridSection } from '@/components/layout/GridSection';
import { Card } from '@/components/ui/Card';

const segments = [
  { title: 'OEMs', description: 'Distribution, fleet programs, and charging infra partnerships.', href: '/solutions/oem' },
  { title: 'Dealers', description: 'Retail, leasing, and certified network expansion.', href: '/solutions/dealers' },
  { title: 'EV Fleets', description: 'Operating lease, uptime guarantee, and charging support.', href: '/solutions/ev-fleets' },
  { title: 'NBFCs / Investors', description: 'Structured products, IRR frameworks, and co-investment.', href: '/solutions/investors' },
];

export function WhoWeServe() {
  return (
    <GridSection
      title="Who we serve"
      subtitle="We power mobility for OEMs, dealers, EV fleets, and capital partners."
      columns={4}
    >
      {segments.map((seg) => (
        <Card
          key={seg.href}
          title={seg.title}
          description={seg.description}
          href={seg.href}
        />
      ))}
    </GridSection>
  );
}
