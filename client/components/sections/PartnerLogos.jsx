'use client';

import { Icon } from '@iconify/react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { LogoStrip } from '@/components/ui/LogoStrip';

const iconClass = 'w-8 h-8 md:w-10 md:h-10 text-neutral-500';

const vehicleIcons = [
  <Icon key="scooter" icon="hugeicons:scooter-01" className={iconClass} aria-hidden />,
  <Icon key="bike" icon="hugeicons:motorbike-02" className={iconClass} aria-hidden />,
  <Icon key="car" icon="glyphs:car-side-duo" className={iconClass} aria-hidden />,
  <Icon key="erickshaw" icon="material-symbols:electric-rickshaw" className={iconClass} aria-hidden />,
];

export function PartnerLogos({ logos, title = 'What you want..' }) {
  const list = logos?.length ? logos : vehicleIcons;

  return (
    <Section>
      <Container>
        <LogoStrip logos={list} title={title} />
      </Container>
    </Section>
  );
}
