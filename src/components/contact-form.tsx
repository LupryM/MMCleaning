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
        setFileError("File size must be less than 5MB");
        setFile(null);
        e.target.value = "";
        return;
      }
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };

  const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          // Remove the data URL prefix (e.g., "data:image/jpeg;base64,")
          const base64Data = reader.result.split(',')[1];
          resolve(base64Data);
        } else {
          reject(new Error("Failed to convert file to base64"));
        }
      };
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      let attachment = null;
      if (file) {
        const base64Content = await toBase64(file);
        attachment = {
          filename: file.name,
          content: base64Content
        };
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          attachment
        }),
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
        {submitStatus && (
          <div className={`p-4 text-sm font-semibold ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {submitStatus.message}
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
              placeholder="John Doe"
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
              placeholder="john@example.com"
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
          <p className="text-xs text-muted-foreground mt-1">Max file size: 5MB</p>
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
