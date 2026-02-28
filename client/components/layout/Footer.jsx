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
    <footer className="bg-neutral-100 text-neutral-700">
      <Container>
        {/* Top: brand | link columns | CTAs */}
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block text-xl font-semibold text-neutral-900">
              Positiev
            </Link>
            <p className="mt-2 max-w-xs text-sm text-neutral-500">
              Premium automotive mobility. Lease, infra, maintenance — integrated.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-3 gap-6 lg:col-span-5 lg:col-start-5">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {group}
                </h4>
                <ul className="mt-3 space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-600 hover:text-neutral-900"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTAs — flex col, full-width buttons so text doesn’t wrap */}
          <div className="flex flex-col gap-3 lg:col-span-3 lg:col-start-10 lg:max-w-[240px]">
            <Button href="/franchise" variant="secondary" className="w-full min-w-[200px] whitespace-nowrap">
              Become Franchise
            </Button>
            <Button
              href="/fleet-leasing"
              variant="ghost"
              className="w-full min-w-[200px] text-left text-neutral-700 hover:bg-neutral-200"
            >
              Fleet Leasing
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-3 border-t border-neutral-200 py-6 text-sm text-neutral-500 sm:flex-row sm:justify-between sm:gap-4">
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
          <p className="text-center">Proudly based in Frankfurt, Germany</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-neutral-700">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-neutral-700">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
