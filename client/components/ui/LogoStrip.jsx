export function LogoStrip({ logos = [], title, className = '' }) {
  if (!logos.length) return null;
  return (
    <div className={`overflow-hidden ${className}`}>
      {title && (
        <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6 text-center">
          {title}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="h-8 md:h-10 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition flex items-center"
          >
            {typeof logo === 'string' ? (
              <span className="text-lg font-semibold text-neutral-600">{logo}</span>
            ) : (
              logo
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
