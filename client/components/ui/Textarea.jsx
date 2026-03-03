export function Textarea({
  label,
  name,
  placeholder,
  required,
  rows = 4,
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

  return (
    <div className={className}>
      {label && (
        <label htmlFor={name} className={labelCls}>
          {label}
          {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`w-full px-4 py-3 rounded-xl outline-none transition resize-y ${inputNeu || 'border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent'}`}
        {...props}
      />
    </div>
  );
}
