import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  className = '',
}) {
  return (
    <section className={`py-20 lg:py-32 bg-black text-white ${className}`}>
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-base md:text-lg text-neutral-300 mb-8">{subtitle}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryLabel && primaryHref && (
              <Button
                href={primaryHref}
                variant="secondary"
                className="!border-white !text-white hover:!bg-white hover:!text-black"
              >
                {primaryLabel}
              </Button>
            )}
            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} variant="ghost" className="!text-white hover:!bg-neutral-800">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
