'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { contactContent } from '@/app/lib/content';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const reset = useCallback(() => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    setSubmitted(false);
  }, []);

  useEffect(() => {
    if (!isOpen) reset();
  }, [isOpen, reset]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Invalid email';
    if (!formData.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(onClose, 3000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(15,30,58,0.85)] backdrop-blur-[8px]"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-xl max-w-[480px] w-[90%] p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-muted hover:text-navy-deep transition-colors text-xl leading-none bg-transparent border-none cursor-pointer"
          aria-label="Close"
        >
          &times;
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <h3 className="font-roboto font-bold text-2xl text-navy-deep mb-1.5">
              {contactContent.title}
            </h3>
            <p className="font-roboto text-sm text-gray-muted mb-5">
              {contactContent.subtitle}
            </p>

            <input
              type="text"
              placeholder={contactContent.fields.name.placeholder}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 mb-3 bg-gray-light border border-[rgba(167,182,208,0.25)] rounded-md font-roboto text-sm text-navy-deep outline-none transition-colors focus:border-navy-deep placeholder:text-gray-muted"
            />
            {errors.name && <p className="text-xs text-red-500 mb-2 -mt-2">{errors.name}</p>}

            <input
              type="email"
              placeholder={contactContent.fields.email.placeholder}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 mb-3 bg-gray-light border border-[rgba(167,182,208,0.25)] rounded-md font-roboto text-sm text-navy-deep outline-none transition-colors focus:border-navy-deep placeholder:text-gray-muted"
            />
            {errors.email && <p className="text-xs text-red-500 mb-2 -mt-2">{errors.email}</p>}

            <input
              type="tel"
              placeholder={contactContent.fields.phone.placeholder}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 mb-3 bg-gray-light border border-[rgba(167,182,208,0.25)] rounded-md font-roboto text-sm text-navy-deep outline-none transition-colors focus:border-navy-deep placeholder:text-gray-muted"
            />

            <textarea
              rows={4}
              placeholder={contactContent.fields.message.placeholder}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 mb-4 bg-gray-light border border-[rgba(167,182,208,0.25)] rounded-md font-roboto text-sm text-navy-deep outline-none transition-colors focus:border-navy-deep resize-y placeholder:text-gray-muted"
            />
            {errors.message && <p className="text-xs text-red-500 mb-2 -mt-3">{errors.message}</p>}

            <button
              type="submit"
              className="w-full py-3.5 bg-navy-deep text-white font-roboto font-semibold text-xs uppercase tracking-[0.5px] rounded cursor-pointer transition-opacity hover:opacity-90 border-none"
            >
              {contactContent.submit}
            </button>
          </form>
        ) : (
          <div className="text-center py-10">
            <div className="w-12 h-12 bg-navy-deep rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
              &#10003;
            </div>
            <h4 className="font-roboto font-bold text-lg text-navy-deep mb-2">
              {contactContent.success.title}
            </h4>
            <p className="font-roboto text-sm text-gray-muted">
              {contactContent.success.subtitle}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
