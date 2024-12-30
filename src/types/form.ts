export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea';
  maxLength: number;
  required?: boolean;
  rows?: number;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';
export type FormErrors = Partial<Record<keyof FormData, string>>;
export type FormTouched = Partial<Record<keyof FormData, boolean>>;