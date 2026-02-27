export function Heading({
  as = 'h2',
  size = 'section',
  children,
  className = '',
}) {
  const Comp = as;
  const sizes = {
    hero: 'text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight',
    section: 'text-3xl md:text-5xl font-semibold',
    card: 'text-xl md:text-2xl font-semibold',
    small: 'text-lg font-semibold',
  };
  return (
    <Comp className={`${sizes[size] || sizes.section} ${className}`}>
      {children}
    </Comp>
  );
}
