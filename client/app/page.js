import { Hero } from '@/components/hero/Hero';
import { WhoWeServe } from '@/components/sections/WhoWeServe';
import { IntegratedModel } from '@/components/sections/IntegratedModel';
import { Ecosystem } from '@/components/sections/Ecosystem';
import { PartnerLogos } from '@/components/sections/PartnerLogos';
import { CTASection } from '@/components/layout/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeServe />
      <IntegratedModel />
      <Ecosystem />
      <PartnerLogos />
      <CTASection
        title="Ready to transform your mobility business?"
        subtitle="Join OEMs, dealers, and fleets already partnering with us."
        primaryLabel="Become a Franchise"
        primaryHref="/franchise"
        secondaryLabel="Apply for Fleet Leasing"
        secondaryHref="/fleet-leasing"
      />
    </>
  );
}
