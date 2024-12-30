import { useTheme } from '../../../context/ThemeContext';

interface FormInputProps {
  id: string;
  name: string;
  type: string;
  value: string;
  label: string;
  error?: string;
  touched?: boolean;
  disabled?: boolean;
  maxLength?: number;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

export default function FormInput({
  id,
  name,
  type,
  value,
  label,
  error,
  touched,
  disabled,
  maxLength,
  required,
  onChange,
  onBlur
}: FormInputProps) {
  const { theme } = useTheme();

  const inputClasses = `w-full rounded-lg px-4 py-2 transition-all duration-300
    ${theme === 'dark'
      ? 'bg-gray-800/50 border border-gray-700 text-gray-300 focus:border-cyan-400'
      : 'bg-white border border-navy-200 text-navy-900 focus:border-navy-500'
    } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
      theme === 'dark' ? 'focus:ring-cyan-400/20' : 'focus:ring-navy-500/20'
    } ${error && touched ? 'border-red-500 dark:border-red-400' : ''}`;

  return (
    <div>
      <label htmlFor={id} className="block text-navy-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={inputClasses}
        required={required}
        maxLength={maxLength}
        disabled={disabled}
      />
      {error && touched && (
        <p className="mt-1 text-sm text-red-500 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}