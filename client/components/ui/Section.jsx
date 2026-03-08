import { forwardRef } from 'react';

/**
 * Reusable section wrapper with consistent vertical padding.
 * Renders as <section> by default; pass `as` to use a different element.
 */
export const Section = forwardRef(function Section(
  { children, className = '', as: Comp = 'section', id },
  ref
) {
  return (
    <Comp
      ref={ref}
      id={id}
      className={`py-20 lg:py-32 ${className}`.trim()}
    >
      {children}
    </Comp>
  );
});
