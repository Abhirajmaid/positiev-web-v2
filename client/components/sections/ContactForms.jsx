'use client';

import { useState } from 'react';
import { ApplicationForm } from './ApplicationForm';

const TABS = [
  { id: 'franchise', label: 'Franchise' },
  { id: 'fleet', label: 'Fleet' },
  { id: 'oem', label: 'OEM' },
  { id: 'investors', label: 'Investors' },
];

export function ContactForms() {
  const [active, setActive] = useState('franchise');

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              active === tab.id
                ? 'bg-black text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <ApplicationForm
        key={active}
        formType={active}
        title={`${TABS.find((t) => t.id === active)?.label} inquiry`}
        subtitle="Fill in your details and we will get back to you."
      />
    </div>
  );
}
