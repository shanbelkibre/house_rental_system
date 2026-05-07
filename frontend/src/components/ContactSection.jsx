import { useState } from "react";
import AnimatedHeading from "../components/AnimatedHeading";
import FadeIn from "../components/FadeIn";
import { submitContactForm } from "../services/api";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions about our platform? Need help with your account? Our
            team is here to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info & Map */}
          <FadeIn direction="right">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 text-xl shrink-0 mr-4">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                      Office Address
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Debre Birhan Road
                      <br />
                      North Shewa, Ethiopia
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 text-xl shrink-0 mr-4">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                      Phone Number
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      +251 946 340 709
                      <br />
                      +251 923 010 537
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 text-xl shrink-0 mr-4">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                      Email Address
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      shambel5110@gmail.com
                      <br />
                      sales@houserental.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="left">
            <div
              id="contactform"
              className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-xl transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a message
              </h3>

              {success && (
                <div className="bg-green-50 text-green-700 dark:bg-green-500/10 dark:border-green-500/20 dark:text-green-400 px-4 py-3 rounded-xl mb-6">
                  Thank you for your message! We will get back to you shortly.
                </div>
              )}

              {error && (
                <div className="bg-red-50 text-red-700 dark:bg-red-500/10 dark:border-red-500/20 dark:text-red-400 px-4 py-3 rounded-xl mb-6">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
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
    </section>
  );
}
