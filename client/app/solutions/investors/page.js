import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { CTASection } from '@/components/layout/CTASection';

export const metadata = {
  title: 'Investors / NBFCs Solutions | Positiev',
  description: 'Structured products, IRR frameworks, and co-investment for investors.',
};

export default function InvestorsSolutionPage() {
  return (
    <>
      <PageHeader
        title="Investors / NBFCs"
        subtitle="Structured products, IRR frameworks, and co-investment opportunities."
      />
      <Section>
        <Container>
          <div className="max-w-3xl space-y-12">
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Distribution model
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Co-origination and structured finance for lease and infra assets.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Guaranteed ROI framework
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Risk-sharing and return structures aligned with NBFC and investor requirements.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Operating lease model
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Asset-backed lease portfolios with transparent servicing and collections.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                IRR structure
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Clear IRR and tenor options for debt and equity participants.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <CTASection
        title="Explore investment opportunities"
        primaryLabel="Investors"
        primaryHref="/investors"
        secondaryLabel="Contact"
        secondaryHref="/contact"
      />
    </>
  );
}
