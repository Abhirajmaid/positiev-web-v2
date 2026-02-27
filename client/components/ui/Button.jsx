import Link from 'next/link';

const variants = {
  primary: 'bg-black text-white hover:bg-neutral-800 border-transparent',
  secondary: 'bg-transparent text-black border-2 border-black hover:bg-black hover:text-white',
  ghost: 'bg-transparent text-black border-transparent hover:bg-neutral-100',
};

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  rounded = true,
  as = 'button',
  type = 'button',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-medium transition-colors rounded-full px-6 py-3 text-base md:text-lg ' +
    (variants[variant] || variants.primary) +
    (className ? ' ' + className : '');

  if (href) {
    return (
      <Link href={href} className={base} {...props}>
        {children}
      </Link>
    );
  }

  const Comp = as;
  return (
    <Comp type={type} className={base} {...props}>
      {children}
    </Comp>
  );
}
