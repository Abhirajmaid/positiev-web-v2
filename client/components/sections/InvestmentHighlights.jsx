import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';

export function InvestmentHighlights({ items = [] }) {
  const fallback = [
    'Guaranteed ROI frameworks',
    'Operating lease expertise',
    'Charging infra upside',
    'Scalable distribution',
  ];
  const list = items.length ? items : fallback;

  return (
    <section className="py-20 lg:py-32 bg-neutral-50">
      <Container>
        <Heading as="h2" size="section" className="mb-12">
          Investment highlights
        </Heading>
        <ul className="grid md:grid-cols-2 gap-4 max-w-3xl">
          {list.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-black" />
              <span className="text-base md:text-lg text-neutral-700">{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
