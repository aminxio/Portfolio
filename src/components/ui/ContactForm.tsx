import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle, User, AtSign, MessageCircle, Lightbulb } from 'lucide-react';
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

  useEffect(() => {
    setErrors(validateForm(formData, touched));
  }, [formData, touched]);



  const getButtonClasses = () => {
    const baseClasses = 'w-full rounded-xl px-6 py-4 flex items-center justify-center space-x-2 transition-all duration-300 glass-effect font-semibold';
    
    if (status === 'sending') {
      return `${baseClasses} opacity-75 cursor-wait border border-electric-blue/30 text-electric-blue`;
    }
    if (status === 'success') {
      return `${baseClasses} border border-electric-emerald/30 text-electric-emerald`;
    }
    if (status === 'error') {
      return `${baseClasses} border border-electric-rose/30 text-electric-rose`;
    }
    return `${baseClasses} border border-electric-purple/30 text-electric-purple hover:text-electric-cyan hover:border-electric-cyan/40 hover:scale-105`;
  };

  const getButtonContent = () => {
    switch (status) {
      case 'sending':
        return (
          <>
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span>Sending Message...</span>
          </>
        );
      case 'success':
        return (
          <>
            <CheckCircle className="w-5 h-5" />
            <span>Message Sent Successfully!</span>
          </>
        );
      case 'error':
        return (
          <>
            <AlertCircle className="w-5 h-5" />
            <span>Failed to Send - Try Again</span>
          </>
        );
      default:
        return (
          <>
            <span>Send Secure Message</span>
            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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
      {/* Name Field */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 mb-2">
          <User className="w-4 h-4 text-electric-blue" />
          <label htmlFor="name" className="text-slate-300 font-medium">
            Full Name
          </label>
        </div>
        <FormInput
          id="name"
          name="name"
          type="text"
          label=""
          value={formData.name}
          onChange={handleChange}
          onBlur={() => handleBlur('name')}
          error={errors.name}
          touched={touched.name}
          required
          maxLength={100}
          disabled={status === 'sending'}
          placeholder="Enter your full name"
        />
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 mb-2">
          <AtSign className="w-4 h-4 text-electric-purple" />
          <label htmlFor="email" className="text-slate-300 font-medium">
            Email Address
          </label>
        </div>
        <FormInput
          id="email"
          name="email"
          type="email"
          label=""
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur('email')}
          error={errors.email}
          touched={touched.email}
          required
          maxLength={100}
          disabled={status === 'sending'}
          placeholder="your.email@domain.com"
        />
      </div>

      {/* Subject Field */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 mb-2">
          <Lightbulb className="w-4 h-4 text-electric-emerald" />
          <label htmlFor="subject" className="text-slate-300 font-medium">
            Subject
          </label>
        </div>
        <FormInput
          id="subject"
          name="subject"
          type="text"
          label=""
          value={formData.subject}
          onChange={handleChange}
          onBlur={() => handleBlur('subject')}
          error={errors.subject}
          touched={touched.subject}
          required
          maxLength={100}
          disabled={status === 'sending'}
          placeholder="Cybersecurity consultation, project inquiry, etc."
        />
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 mb-2">
          <MessageCircle className="w-4 h-4 text-electric-amber" />
          <label htmlFor="message" className="text-slate-300 font-medium">
            Message
          </label>
        </div>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={() => handleBlur('message')}
            rows={6}
            className="w-full rounded-xl px-4 py-3 glass-effect border border-slate-600 text-slate-300 placeholder-slate-500 focus:border-electric-amber focus:outline-none focus:ring-2 focus:ring-electric-amber/20 transition-all duration-300 resize-none"
            required
            maxLength={1000}
            disabled={status === 'sending'}
            placeholder="Describe your cybersecurity needs, project requirements, or questions you'd like to discuss..."
          />
          {errors.message && touched.message && (
            <p className="mt-2 text-sm text-electric-rose flex items-center space-x-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.message}</span>
            </p>
          )}
          <div className="mt-2 flex justify-between items-center text-sm">
            <span className="text-slate-500">
              {formData.message.length}/1000 characters
            </span>
            <div className="flex items-center space-x-1 text-electric-amber">
              <MessageCircle className="w-3 h-3" />
              <span className="text-xs">Secure & Encrypted</span>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`${getButtonClasses()} group`}
        disabled={status === 'sending' || Object.keys(errors).length > 0}
      >
        {getButtonContent()}
      </button>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 rounded-xl glass-effect border border-electric-emerald/30 bg-electric-emerald/10">
          <div className="flex items-center space-x-2 text-electric-emerald">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">Message sent successfully!</span>
          </div>
          <p className="text-slate-300 text-sm mt-1">
            Thank you for reaching out. I'll get back to you within 24 hours.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-xl glass-effect border border-electric-rose/30 bg-electric-rose/10">
          <div className="flex items-center space-x-2 text-electric-rose">
            <AlertCircle className="w-5 h-5" />
            <span className="font-semibold">Failed to send message</span>
          </div>
          <p className="text-slate-300 text-sm mt-1">
            Please try again or contact me directly via email or phone.
          </p>
        </div>
      )}
    </form>
  );
}