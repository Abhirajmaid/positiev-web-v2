'use client';

import { useState } from 'react';
import { ApplicationForm } from './ApplicationForm';

const TABS = [
  { id: 'franchise', label: 'Franchise' },
  { id: 'fleet', label: 'Fleet' },
  { id: 'oem', label: 'OEM' },
  { id: 'investors', label: 'Investors' },
];

export function ContactForms({ variant = 'default' }) {
  const [active, setActive] = useState('franchise');
  const isGlass = variant === 'glass';

  const useNeumorphic = isGlass;

  return (
    <div>
      <div className={`flex flex-wrap gap-3 mb-8 ${isGlass ? 'mb-6' : ''}`}>
        {TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`
                px-5 py-3 rounded-full font-medium
                transition-all duration-300 ease-out
                ${useNeumorphic
                  ? isActive
                    ? 'bg-neutral-200 text-neutral-900 neu-pill-pressed border border-neutral-300/50'
                    : 'bg-neutral-100 text-neutral-700 neu-pill-raised border border-neutral-200/80 hover:border-neutral-300/60'
                  : isActive
                    ? 'bg-black text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <ApplicationForm
        key={active}
        formType={active}
        variant={variant}
        title={`${TABS.find((t) => t.id === active)?.label} inquiry`}
        subtitle="Fill in your details and we will get back to you."
      />
    </div>
  );
}
