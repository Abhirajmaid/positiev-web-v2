import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';

export function PageHeader({ title, subtitle, badge }) {
  return (
    <header className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-100">
      <Container>
        <div className="max-w-3xl">
          {badge && <span className="inline-block mb-4">{badge}</span>}
          <Heading as="h1" size="hero" className="mb-4">
            {title}
          </Heading>
          {subtitle && (
            <p className="text-base md:text-lg text-neutral-600">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </header>
  );
}
