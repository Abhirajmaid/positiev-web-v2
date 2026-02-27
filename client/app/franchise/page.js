import { PageHeader } from '@/components/layout/PageHeader';
import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { RevenueStreams } from '@/components/sections/RevenueStreams';
import { ApplicationForm } from '@/components/sections/ApplicationForm';
import { CTASection } from '@/components/layout/CTASection';

export const metadata = {
  title: 'Franchise (DLF) | Positiev',
  description: 'Dealer franchise opportunity: retail, leasing, rentals, charging infra. Investment and revenue streams.',
};

export default function FranchisePage() {
  return (
    <>
      <PageHeader
        title="Dealer franchise (DLF)"
        subtitle="Own and operate a Positiev franchise — retail, leasing, rentals, and charging infrastructure."
        badge={<Badge>High conversion</Badge>}
      />
      <Section>
        <Container>
          <div className="max-w-3xl space-y-12">
            <div>
              <Heading as="h2" size="section" className="mb-4">
                What is DLF
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                DLF (Dealer Franchise) is our certified partner program. You run retail, leasing, rentals, and charging infra under our brand and systems with training and backend support.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Investment required
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Contact us for territory-specific investment details, capex, and working capital requirements.
              </p>
              <Button href="#apply" variant="primary" className="mt-4">
                Get investment details
              </Button>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Why now
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                EV adoption and fleet electrification are accelerating. Early franchise partners capture retail, leasing, and charging revenue in high-growth markets.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <RevenueStreams />
      <div id="apply">
        <ApplicationForm
          title="Apply for franchise"
          subtitle="Submit your details and we will get back with next steps."
          formType="franchise"
        />
      </div>
      <CTASection
        title="Ready to become a franchise?"
        primaryLabel="Apply now"
        primaryHref="#apply"
        secondaryLabel="Contact"
        secondaryHref="/contact"
      />
    </>
  );
}
