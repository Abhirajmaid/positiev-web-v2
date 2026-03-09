'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { EcosystemTogether } from '@/components/sections/EcosystemTogether';
import { CTASection } from '@/components/layout/CTASection';
import { Footer } from '@/components/layout/Footer';

export function AppShell({ children }) {
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';
  const isContactPage = pathname === '/contact';

  return (
    <>
      <Navbar />
      <main>{children}</main>
      {!isAboutPage && !isContactPage && <Footer />}
      {isAboutPage && (
        <>
          <EcosystemTogether />
          <CTASection />
          <Footer />
        </>
      )}
    </>
  );
}
