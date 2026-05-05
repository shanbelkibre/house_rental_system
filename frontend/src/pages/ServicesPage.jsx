import AnimatedHeading from "../components/AnimatedHeading";
import FadeIn from "../components/FadeIn";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ServicesPage() {
  const { user } = useAuth();

  const renterServices = [
    {
      icon: "🔍",
      title: "Smart Search",
      description: "Filter properties by location, price, rooms, and amenities to find exactly what you're looking for.",
    },
    {
      icon: "📅",
      title: "Virtual & Physical Visits",
      description: "Schedule property viewings directly through the platform at your convenience.",
    },
    {
      icon: "📝",
      title: "Digital Agreements",
      description: "Review, sign, and manage your rental agreements entirely online without paperwork.",
    },
    {
      icon: "💳",
      title: "Secure Management",
      description: "Track your rent status, communicate with owners, and manage your lease securely.",
    }
  ];

  const ownerServices = [
    {
      icon: "🏠",
      title: "Property Listing",
      description: "Showcase your properties with high-quality image galleries and detailed descriptions.",
    },
    {
      icon: "🛡️",
      title: "Verified Renters",
      description: "Connect with authenticated users and manage rental requests efficiently.",
    },
    {
      icon: "📊",
      title: "Management Dashboard",
      description: "Get a comprehensive view of your properties, active agreements, and visit schedules.",
    },
    {
      icon: "🚀",
      title: "Premium Reach",
      description: "Boost your property visibility to reach more potential renters faster.",
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Hero Section */}
      <div className="relative w-full pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden mb-16">
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-white dark:to-black z-0 transition-colors duration-300"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <AnimatedHeading 
            text="Comprehensive Services for Renters and Owners."
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          />
          <FadeIn delay={400}>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Whether you are looking for a new home or managing multiple properties, we provide the tools you need for a seamless experience.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-16">

        {/* For Renters */}
        <div className="mb-24">
          <div className="flex items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">For Renters</h2>
            <div className="h-px bg-gray-200 dark:bg-white/10 flex-1 ml-6 transition-colors duration-300"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {renterServices.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <ServiceCard {...service} />
              </FadeIn>
            ))}
          </div>
        </div>

        {/* For Owners */}
        <div className="mb-24">
          <div className="flex items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">For Property Owners</h2>
            <div className="h-px bg-gray-200 dark:bg-white/10 flex-1 ml-6 transition-colors duration-300"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ownerServices.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <ServiceCard {...service} />
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA / Pricing Teaser - Hide if logged in */}
        {!user && (
          <FadeIn delay={200}>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 border border-blue-200 dark:border-blue-500/20 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto transition-colors duration-300">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to list your property?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of property owners who are already managing their rentals efficiently. Choose a subscription plan that fits your needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/register" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                  Create Owner Account
                </Link>
                <Link to="#contact" className="bg-transparent border border-blue-600 dark:border-white/20 hover:bg-blue-50 dark:hover:bg-white/5 text-blue-600 dark:text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                  Contact Sales
                </Link>
              </div>
            </div>
          </FadeIn>
        )}

      </div>
    </div>
  );
}
