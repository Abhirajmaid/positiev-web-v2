import { GridSection } from '@/components/layout/GridSection';
import { Card } from '@/components/ui/Card';

const streams = [
  { title: 'Retail', description: 'Vehicle sales and retail financing through franchise network.' },
  { title: 'Leasing', description: 'Operating lease and lease-to-own for fleets and corporates.' },
  { title: 'Rentals', description: 'Short-term and long-term rental revenue streams.' },
  { title: 'Charging Infra', description: 'EV charging infrastructure deployment and usage fees.' },
];

export function RevenueStreams() {
  return (
    <GridSection
      title="Revenue streams"
      subtitle="Multiple income channels for franchise and partner growth."
      columns={4}
    >
      {streams.map((s) => (
        <Card key={s.title} title={s.title} description={s.description} />
      ))}
    </GridSection>
  );
}
