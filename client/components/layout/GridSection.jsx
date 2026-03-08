import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';

export function GridSection({
  title,
  subtitle,
  children,
  columns = 3,
  className = '',
}) {
  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'md:grid-cols-3';

  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className="max-w-3xl mb-12 lg:mb-16">
            {title && (
              <Heading as="h2" size="section" className="mb-4">
                {title}
              </Heading>
            )}
            {subtitle && (
              <p className="text-base md:text-lg text-neutral-600">{subtitle}</p>
            )}
          </div>
        )}
        <div className={`grid grid-cols-1 gap-8 ${gridClass}`}>{children}</div>
      </Container>
    </Section>
  );
}
