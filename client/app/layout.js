import { Poppins } from 'next/font/google';
import '@/styles/globals.css';
import { AppShell } from '@/components/layout/AppShell';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
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
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} antialiased`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
