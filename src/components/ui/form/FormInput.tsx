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
      ? 'bg-black-800/50 border border-black-600 text-silver-300 focus:border-accent-blue'
      : 'bg-black-700 border border-black-500 text-silver-400 focus:border-accent-blue'
    } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
      theme === 'dark' ? 'focus:ring-accent-blue/20' : 'focus:ring-accent-blue/20'
    } ${error && touched ? 'border-red-600 dark:border-red-500' : ''}`;

  return (
    <div>
      <label htmlFor={id} className={`block mb-2 ${
        theme === 'dark' ? 'text-silver-300' : 'text-silver-400'
      }`}>
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
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </div>
  );
}