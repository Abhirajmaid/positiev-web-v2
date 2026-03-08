import Image from 'next/image';
import Link from 'next/link';

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About us' },
  { href: '/solutions', label: 'Solution' },
  { href: '/contact', label: 'Contact Us' },
];

const companyLinks = [
  { href: '/resources', label: 'Resources' },
  { href: '/how-we-work', label: 'How we work' },
];

const socialLinks = [
  {
    href: '#',
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M13.5 21v-8h2.7l.5-3h-3.2V8.2c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.2V10H8v3h2.7v8h2.8Z" />
      </svg>
    ),
  },
  {
    href: '#',
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M16.5 3h-9A4.5 4.5 0 0 0 3 7.5v9A4.5 4.5 0 0 0 7.5 21h9a4.5 4.5 0 0 0 4.5-4.5v-9A4.5 4.5 0 0 0 16.5 3Zm2.7 13.5a2.7 2.7 0 0 1-2.7 2.7h-9a2.7 2.7 0 0 1-2.7-2.7v-9a2.7 2.7 0 0 1 2.7-2.7h9a2.7 2.7 0 0 1 2.7 2.7v9Z" />
        <path d="M12 7.8A4.2 4.2 0 1 0 16.2 12 4.2 4.2 0 0 0 12 7.8Zm0 6.6A2.4 2.4 0 1 1 14.4 12 2.4 2.4 0 0 1 12 14.4Z" />
        <circle cx="16.9" cy="7.1" r="1" />
      </svg>
    ),
  },
  {
    href: '#',
    label: 'YouTube',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M21.4 7.2a2.9 2.9 0 0 0-2-2c-1.8-.5-7.4-.5-7.4-.5s-5.6 0-7.4.5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 2 12a30 30 0 0 0 .6 4.8 2.9 2.9 0 0 0 2 2c1.8.5 7.4.5 7.4.5s5.6 0 7.4-.5a2.9 2.9 0 0 0 2-2A30 30 0 0 0 22 12a30 30 0 0 0-.6-4.8ZM10 15.4V8.6L16 12l-6 3.4Z" />
      </svg>
    ),
  },
  {
    href: '#',
    label: 'Twitter',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M18.9 3H22l-6.8 7.8L23 21h-6.1l-4.8-6.3L6.6 21H3.5l7.3-8.4L1.3 3h6.2l4.4 5.8L18.9 3Zm-1.1 16h1.7L6.6 4.9H4.7L17.8 19Z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="relative w-full">
      <div className="relative bg-gradient-to-r from-[#1a1a1a] via-[#111111] to-[#000000] pb-16 pt-32">
        <div className="hidden md:block absolute left-0 top-0 z-20 h-[120px] w-[550px] rounded-br-[80px] bg-[#f3f3f3] shadow-lg">
          <span
            aria-hidden
            className="pointer-events-none absolute -right-4 rounded-b-xl top-0 h-full w-20 skew-x-[-45deg] bg-[#f3f3f3]"
          />
          <div className="relative z-10 flex h-full items-center pl-8 sm:pl-12">
            <Image src="/logo_2.png" alt="PositiEV" width={470} height={176} priority className="h-auto w-[170px] sm:w-[350px] mb-16" />
          </div>
        </div>

        <div className="mx-auto grid max-w-[95%] grid-cols-1 gap-32 px-6 text-center lg:grid-cols-3 lg:px-16 lg:text-left">
          <div className="footer-col">
            <p className="mx-auto mt-12 max-w-sm text-lg leading-relaxed text-gray-400 lg:mx-0">
              Powering the future of electric mobility through integrated EV leasing, infrastructure, and fleet
              solutions.
            </p>

            <h4 className="mt-10 text-xl font-medium text-white">Connect With US</h4>
            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-500 text-gray-300 transition hover:bg-white hover:text-black"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-col mt-4 lg:col-span-2 lg:-mt-16 ml-0 md:ml-16  ">
            <h4 className="text-2xl font-medium text-white">Navigation</h4>
            <ul className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-4 lg:justify-start">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="cursor-pointer text-xl text-gray-400 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="mt-10 text-2xl font-medium text-white">Company</h4>
            <ul className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-4 lg:justify-start">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="cursor-pointer text-xl text-gray-400 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
