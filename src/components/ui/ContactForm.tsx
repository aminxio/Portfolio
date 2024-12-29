import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
        />
      </div>

      <button
        type="submit"
        className={`w-full rounded-lg px-6 py-3 flex items-center justify-center space-x-2 transition-colors group
          ${theme === 'dark'
            ? 'bg-cyan-900/20 border border-cyan-400/20 text-cyan-400 hover:bg-cyan-900/40'
            : 'bg-navy-50 border border-navy-200 text-navy-600 hover:bg-navy-100'
          }`}
      >
        <span>Send Message</span>
        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}