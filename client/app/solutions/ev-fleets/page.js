import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { CTASection } from '@/components/layout/CTASection';

export const metadata = {
  title: 'EV Fleets Solutions | Positiev',
  description: 'Operating lease, uptime guarantee, and charging support for EV fleets.',
};

export default function EVFleetsSolutionPage() {
  return (
    <>
      <PageHeader
        title="EV Fleets"
        subtitle="Operating lease, uptime guarantee, and charging infrastructure support."
      />
      <Section>
        <Container>
          <div className="max-w-3xl space-y-12">
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Distribution model
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Direct fleet programs and channel partnerships for B2B EV adoption.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Guaranteed ROI framework
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Uptime and TCO guarantees backed by maintenance and charging infra.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Operating lease model
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Lease-to-own with full service, charging, and lifecycle management.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                IRR structure
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Clear cost per km and total cost of ownership for fleet operators.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <CTASection
        title="Apply for fleet leasing"
        primaryLabel="Fleet Leasing"
        primaryHref="/fleet-leasing"
        secondaryLabel="Contact"
        secondaryHref="/contact"
      />
    </>
  );
}
