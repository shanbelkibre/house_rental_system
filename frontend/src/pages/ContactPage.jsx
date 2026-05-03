import { useState } from "react";
import AnimatedHeading from "../components/AnimatedHeading";
import FadeIn from "../components/FadeIn";
import { submitContactForm } from "../services/api";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await submitContactForm(formData);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedHeading 
            text="Get in Touch."
            className="text-4xl md:text-5xl font-bold mb-6"
          />
          <FadeIn delay={400}>
            <p className="text-lg text-gray-400">
              Have questions about our platform? Need help with your account? Our team is here to assist you.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info & Map */}
          <FadeIn direction="right">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 text-xl shrink-0 mr-4">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Office Address</h3>
                    <p className="text-gray-400">123 Debre Birhan Road<br/>North Shewa, Ethiopia</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 text-xl shrink-0 mr-4">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone Number</h3>
                    <p className="text-gray-400">+251 911 234 567<br/>+251 112 345 678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 text-xl shrink-0 mr-4">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Address</h3>
                    <p className="text-gray-400">support@houserental.com<br/>sales@houserental.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 text-xl shrink-0 mr-4">
                    ⏰
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Working Hours</h3>
                    <p className="text-gray-400">Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map Embed (Placeholder) */}
              <div className="w-full h-64 bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden relative">
                 <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62886.99222538411!2d39.493998150000004!3d9.673824449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164bc9886361a499%3A0xe543e061ad36e1c4!2sDebre%20Birhan!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="left">
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              
              {success && (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-xl mb-6">
                  Thank you for your message! We will get back to you shortly.
                </div>
              )}

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl mb-6">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="+251 900 000 000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-4 py-3 font-semibold transition-colors disabled:opacity-50 flex justify-center items-center"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  );
}
