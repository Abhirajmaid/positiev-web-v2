import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';

const nodes = [
  'OEM', 'Distribution', 'Dealers', 'Fleet Operators', 'Charging Infra', 'Maintenance', 'NBFCs', 'End Users',
];

export function Ecosystem() {
  return (
    <Section className="bg-neutral-50">
      <Container>
        <Heading as="h2" size="section" className="mb-12 text-center">
          The ecosystem
        </Heading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {nodes.map((label) => (
            <div
              key={label}
              className="p-6 rounded-xl bg-white border border-neutral-200 text-center font-medium animate-reveal"
            >
              {label}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
