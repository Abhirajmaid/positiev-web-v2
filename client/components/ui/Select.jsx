export function Select({
  label,
  name,
  options = [],
  placeholder,
  required,
  className = '',
  formTheme,
  ...props
}) {
  const isDark = formTheme === 'dark';
  const inputNeu = formTheme
    ? isDark
      ? 'form-neu-input-dark'
      : 'form-neu-input-light'
    : '';
  const labelCls = isDark
    ? 'block text-sm font-medium text-neutral-300 mb-1'
    : 'block text-sm font-medium text-neutral-700 mb-1';
  const selectClass = `w-full px-4 py-3 rounded-xl outline-none transition ${inputNeu ? 'appearance-none bg-no-repeat' : ''} ${inputNeu || 'border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white'}`;
  const selectStyle = formTheme && inputNeu
    ? {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${isDark ? '%239ca3af' : '%234b5563'}'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 0.75rem center',
        backgroundSize: '1.25rem',
        paddingRight: '2.5rem',
      }
    : undefined;

  return (
    <div className={className}>
      {label && (
        <label htmlFor={name} className={labelCls}>
          {label}
          {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        required={required}
        className={selectClass}
        style={selectStyle}
        {...props}
      >
        {placeholder && (
          <option value="">{placeholder}</option>
        )}
        {options.map((opt) =>
          typeof opt === 'string' ? (
            <option key={opt} value={opt}>{opt}</option>
          ) : (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          )
        )}
      </select>
    </div>
  );
}
