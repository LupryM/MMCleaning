"use client";

import { useState } from "react";
import Sparkle from "@/components/sparkle";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  
  const [file, setFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFileError(null);
    
    if (selectedFile) {
      // 5MB limit
      if (selectedFile.size > 5 * 1024 * 1024) {
        setFileError(`File too large: ${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB. Max limit is 5MB.`);
        setFile(null);
        e.target.value = "";
        return;
      }
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('service', formData.service);
      payload.append('message', formData.message);
      if (file) {
        payload.append('file', file);
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: payload,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        setFile(null);
        const fileInput = document.getElementById('file-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An unexpected error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card shadow-xl border border-border overflow-hidden">
      <div className="bg-lime px-8 py-6 text-lime-foreground flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-extrabold font-heading">Send a Message</h2>
          <p className="opacity-90 text-sm mt-1">Fill out the form below and we will be in touch.</p>
        </div>
        <Sparkle className="w-8 h-8 text-foreground hidden sm:block" />
      </div>
      
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        {submitStatus?.type === 'error' && (
          <div className="p-4 text-sm font-semibold bg-red-100 text-red-800">
            {submitStatus.message}
          </div>
        )}

        {/* Success Modal */}
        {submitStatus?.type === 'success' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <div className="bg-card border border-border shadow-2xl p-8 max-w-md w-full relative animate-in fade-in zoom-in duration-300">
              <div className="w-12 h-12 bg-lime text-lime-foreground flex items-center justify-center mb-6 mx-auto">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-center mb-2 text-foreground">Message Sent!</h3>
              <p className="text-center text-muted-foreground mb-6">
                {submitStatus.message}
              </p>
              <button 
                type="button"
                onClick={() => setSubmitStatus(null)}
                className="w-full bg-foreground text-background font-bold py-3 hover:bg-lime hover:text-lime-foreground transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent text-foreground"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent text-foreground"
              placeholder="yourname@gmail.com"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent text-foreground"
            placeholder="064 511 0847"
            required
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">Service Needed</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
          >
            <option value="" disabled>Select a service</option>
            <option value="house-cleaning">House Cleaning</option>
            <option value="deep-cleaning">Deep Cleaning</option>
            <option value="move-in-out">Move In/Out Cleaning</option>
            <option value="apartment-cleaning">Apartment Cleaning</option>
            <option value="post-construction">Post Construction Cleaning</option>
            <option value="upholstery-cleaning">Upholstery Cleaning</option>
            <option value="carpet-cleaning">Carpet Cleaning</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Your Message *</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent resize-none text-foreground"
            placeholder="How can we help you?"
            required
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="file-upload" className="block text-sm font-semibold text-foreground mb-2">Attach Image or Video (Optional)</label>
          <input 
            type="file" 
            id="file-upload" 
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent text-foreground file:mr-4 file:py-2 file:px-4 file:rounded-none file:border-0 file:text-sm file:font-semibold file:bg-lime file:text-lime-foreground hover:file:bg-foreground hover:file:text-background transition-colors"
          />
          {fileError && <p className="text-red-500 text-xs mt-1">{fileError}</p>}
          <div className="flex justify-between items-center text-xs mt-1">
            <p className="text-muted-foreground">Max file size: 5MB</p>
            {file && (
              <p className="text-green-600 dark:text-green-400 font-semibold">
                Uploaded: {(file.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            )}
          </div>
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="group w-full inline-flex items-center justify-center gap-2 bg-foreground text-background font-bold py-4 rounded-none hover:bg-lime hover:text-lime-foreground transition-colors duration-300 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          {!isSubmitting && (
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          )}
        </button>
      </form>
    </div>
  );
}
