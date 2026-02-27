'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
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
}) {
  const [status, setStatus] = useState('idle');

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

  return (
    <section className="py-20 lg:py-32 bg-neutral-50">
      <Container>
        <div className="max-w-xl mx-auto">
          <Heading as="h2" size="section" className="mb-4">
            {title}
          </Heading>
          {subtitle && <p className="text-neutral-600 mb-8">{subtitle}</p>}

          {status === 'success' && (
            <p className="mb-6 p-4 rounded-lg bg-green-50 text-green-800">Thank you. We will be in touch shortly.</p>
          )}
          {status === 'error' && (
            <p className="mb-6 p-4 rounded-lg bg-red-50 text-red-800">Something went wrong. Please try again.</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input label="Full name" name="name" required />
            <Input label="Email" name="email" type="email" required />
            <Input label="Phone" name="phone" type="tel" />
            {formType === 'franchise' && (
              <>
                <Input label="City / Region" name="city" />
                <Select label="Experience" name="experience" placeholder="Select" options={['Automotive', 'Fleet', 'Retail', 'Other']} />
              </>
            )}
            <Textarea label="Message" name="message" />
            <Button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending…' : 'Submit'}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
