import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { LogoStrip } from '@/components/ui/LogoStrip';

export function PartnerLogos({ logos = [], title = 'Trusted by industry leaders' }) {
  const fallbackLogos = ['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5'];
  const list = logos.length ? logos : fallbackLogos;

  return (
    <Section>
      <Container>
        <LogoStrip logos={list} title={title} />
      </Container>
    </Section>
  );
}
