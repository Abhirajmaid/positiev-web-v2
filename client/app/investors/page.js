import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { InvestmentHighlights } from '@/components/sections/InvestmentHighlights';
import { CTASection } from '@/components/layout/CTASection';

export const metadata = {
  title: 'Investors | Positiev',
  description: 'Funding ask, use of funds, growth roadmap, milestones, and financial projections.',
};

export default function InvestorsPage() {
  return (
    <>
      <PageHeader
        title="Investors"
        subtitle="Funding, growth roadmap, milestones, and how we deploy capital."
      />
      <Section>
        <Container>
          <div className="max-w-3xl space-y-12">
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Funding ask
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                We are raising growth capital to scale franchise network, fleet leasing book, and charging infrastructure. Contact us for the current round details.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Use of funds
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Deployment into franchise expansion, fleet asset financing, charging infra rollout, and technology.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Growth roadmap
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Geographic and segment expansion with clear milestones and unit economics.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Milestones
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Track record and upcoming milestones available in the pitch deck.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Financial projections
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Revenue, margin, and scale assumptions included in investor materials.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="#" variant="primary">
                Download pitch deck
              </Button>
              <Button href="/contact" variant="secondary">
                Book meeting
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      <InvestmentHighlights />
      <CTASection
        title="Ready to invest?"
        primaryLabel="Download Pitch Deck"
        primaryHref="#"
        secondaryLabel="Book Meeting"
        secondaryHref="/contact"
      />
    </>
  );
}
