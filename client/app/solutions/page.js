import { PageHeader } from '@/components/layout/PageHeader';
import { GridSection } from '@/components/layout/GridSection';
import { Card } from '@/components/ui/Card';
import { SOLUTION_SEGMENTS } from '@/lib/constants';

export const metadata = {
  title: 'Solutions | Positiev',
  description: 'OEM, dealers, EV fleets, and investors — integrated mobility solutions.',
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        title="Solutions"
        subtitle="Distribution, guaranteed ROI, operating lease, and IRR frameworks for each segment."
      />
      <GridSection
        title="Who we serve"
        subtitle="Select a segment to explore distribution model, ROI framework, and operating lease details."
        columns={4}
      >
        {SOLUTION_SEGMENTS.map((seg) => (
          <Card
            key={seg.slug}
            title={seg.label}
            description="Distribution model, guaranteed ROI framework, operating lease model, IRR structure."
            href={seg.href}
          />
        ))}
      </GridSection>
    </>
  );
}
