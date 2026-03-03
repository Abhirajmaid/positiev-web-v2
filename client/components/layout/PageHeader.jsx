import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';

export function PageHeader({ title, subtitle, badge, className = '', subtitleClassName = '' }) {
  return (
    <header className={`py-20 lg:py-28 pt-32 lg:pt-40 bg-neutral-50 border-b border-neutral-100 ${className}`.trim()}>
      <Container>
        <div className="max-w-3xl">
          {badge && <span className="inline-block mb-4">{badge}</span>}
          <Heading as="h1" size="hero" className="mb-4">
            {title}
          </Heading>
          {subtitle && (
            <p className={`text-base md:text-lg text-neutral-600 ${subtitleClassName}`.trim()}>
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </header>
  );
}
