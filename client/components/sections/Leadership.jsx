import { GridSection } from '@/components/layout/GridSection';

export function Leadership({ members = [] }) {
  const fallback = [
    { name: 'Leader One', role: 'CEO' },
    { name: 'Leader Two', role: 'COO' },
    { name: 'Leader Three', role: 'CFO' },
  ];
  const list = members.length ? members : fallback;

  return (
    <GridSection title="Leadership" subtitle="Meet the team driving mobility forward." columns={3}>
      {list.map((person) => (
        <div key={person.name} className="p-6 rounded-2xl border border-neutral-200 bg-white">
          <div className="w-20 h-20 rounded-full bg-neutral-200 mb-4" />
          <h3 className="text-xl font-semibold">{person.name}</h3>
          <p className="text-neutral-600">{person.role}</p>
        </div>
      ))}
    </GridSection>
  );
}
