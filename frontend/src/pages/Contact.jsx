import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.message.trim() || formData.message.trim().split(' ').length > 500) {
      newErrors.message = 'Message is required (max 500 words)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await axios.post(`${API_URL}/api/contact`, formData);
      setStatus({ type: 'success', message: res.data.message || 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      const errorMsg = error.response?.data?.errors?.[0]?.msg || 'Failed to send message. Please try again.';
      setStatus({ type: 'error', message: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <div className="text-center mb-12">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle mx-auto">
          Have a project or opportunity? I&apos;d love to hear from you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-10 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-800 dark:text-cream/90">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            placeholder="Your name"
            required
          />
          {errors.name && <p className="text-accent-coral text-sm mt-1.5">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-800 dark:text-cream/90">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            placeholder="you@example.com"
            required
          />
          {errors.email && <p className="text-accent-coral text-sm mt-1.5">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-800 dark:text-cream/90">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="input-field resize-y min-h-[120px]"
            placeholder="Tell me about your project or opportunity…"
            required
          />
          {errors.message && <p className="text-accent-coral text-sm mt-1.5">{errors.message}</p>}
        </div>

        <button type="submit" disabled={loading} className="btn-primary w-full !py-4">
          {loading ? 'Sending…' : 'Send Message'}
        </button>

        {status.message && (
          <p
            className={`text-center text-sm font-medium ${
              status.type === 'success' ? 'text-accent-sage' : 'text-accent-coral'
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
