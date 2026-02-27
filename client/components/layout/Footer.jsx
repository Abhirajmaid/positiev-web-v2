import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const footerLinks = {
  Solutions: [
    { href: '/solutions/oem', label: 'OEM' },
    { href: '/solutions/dealers', label: 'Dealers' },
    { href: '/solutions/ev-fleets', label: 'EV Fleets' },
    { href: '/solutions/investors', label: 'Investors' },
  ],
  Company: [
    { href: '/about', label: 'About' },
    { href: '/franchise', label: 'Franchise' },
    { href: '/fleet-leasing', label: 'Fleet Leasing' },
    { href: '/investors', label: 'Investors' },
  ],
  Contact: [{ href: '/contact', label: 'Contact' }],
};

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-semibold block mb-4">
              Positiev
            </Link>
            <p className="text-neutral-400 text-base mb-6">
              Premium automotive mobility. Lease, infra, maintenance — integrated.
            </p>
            <div className="flex flex-col gap-3">
              <Button href="/franchise" variant="secondary" className="!border-white !text-white hover:!bg-white hover:!text-black">
                Become Franchise
              </Button>
              <Button href="/fleet-leasing" variant="ghost" className="!text-white hover:!bg-neutral-800">
                Fleet Leasing
              </Button>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-neutral-500 mb-4">
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-300 hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Positiev. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-neutral-400 hover:text-white text-sm">
              Privacy
            </Link>
            <Link href="/contact" className="text-neutral-400 hover:text-white text-sm">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
