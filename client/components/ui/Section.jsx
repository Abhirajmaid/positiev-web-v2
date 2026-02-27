export function Section({
  children,
  className = '',
  as = 'section',
  id,
}) {
  const Comp = as;
  return (
    <Comp
      id={id}
      className={`py-20 lg:py-32 ${className}`}
    >
      {children}
    </Comp>
  );
}
