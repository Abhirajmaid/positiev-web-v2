'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';

export function ApplicationForm({
  title = 'Apply now',
  subtitle,
  formType = 'franchise',
  onSubmit,
  variant = 'default',
}) {
  const [status, setStatus] = useState('idle');
  const isGlass = variant === 'glass';
  const isDark = isGlass; // always dark/black form when glass variant

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const formData = new FormData(e.target);
      const payload = Object.fromEntries(formData);
      if (onSubmit) await onSubmit(payload);
      else await fetch('/api/forms', { method: 'POST', body: JSON.stringify({ type: formType, ...payload }) });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const cardBase = isGlass
    ? `max-w-xl mx-auto rounded-2xl p-8 md:p-10 border transition-all duration-300 ${isDark ? 'form-neu-card-dark border-white/10' : 'form-neu-card-light border-neutral-200/60'}`
    : 'max-w-xl mx-auto';

  const titleCls = isDark ? 'text-neutral-100' : 'text-neutral-900';
  const subtitleCls = isDark ? 'text-neutral-400' : 'text-neutral-600';
  const successCls = isDark ? 'bg-emerald-900/40 text-emerald-200 border border-emerald-700/50' : 'bg-green-50 text-green-800';
  const errorCls = isDark ? 'bg-red-900/30 text-red-200 border border-red-700/50' : 'bg-red-50 text-red-800';

  const content = (
    <div className={cardBase}>
      <div className="mb-6">
        <Heading as="h2" size="section" className={`mb-2 ${titleCls}`}>
          {title}
        </Heading>
        {subtitle && <p className={`text-base md:text-lg mb-0 ${subtitleCls}`}>{subtitle}</p>}
      </div>

      {status === 'success' && (
        <p className={`mb-6 p-4 rounded-xl ${successCls}`}>Thank you. We will be in touch shortly.</p>
      )}
      {status === 'error' && (
        <p className={`mb-6 p-4 rounded-xl ${errorCls}`}>Something went wrong. Please try again.</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input formTheme={isGlass ? 'dark' : undefined} label="Full name" name="name" required />
        <Input formTheme={isGlass ? 'dark' : undefined} label="Email" name="email" type="email" required />
        <Input formTheme={isGlass ? 'dark' : undefined} label="Phone" name="phone" type="tel" />
        {formType === 'franchise' && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 [&>div]:min-w-0">
            <Input formTheme={isGlass ? 'dark' : undefined} label="City / Region" name="city" />
            <div className="min-w-0">
              <Select formTheme={isGlass ? 'dark' : undefined} label="Experience" name="experience" placeholder="Select" options={['Automotive', 'Fleet', 'Retail', 'Other']} />
            </div>
          </div>
        )}
        <Textarea formTheme={isGlass ? 'dark' : undefined} label="Message" name="message" />
        <Button type="submit" formTheme={isGlass ? 'dark' : undefined} disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : 'Submit'}
        </Button>
      </form>
    </div>
  );

  if (isGlass) {
    return (
      <div className="py-8 lg:py-12">
        <Container>
          {content}
        </Container>
      </div>
    );
  }

  return (
    <Section className="bg-neutral-50">
      <Container>
        {content}
      </Container>
    </Section>
  );
}
