'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const SUBJECT_OPTIONS = [
  { id: 'business', value: 'business', label: 'Business Inquiries' },
  { id: 'partnership', value: 'partnership', label: 'Partnership' },
  { id: 'franchise', value: 'franchise', label: 'Franchise & Dealer Network' },
];

const socialLinks = [
  { href: '#', label: 'Twitter', icon: 'twitter' },
  { href: '#', label: 'Instagram', icon: 'instagram' },
  { href: '#', label: 'Discord', icon: 'discord' },
];

function SocialIcon({ icon }) {
  const size = 'h-4 w-4';
  if (icon === 'twitter') {
    return (
      <svg viewBox="0 0 24 24" className={`${size} shrink-0`} fill="currentColor" aria-hidden>
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    );
  }
  if (icon === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" className={`${size} shrink-0`} fill="currentColor" aria-hidden>
        <path d="M16.5 3h-9A4.5 4.5 0 0 0 3 7.5v9A4.5 4.5 0 0 0 7.5 21h9a4.5 4.5 0 0 0 4.5-4.5v-9A4.5 4.5 0 0 0 16.5 3Zm2.7 13.5a2.7 2.7 0 0 1-2.7 2.7h-9a2.7 2.7 0 0 1-2.7-2.7v-9a2.7 2.7 0 0 1 2.7-2.7h9a2.7 2.7 0 0 1 2.7 2.7v9Z" />
        <path d="M12 7.8A4.2 4.2 0 1 0 16.2 12 4.2 4.2 0 0 0 12 7.8Zm0 6.6A2.4 2.4 0 1 1 14.4 12 2.4 2.4 0 0 1 12 14.4Z" />
        <circle cx="16.9" cy="7.1" r="1" />
      </svg>
    );
  }
  if (icon === 'discord') {
    return (
      <svg viewBox="0 0 24 24" className={`${size} shrink-0`} fill="currentColor" aria-hidden>
        <path d="M20.3 4.4c-1.9-1.4-4-2.4-6.2-3C13.4 1.1 12.7 1 12 1s-1.4.1-2.1.4c-2.2.6-4.3 1.6-6.2 3C2.5 7 1 11 1 15c0 1.2.2 2.4.6 3.5 1.5.3 3 .8 4.4 1.2.4-.5.8-1 1.1-1.6.2-.3.4-.7.5-1.1-.3-.2-.6-.4-.9-.6-.1-.1-.2-.2-.3-.3.2 0 .3.1.5.1h.1c2.1.4 4.3.6 6.5.6s4.4-.2 6.5-.6h.1c.2 0 .3-.1.5-.1-.1.1-.2.2-.3.3-.3.2-.6.4-.9.6.1.4.3.8.5 1.1.4.6.7 1.1 1.1 1.6 1.4-.4 2.9-.9 4.4-1.2.4-1.1.6-2.3.6-3.5 0-4-1.5-8-3.7-10.6zM8 13c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
      </svg>
    );
  }
  return null;
}

export function ContactCardSection() {
  const [subject, setSubject] = useState('business');

  return (
    <Section className="bg-[#f3f3f3] py-16 lg:py-24">
      <Container>
        <div className="relative">
          {/* White panel: fully rounded on all sides */}
          <div className="rounded-[2.25rem] bg-white shadow-xl lg:rounded-[2.5rem] lg:px-12 lg:py-10 lg:pl-[30rem]">
            <div className="p-8 sm:p-10 lg:p-0">
              <form
                className="flex flex-col gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1 block font-sans text-xl font-medium text-neutral-700">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="w-full border-0 border-b border-neutral-300 bg-transparent py-2 font-sans text-neutral-900 outline-none focus:border-neutral-900"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1 block font-sans text-xl font-medium text-neutral-700">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      className="w-full border-0 border-b border-neutral-300 bg-transparent py-2 font-sans text-neutral-900 outline-none focus:border-neutral-900"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1 block font-sans text-xl font-medium text-neutral-700">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full border-0 border-b border-neutral-300 bg-transparent py-2 font-sans text-neutral-900 outline-none focus:border-neutral-900"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block font-sans text-xl font-medium text-neutral-700">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full border-0 border-b border-neutral-300 bg-transparent py-2 font-sans text-neutral-900 outline-none focus:border-neutral-900"
                      placeholder=""
                    />
                  </div>
                </div>

                <div>
                  <p className="mb-3 font-sans text-xl font-bold text-neutral-900">Select Subject?</p>
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    {SUBJECT_OPTIONS.map((opt) => (
                      <label
                        key={opt.id}
                        className="flex cursor-pointer items-center gap-2 font-sans text-sm text-neutral-700"
                      >
                        <input
                          type="radio"
                          name="subject"
                          value={opt.value}
                          checked={subject === opt.value}
                          onChange={() => setSubject(opt.value)}
                          className="h-4 w-4 border-neutral-300 text-[#0C3560] focus:ring-[#0C3560]"
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block font-sans text-xl font-medium text-neutral-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full border-0 border-b border-neutral-300 bg-transparent py-2 font-sans text-neutral-900 outline-none focus:border-neutral-900 resize-y"
                    placeholder=""
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="rounded-full bg-neutral-900 px-10 py-3 font-sans text-sm font-semibold text-white transition hover:bg-neutral-800"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Black card: slightly raised and narrower so full frame is visible */}
          <div className="mt-6 lg:mt-0 lg:absolute lg:left-4 lg:top-[-1rem] lg:w-[26rem]">
            <div className="relative min-h-[320px] overflow-hidden rounded-[2.25rem] bg-[#1a1a1a] lg:min-h-[580px]">
              <Image
                src="/Frame.png"
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 416px"
              />
              <div className="absolute inset-0 bg-[#0a0a0a]/65" aria-hidden />
              <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-10">
                <div>
                  <h2 className="font-sansation text-2xl font-bold text-white sm:text-3xl">
                    Contact Information
                  </h2>
                  <p className="mt-2 font-sans text-sm text-white/80 sm:text-base">
                    Our sales team will reach you shortly
                  </p>
                  <ul className="mt-14 space-y-5 ">
                    <li className="flex items-center gap-3 font-sans text-white">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center text-white/90" aria-hidden>
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </span>
                      +91 00000 00000
                    </li>
                    <li className="flex items-center gap-3 font-sans text-white">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center text-white/90" aria-hidden>
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </span>
                      demo@gmail.com
                    </li>
                    <li className="flex items-center gap-3 font-sans text-white">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center text-white/90" aria-hidden>
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </span>
                      Address
                    </li>
                  </ul>
                </div>
                <div className="mt-36 flex gap-3">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white text-[#0F6E84] shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition hover:scale-105"
                    >
                      <SocialIcon icon={link.icon} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

