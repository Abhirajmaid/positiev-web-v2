import { Saira } from 'next/font/google';
import '@fontsource/sansation/300.css';
import '@fontsource/sansation/400.css';
import '@fontsource/sansation/700.css';
import '@/styles/globals.css';
import { AppShell } from '@/components/layout/AppShell';

const saira = Saira({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-saira',
  display: 'swap',
});

export const metadata = {
  title: 'Positiev | Premium Automotive Mobility',
  description:
    'Integrated lease, charging infrastructure, and maintenance for OEMs, dealers, EV fleets, and investors.',
  openGraph: {
    title: 'Positiev | Premium Automotive Mobility',
    description:
      'Integrated lease, charging infrastructure, and maintenance for OEMs, dealers, EV fleets, and investors.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={saira.variable}>
      <body className={`${saira.className} antialiased`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
