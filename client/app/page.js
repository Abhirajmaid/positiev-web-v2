import { Hero } from '@/components/sections/Hero';
import { WhoWeServe } from '@/components/sections/WhoWeServe';
import { WhoWeAre } from '@/components/sections/WhoWeAre';
import { OurUSP } from '@/components/sections/OurUSP';
import { EcosystemTogether } from '@/components/sections/EcosystemTogether';
import { CTASection } from '@/components/layout/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeServe />
      <WhoWeAre />
      <OurUSP />
      <EcosystemTogether />
      <CTASection />
    </>
  );
}
