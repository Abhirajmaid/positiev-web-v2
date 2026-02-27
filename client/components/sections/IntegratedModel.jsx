import { GridSection } from '@/components/layout/GridSection';
import { Card } from '@/components/ui/Card';

const pillars = [
  {
    title: 'Lease',
    description: 'Operating lease and lease-to-own models with guaranteed ROI frameworks for fleets and dealers.',
  },
  {
    title: 'Infrastructure',
    description: 'Charging infrastructure planning, deployment, and management for EV fleets and retail.',
  },
  {
    title: 'Maintenance',
    description: 'Backend maintenance, uptime guarantees, and lifecycle support for vehicles and charging assets.',
  },
];

export function IntegratedModel() {
  return (
    <GridSection
      title="Integrated lease + infra + maintenance"
      subtitle="One partner for the full stack — from vehicle to charger to service."
      columns={3}
    >
      {pillars.map((p) => (
        <Card key={p.title} title={p.title} description={p.description} />
      ))}
    </GridSection>
  );
}
