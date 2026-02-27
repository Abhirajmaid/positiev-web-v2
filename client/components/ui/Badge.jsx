export function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-medium bg-neutral-100 text-neutral-700 rounded-full ${className}`}
    >
      {children}
    </span>
  );
}
