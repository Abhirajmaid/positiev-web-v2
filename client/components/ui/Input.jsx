export function Input({
  label,
  name,
  type = 'text',
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
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
        {...props}
      />
    </div>
  );
}
