import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { ContactForms } from '@/components/sections/ContactForms';
import { ContactPageBackground } from './ContactPageBackground';

export const metadata = {
  title: 'Contact | Positiev',
  description: 'Get in touch — franchise, fleet, OEM, or investor inquiries.',
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <ContactPageBackground />
      <PageHeader
        title="Let’s Connect"
        subtitle="Connect with our experts to explore custom EV infrastructure solutions for your dealership."
        className="bg-transparent border-transparent text-white"
        subtitleClassName="text-white"
      />
      <section className="py-12 lg:py-20 transition-all duration-500">
        <Container>
          <Heading as="h2" size="section" className="mb-10 text-white">
            Inquiry forms
          </Heading>
          <ContactForms variant="glass" />
        </Container>
      </section>
    </div>
  );
}
