import { AlertCircle } from 'lucide-react';

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
  placeholder?: string;
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
  placeholder,
  onChange,
  onBlur
}: FormInputProps) {
  const inputClasses = `w-full rounded-xl px-4 py-3 glass-effect border border-slate-600 text-slate-300 placeholder-slate-500 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300 ${
    error && touched ? 'border-electric-rose focus:border-electric-rose focus:ring-electric-rose/20' : ''
  } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block mb-2 text-slate-300 font-medium">
          {label}
        </label>
      )}
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
        placeholder={placeholder}
      />
      {error && touched && (
        <p className="mt-2 text-sm text-electric-rose flex items-center space-x-1">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}