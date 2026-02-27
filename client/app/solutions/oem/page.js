import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/layout/CTASection';

export const metadata = {
  title: 'OEM Solutions | Positiev',
  description: 'Distribution model, guaranteed ROI, operating lease, and IRR for OEM partners.',
};

export default function OEMSolutionPage() {
  return (
    <>
      <PageHeader
        title="OEM"
        subtitle="Distribution, fleet programs, and charging infrastructure partnerships."
      />
      <Section>
        <Container>
          <div className="max-w-3xl space-y-12">
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Distribution model
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Direct and dealer-assisted distribution with integrated lease and infra offerings for fleet and retail.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Guaranteed ROI framework
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Structured programs with clear volume and margin commitments, backed by our operating lease and maintenance stack.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Operating lease model
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Full-service operating lease with uptime guarantee, charging support, and lifecycle management.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                IRR structure
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Transparent IRR and payback metrics for OEM and channel partners.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <CTASection
        title="Become an OEM partner"
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Solutions overview"
        secondaryHref="/solutions"
      />
    </>
  );
}
