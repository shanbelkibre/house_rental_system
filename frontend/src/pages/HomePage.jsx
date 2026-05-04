import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AnimatedHeading from "../components/AnimatedHeading";
import FadeIn from "../components/FadeIn";
import HeroSearch from "../components/HeroSearch";
import FeaturedHouses from "../components/FeaturedHouses";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Counter from "../components/Counter";
import { getStats } from "../services/api";
import houseBg from "../../Asset/house background.jpg";

export default function HomePage() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    total_houses: 0,
    total_renters: 0,
    total_owners: 0,
    cities_covered: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getStats();
        setStats(res.data);
      } catch (err) {
        console.error("Failed to load stats", err);
      }
    };
    fetchStats();
  }, []);

  const dummyTestimonials = [
    {
      name: "Shambel Kibre",
      role: "Renter",
      content: "I found a beautiful house in just two days using HouseRental. The virtual tour feature saved me so much time!",
    },
    {
      name: "Sami Abera",
      role: "Property Owner",
      content: "Managing my properties has never been easier. The digital agreements and tenant verification give me peace of mind.",
    },
    {
      name: "Belete Derje",
      role: "Renter",
      content: "The communication with owners is seamless. I highly recommend this platform to anyone looking for a stress-free renting experience.",
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden flex flex-col justify-end">
        <img
          src={houseBg}
          alt="Luxury Home"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0"></div>

        <div className="relative z-10 px-6 md:px-12 lg:px-16 pb-16 lg:pb-24 w-full">
          <div className="max-w-4xl">
            <AnimatedHeading
              text="Find Your Perfect Home&#10;in Debre Birhan."
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-6"
              style={{ letterSpacing: "-0.04em" }}
            />

            <FadeIn delay={800} duration={1000}>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                Browse verified rental listings. Connect directly with owners.
                Sign digital agreements securely.
              </p>
            </FadeIn>

            <FadeIn delay={1200} duration={1000} className="mb-8">
              <HeroSearch />
            </FadeIn>
            
            <FadeIn delay={1400} duration={1000}>
              <div className="flex gap-4">
                <span className="liquid-glass border border-white/20 px-4 py-2 rounded-full text-sm">
                  ✓ Verified Owners
                </span>
                <span className="liquid-glass border border-white/20 px-4 py-2 rounded-full text-sm">
                  ✓ Secure Digital Agreements
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Featured Houses Section */}
      <FeaturedHouses />

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">How HouseRental Works</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Our streamlined process makes renting or listing a property as simple as possible.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-300 dark:bg-gray-800 -z-10 transition-colors duration-300"></div>
            
            <FadeIn delay={0} className="text-center">
              <div className="w-24 h-24 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl shadow-blue-600/20 border-4 border-white dark:border-gray-900 transition-colors duration-300">
                🔍
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">1. Find Your Place</h3>
              <p className="text-gray-600 dark:text-gray-400">Search through verified listings with high-quality photos and detailed descriptions.</p>
            </FadeIn>

            <FadeIn delay={200} className="text-center">
              <div className="w-24 h-24 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl shadow-blue-600/20 border-4 border-white dark:border-gray-900 transition-colors duration-300">
                📅
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">2. Request a Visit</h3>
              <p className="text-gray-600 dark:text-gray-400">Schedule a convenient time to view the property physically or take a virtual tour.</p>
            </FadeIn>

            <FadeIn delay={400} className="text-center">
              <div className="w-24 h-24 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl shadow-blue-600/20 border-4 border-white dark:border-gray-900 transition-colors duration-300">
                ✍️
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">3. Sign Digitally</h3>
              <p className="text-gray-600 dark:text-gray-400">Review and sign your rental agreement securely online. No paperwork needed.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-gray-200 dark:border-white/10 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
                <Counter end={stats.total_houses} />
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Available Houses</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
                <Counter end={stats.total_renters} />
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Happy Renters</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
                <Counter end={stats.total_owners} />
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Verified Owners</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
                <Counter end={stats.cities_covered} />
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Cities Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="text-center mb-16 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Users Say</h2>
          <p className="text-gray-600 dark:text-gray-400">Don't just take our word for it.</p>
        </div>
        <TestimonialCarousel testimonials={dummyTestimonials} />
      </section>

      {/* CTA Section - Hide if logged in */}
      {!user && (
        <section className="py-24 relative overflow-hidden bg-blue-600 dark:bg-blue-900/20 transition-colors duration-300">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Own a property?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of property owners who are already managing their rentals efficiently on our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-blue-600/30">
                List Your Property
              </Link>
              <Link to="/services" className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
