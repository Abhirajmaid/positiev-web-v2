import { Hero } from '@/components/sections/Hero';
import { SlideGallery } from '@/components/sections/SlideGallery.jsx';
import { BrandCarousel } from '@/components/sections/BrandCarousel';
import { WhoWeServe } from '@/components/sections/WhoWeServe';
import { IntegratedModel } from '@/components/sections/IntegratedModel';
import { Testimonials } from '@/components/sections/Testimonials';
// import { PartnerLogos } from '@/components/sections/PartnerLogos';
import { CTASection } from '@/components/layout/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SlideGallery />
      <BrandCarousel />
      <WhoWeServe />
      <IntegratedModel />
      <Testimonials />
      {/* <PartnerLogos /> */}
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
