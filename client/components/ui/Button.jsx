import Link from 'next/link';

const variants = {
  primary: 'bg-black text-white hover:bg-neutral-800 border-transparent',
  secondary: 'bg-transparent text-black border-2 border-black hover:bg-black hover:text-white',
  ghost: 'bg-transparent text-black border-transparent hover:bg-neutral-100',
};

function ButtonContent({ children }) {
  return (
    <span className="relative inline-flex h-[1.5em] items-center justify-center overflow-hidden">
      <span className="inline-flex min-w-0 items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute inset-x-0 top-0 inline-flex min-w-0 translate-y-full items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );
}

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
    'group relative inline-flex items-center justify-center overflow-hidden font-medium transition-colors rounded-full px-6 py-3 text-base md:text-lg ' +
    (variants[variant] || variants.primary) +
    (className ? ' ' + className : '');

  const content = <ButtonContent>{children}</ButtonContent>;

  if (href) {
    return (
      <Link href={href} className={base} {...props}>
        {content}
      </Link>
    );
  }

  const Comp = as;
  return (
    <Comp type={type} className={base} {...props}>
      {content}
    </Comp>
  );
}
