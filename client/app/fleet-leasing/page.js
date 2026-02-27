import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { UseCases } from '@/components/sections/UseCases';
import { ApplicationForm } from '@/components/sections/ApplicationForm';
import { CTASection } from '@/components/layout/CTASection';

export const metadata = {
  title: 'Fleet Leasing | Positiev',
  description: 'Operating lease to own, uptime guarantee, maintenance, and charging support for EV fleets.',
};

export default function FleetLeasingPage() {
  return (
    <>
      <PageHeader
        title="Fleet leasing"
        subtitle="Operating lease to own, uptime guarantee, and full backend support for your EV fleet."
      />
      <Section>
        <Container>
          <div className="max-w-3xl space-y-12">
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Operating lease to own model
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Pay-as-you-use with a path to ownership. We handle vehicle, maintenance, and charging so you focus on operations.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Uptime guarantee
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Contractual uptime commitments backed by our maintenance and replacement protocols.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Backend maintenance
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Full-service maintenance, repairs, and lifecycle management so your fleet stays on the road.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Charging infra support
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Charging planning, installation support, and managed charging for depot and route operations.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <UseCases />
      <div id="apply">
        <ApplicationForm
        title="Apply for fleet leasing"
        subtitle="Tell us about your fleet and we will propose a solution."
        formType="fleet"
        />
      </div>
      <CTASection
        title="Get your fleet on the road"
        primaryLabel="Apply for Fleet"
        primaryHref="#apply"
        secondaryLabel="Contact"
        secondaryHref="/contact"
      />
    </>
  );
}
