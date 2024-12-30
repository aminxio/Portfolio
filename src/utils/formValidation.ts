import { FormData, FormErrors } from '../types/form';

export const validateField = (name: keyof FormData, value: string): string | null => {
  if (!value.trim()) {
    return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
  }

  if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return 'Invalid email format';
  }

  return null;
};

export const validateForm = (data: FormData, touched: Partial<Record<keyof FormData, boolean>>): FormErrors => {
  const errors: FormErrors = {};
  
  (Object.keys(data) as Array<keyof FormData>).forEach(field => {
    if (touched[field]) {
      const error = validateField(field, data[field]);
      if (error) errors[field] = error;
    }
  });

  return errors;
};

export const sanitizeFormData = (data: FormData): FormData => {
  const sanitized = {} as FormData;
  
  (Object.keys(data) as Array<keyof FormData>).forEach(key => {
    sanitized[key] = data[key].trim().replace(/<[^>]*>/g, '');
  });

  return sanitized;
};