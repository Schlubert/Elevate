// src/pages/Contact.tsx
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, Clock, MessageSquare } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    message: "",
    howDidYouHear: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend/email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        message: "",
        howDidYouHear: ""
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B6E4F] to-[#6BA94D] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let's Start a Conversation
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Whether you have a clear challenge or just want to explore possibilities, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left Column - Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Every engagement starts with understanding your business. No pressure, no hard sell—just a conversation about your challenges and whether we might be able to help.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Mail className="text-[#0B6E4F]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:office@elevatemanagement.co.nz" className="text-[#0B6E4F] hover:underline text-lg">
                        office@elevatemanagement.co.nz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Phone className="text-[#0B6E4F]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a href="tel:+6421234567" className="text-[#0B6E4F] hover:underline text-lg">
                        +64 27 485 9001
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <MapPin className="text-[#0B6E4F]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600 text-lg">Dunedin, New Zealand</p>
                      <p className="text-sm text-gray-500 mt-1">Serving clients around the world</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Linkedin className="text-[#0B6E4F]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Connect</h3>
                      <a 
                        href="https://linkedin.com/company/elevate-management-solutions" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#0B6E4F] hover:underline text-lg"
                      >
                        Follow us on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="text-[#6BA94D]" size={24} />
                    <h3 className="font-bold text-gray-900">What to Expect</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-0.5" size={18} />
                      <span>We'll respond within 24 hours on business days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-0.5" size={18} />
                      <span>Initial conversation is obligation-free</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-0.5" size={18} />
                      <span>We'll listen to understand your situation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-0.5" size={18} />
                      <span>We'll be honest about whether we can help</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="text-[#6BA94D]" size={28} />
                    <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
                  </div>

                  {submitted ? (
                    <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
                      <CheckCircle className="text-green-600 mx-auto mb-4" size={48} />
                      <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
                      <p className="text-green-800">
                        We've received your message and will be in touch within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#6BA94D] transition-colors"
                            placeholder="Your name"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#6BA94D] transition-colors"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#6BA94D] transition-colors"
                            placeholder="+64 21 234 5678"
                          />
                        </div>

                        <div>
                          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                            Organisation
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#6BA94D] transition-colors"
                            placeholder="Your organisation"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                          Industry
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#6BA94D] transition-colors bg-white"
                        >
                          <option value="">Select an industry</option>
                          <option value="hospitality">Hospitality & Tourism</option>
                          <option value="retail">Retail & Consumer Services</option>
                          <option value="professional">Professional Services</option>
                          <option value="nonprofit">Not-for-Profit</option>
                          <option value="manufacturing">Manufacturing & Logistics</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#6BA94D] transition-colors resize-none"
                          placeholder="Tell us about your business and the challenges you're facing..."
                        />
                      </div>

                      <div>
                        <label htmlFor="howDidYouHear" className="block text-sm font-semibold text-gray-700 mb-2">
                          How did you hear about us?
                        </label>
                        <select
                          id="howDidYouHear"
                          name="howDidYouHear"
                          value={formData.howDidYouHear}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#6BA94D] transition-colors bg-white"
                        >
                          <option value="">Please select</option>
                          <option value="referral">Referral from colleague/friend</option>
                          <option value="search">Online search</option>
                          <option value="linkedin">LinkedIn</option>
                          <option value="social">Social media</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#0B6E4F] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#6BA94D] transition-colors shadow-lg flex items-center justify-center gap-2 text-lg"
                      >
                        Send Message <Send size={20} />
                      </button>

                      <p className="text-sm text-gray-500 text-center">
                        By submitting this form, you agree to us contacting you regarding your enquiry.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Prefer a Different Approach?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're flexible about how you get in touch. Choose whatever works best for you.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Phone className="text-[#6BA94D] mx-auto mb-4" size={40} />
                <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Prefer to talk? Give us a call for an informal chat.</p>
                <a href="tel:+64274859001" className="text-[#0B6E4F] font-semibold hover:underline">
                  +64 27 485 9001
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Mail className="text-[#6BA94D] mx-auto mb-4" size={40} />
                <h3 className="font-bold text-gray-900 mb-2">Email Directly</h3>
                <p className="text-gray-600 mb-4">Send us an email and we'll respond promptly.</p>
                <a href="mailto:office@elevatemanagement.co.nz" className="text-[#0B6E4F] font-semibold hover:underline break-all">
                  office@elevatemanagement.co.nz
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Linkedin className="text-[#6BA94D] mx-auto mb-4" size={40} />
                <h3 className="font-bold text-gray-900 mb-2">Connect on LinkedIn</h3>
                <p className="text-gray-600 mb-4">Reach out via LinkedIn for a professional connection.</p>
                <a 
                  href="https://linkedin.com/company/elevate-management-solutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0B6E4F] font-semibold hover:underline"
                >
                  Visit our page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;