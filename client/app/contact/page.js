import { ContactHero } from './ContactHero';
import { ContactOpportunities } from '@/components/sections/ContactOpportunities';
import { ContactCardSection } from '@/components/sections/ContactCardSection';
import { EcosystemTogether } from '@/components/sections/EcosystemTogether';
import { CTASection } from '@/components/layout/CTASection';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'Contact | Positiev',
  description: 'Get in touch — franchise, fleet, OEM, or investor inquiries.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactOpportunities />
      <ContactCardSection />
      <EcosystemTogether />
      <CTASection />
      <Footer />
    </>
  );
}
