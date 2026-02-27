import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { ContactForms } from '@/components/sections/ContactForms';

export const metadata = {
  title: 'Contact | Positiev',
  description: 'Get in touch — franchise, fleet, OEM, or investor inquiries.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Choose your inquiry type and we will respond promptly."
      />
      <section className="py-20 lg:py-32">
        <Container>
          <Heading as="h2" size="section" className="mb-12">
            Inquiry forms
          </Heading>
          <ContactForms />
        </Container>
      </section>
    </>
  );
}
