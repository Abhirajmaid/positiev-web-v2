import Link from 'next/link';

export function Card({
  title,
  description,
  href,
  children,
  className = '',
}) {
  const content = (
    <>
      {title && <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>}
      {description && <p className="text-base md:text-lg text-neutral-600">{description}</p>}
      {children}
    </>
  );

  const baseClass =
    'block p-6 lg:p-8 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 transition ' +
    className;

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {content}
      </Link>
    );
  }

  return <div className={baseClass}>{content}</div>;
}
