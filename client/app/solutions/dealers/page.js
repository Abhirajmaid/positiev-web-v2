import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { CTASection } from '@/components/layout/CTASection';

export const metadata = {
  title: 'Dealers Solutions | Positiev',
  description: 'Retail, leasing, and certified network for dealers.',
};

export default function DealersSolutionPage() {
  return (
    <>
      <PageHeader
        title="Dealers"
        subtitle="Retail, leasing, and certified network expansion."
      />
      <Section>
        <Container>
          <div className="max-w-3xl space-y-12">
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Distribution model
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Certified dealer network with retail, leasing, and charging infra revenue streams.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Guaranteed ROI framework
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Clear economics for dealer partners with training and support.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Operating lease model
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Lease products and backend maintenance through our platform.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                IRR structure
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Transparent returns for dealer investments in franchise and infra.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <CTASection
        title="Join the dealer network"
        primaryLabel="Become a Franchise"
        primaryHref="/franchise"
        secondaryLabel="Contact"
        secondaryHref="/contact"
      />
    </>
  );
}
