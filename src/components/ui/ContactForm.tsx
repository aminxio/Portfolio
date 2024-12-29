import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Replace with your actual email service endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR-ACCESS-KEY', // Replace with your Web3Forms access key
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const inputClasses = `w-full rounded-lg px-4 py-2 transition-colors
    ${theme === 'dark'
      ? 'bg-gray-800/50 border border-gray-700 text-gray-300 focus:border-cyan-400'
      : 'bg-white border border-navy-200 text-navy-900 focus:border-navy-500'
    } focus:outline-none`;

  const getButtonClasses = () => {
    const baseClasses = 'w-full rounded-lg px-6 py-3 flex items-center justify-center space-x-2 transition-all duration-300 group';
    
    if (status === 'sending') {
      return `${baseClasses} opacity-75 cursor-wait ${
        theme === 'dark'
          ? 'bg-cyan-900/20 border border-cyan-400/20 text-cyan-400'
          : 'bg-navy-50 border border-navy-200 text-navy-600'
      }`;
    }

    if (status === 'success') {
      return `${baseClasses} ${
        theme === 'dark'
          ? 'bg-green-900/20 border border-green-400/20 text-green-400'
          : 'bg-green-50 border border-green-200 text-green-600'
      }`;
    }

    if (status === 'error') {
      return `${baseClasses} ${
        theme === 'dark'
          ? 'bg-red-900/20 border border-red-400/20 text-red-400'
          : 'bg-red-50 border border-red-200 text-red-600'
      }`;
    }

    return `${baseClasses} ${
      theme === 'dark'
        ? 'bg-cyan-900/20 border border-cyan-400/20 text-cyan-400 hover:bg-cyan-900/40'
        : 'bg-navy-50 border border-navy-200 text-navy-600 hover:bg-navy-100'
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
        return <span>Message Sent!</span>;
      case 'error':
        return <span>Failed to Send</span>;
      default:
        return (
          <>
            <span>Send Message</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-navy-700 dark:text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
          required
          disabled={status === 'sending'}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-navy-700 dark:text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
          required
          disabled={status === 'sending'}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-navy-700 dark:text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`${inputClasses} resize-none`}
          required
          disabled={status === 'sending'}
        />
      </div>

      <button
        type="submit"
        className={getButtonClasses()}
        disabled={status === 'sending'}
      >
        {getButtonContent()}
      </button>
    </form>
  );
}