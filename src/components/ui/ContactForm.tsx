import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import FormInput from './form/FormInput';
import { FormData, FormStatus, FormErrors, FormTouched } from '../../types/form';
import { validateForm, sanitizeFormData } from '../../utils/formValidation';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [touched, setTouched] = useState<FormTouched>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const { theme } = useTheme();

  useEffect(() => {
    setErrors(validateForm(formData, touched));
  }, [formData, touched]);

  const getInputClasses = (hasError: boolean = false) => `
    w-full rounded-lg px-4 py-2 transition-all duration-300
    ${theme === 'dark'
      ? 'bg-black-800/50 border border-black-600 text-silver-300 focus:border-accent-blue'
      : 'bg-black-700 border border-black-500 text-silver-400 focus:border-accent-blue'
    } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
      theme === 'dark' ? 'focus:ring-accent-blue/20' : 'focus:ring-accent-blue/20'
    } ${hasError ? 'border-red-600 dark:border-red-500' : ''}`;

  const getButtonClasses = () => {
    const baseClasses = 'w-full rounded-lg px-6 py-3 flex items-center justify-center space-x-2 transition-all duration-300';
    
    if (status === 'sending') {
      return `${baseClasses} opacity-75 cursor-wait ${
        theme === 'dark'
          ? 'bg-black-700/30 border border-accent-blue/30 text-accent-blue'
          : 'bg-black-600 border border-accent-blue/40 text-accent-blue'
      }`;
    }
    return `${baseClasses} ${
      theme === 'dark'
        ? 'bg-black-700/30 border border-accent-blue/30 text-accent-blue hover:bg-black-700/50'
        : 'bg-black-600 border border-accent-blue/40 text-accent-blue hover:bg-black-500'
    }`;
  };

  const getButtonContent = () => {
    switch (status) {
      case 'sending':
        return (
          <>
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span>Sending...</span>
          </>
        );
      case 'success':
        return (
          <>
            <CheckCircle className="w-5 h-5 text-accent-emerald" />
            <span>Message Sent!</span>
          </>
        );
      case 'error':
        return (
          <>
            <AlertCircle className="w-5 h-5 text-red-500" />
            <span>Failed to Send</span>
          </>
        );
      default:
        return (
          <>
            <span>Send Message</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });
    
    const formErrors = validateForm(formData, { name: true, email: true, subject: true, message: true });
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const apiKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!apiKey) {
      console.error('Web3Forms API key is not configured');
      setStatus('error');
      return;
    }
    
    setStatus('sending');

    try {
      const payload = {
        access_key: apiKey,
        ...sanitizeFormData(formData),
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({});
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value.slice(0, name === 'message' ? 1000 : 100)
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormInput
        id="name"
        name="name"
        type="text"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        onBlur={() => handleBlur('name')}
        error={errors.name}
        touched={touched.name}
        required
        maxLength={100}
        disabled={status === 'sending'}
      />
      <FormInput
        id="email"
        name="email"
        type="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        onBlur={() => handleBlur('email')}
        error={errors.email}
        touched={touched.email}
        required
        maxLength={100}
        disabled={status === 'sending'}
      />
      <FormInput
        id="subject"
        name="subject"
        type="text"
        label="Subject"
        value={formData.subject}
        onChange={handleChange}
        onBlur={() => handleBlur('subject')}
        error={errors.subject}
        touched={touched.subject}
        required
        maxLength={100}
        disabled={status === 'sending'}
      />
      <div>
        <label htmlFor="message" className={`block mb-2 ${
          theme === 'dark' ? 'text-silver-300' : 'text-silver-400'
        }`}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleBlur('message')}
          rows={5}
          className={`${getInputClasses(!!errors.message && touched.message)} resize-none`}
          required
          maxLength={1000}
          disabled={status === 'sending'}
        />
        {errors.message && touched.message && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.message}</p>
        )}
        <div className="mt-1 text-sm text-silver-500">
          {formData.message.length}/1000 characters
        </div>
      </div>

      <button
        type="submit"
        className={getButtonClasses()}
        disabled={status === 'sending' || Object.keys(errors).length > 0}
      >
        {getButtonContent()}
      </button>
    </form>
  );
}