import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Leadership } from '@/components/sections/Leadership';
import { CTASection } from '@/components/layout/CTASection';

export const metadata = {
  title: 'About | Positiev',
  description: 'Our vision, the problem we solve, and how MDL positions in premium automotive mobility.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About us"
        subtitle="Vision, problem we solve, and how we position in the mobility ecosystem."
      />
      <Section>
        <Container>
          <div className="max-w-3xl space-y-16">
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Vision
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                To be the integrated partner for OEMs, dealers, and EV fleets — combining lease, charging infrastructure, and maintenance under one roof.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                Problem we solve
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                Fragmented offerings across lease, charging, and service create complexity and risk. We unify distribution, infra, and lifecycle support for predictable outcomes.
              </p>
            </div>
            <div>
              <Heading as="h2" size="section" className="mb-4">
                MDL positioning
              </Heading>
              <p className="text-base md:text-lg text-neutral-600">
                We sit at the intersection of vehicle distribution, EV infrastructure, and fleet operations — enabling guaranteed ROI frameworks and scalable growth for partners.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <Leadership />
      <CTASection
        title="Partner with us"
        primaryLabel="Become a Franchise"
        primaryHref="/franchise"
        secondaryLabel="Contact"
        secondaryHref="/contact"
      />
    </>
  );
}
