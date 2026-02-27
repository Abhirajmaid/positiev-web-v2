import { GridSection } from '@/components/layout/GridSection';
import { Card } from '@/components/ui/Card';

const cases = [
  { title: 'E-commerce', description: 'Last-mile delivery fleets with operating lease and charging support.' },
  { title: 'EV Taxi', description: 'Taxi and ride-hail operators with uptime guarantee and maintenance.' },
  { title: '3PL', description: 'Third-party logistics with fleet leasing and infra solutions.' },
  { title: 'Corporate Transport', description: 'Employee transport and corporate fleet management.' },
];

export function UseCases() {
  return (
    <GridSection
      title="Use cases"
      subtitle="Fleet leasing that fits your business model."
      columns={4}
    >
      {cases.map((c) => (
        <Card key={c.title} title={c.title} description={c.description} />
      ))}
    </GridSection>
  );
}
