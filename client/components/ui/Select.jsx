export function Select({
  label,
  name,
  options = [],
  placeholder,
  required,
  className = '',
  ...props
}) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-neutral-700 mb-1">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        required={required}
        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition bg-white"
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
