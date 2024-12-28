import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400">
              Interested in collaboration or have a security concern? Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href={`https://${personalInfo.linkedin}`}
                  className="flex items-center space-x-3 text-gray-400 hover:text-green-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>{personalInfo.linkedin}</span>
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center space-x-3 text-gray-400 hover:text-green-500 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>{personalInfo.email}</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green-500 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-black font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}