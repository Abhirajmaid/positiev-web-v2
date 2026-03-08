/**
 * Reusable wide container for page/section content.
 * Centers content with consistent horizontal padding.
 */
export function Container({ children, className = '', wide = true }) {
  const maxWidthClass = wide ? 'max-w-[90rem]' : 'max-w-7xl';
  return (
    <div className={`${maxWidthClass} mx-auto px-6 lg:px-10  ${className}`.trim()}>
      {children}
    </div>
  );
}
