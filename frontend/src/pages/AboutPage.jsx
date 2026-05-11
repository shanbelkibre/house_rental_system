import { useState, useEffect } from "react";
import AnimatedHeading from "../components/AnimatedHeading";
import FadeIn from "../components/FadeIn";
import Counter from "../components/Counter";
import TeamMember from "../components/TeamMember";
import { getStats } from "../services/api";
import imgShambel from "../../Asset/shanbel.png";
import imgBelete from "../../Asset/belet.png";
import imgSamuel from "../../Asset/sami.png";
import imgKalkidan from "../../Asset/kalkidan.png";

export default function AboutPage() {
  const [stats, setStats] = useState({
    total_houses: 500,
    total_renters: 1200,
    total_owners: 300,
    cities_covered: 15,
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

  const team = [
    {
      name: "Shambel Kibre",
      role: "Founder & CEO",
      bio: "Former real estate agent who saw the need for a modern, digital approach to finding homes in Ethiopia.",
      social: { twitter: "#", linkedin: "#" },
      image: imgShambel,
    },
    {
      name: "Belete Dereje",
      role: "Head of Operations",
      bio: "Ensures that all property owners are verified and the quality of listings remains top-notch.",
      social: { linkedin: "#" },
      image: imgBelete,
      imagePosition: "object-center",
    },
    {
      name: "Samuel Abera",
      role: "Lead Developer",
      bio: "The technical mind behind our fast, secure, and user-friendly platform.",
      social: { twitter: "#", linkedin: "#" },
      image: imgSamuel,
    },
    {
      name: "Kalkidan Behailu",
      role: "Customer Success",
      bio: "Dedicated to providing the best support and experience for renters and property owners.",
      social: { twitter: "#", linkedin: "#" },
      image: imgKalkidan,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden mb-16">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-white dark:to-black z-0 transition-colors duration-300"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <AnimatedHeading
            text="Revolutionizing the way you find your home."
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          />
          <FadeIn delay={400}>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              HouseRental was founded with a simple mission: to make the process
              of renting a house in Ethiopia transparent, secure, and completely
              digital.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-16">
        {/* Stats Section */}
        <FadeIn delay={600}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-gray-200 dark:border-white/10 py-12">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
                <Counter end={stats.total_houses} suffix="+" />
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Available Houses
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
                <Counter end={stats.total_renters} suffix="+" />
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Happy Renters</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
                <Counter end={stats.total_owners} suffix="+" />
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Verified Owners
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 mb-2">
                <Counter end={stats.cities_covered} />
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Cities Covered</p>
            </div>
          </div>
        </FadeIn>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <FadeIn direction="right">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
              alt="Our Story"
              className="rounded-3xl shadow-2xl shadow-blue-500/10 w-full object-cover h-[400px]"
            />
          </FadeIn>
          <FadeIn direction="left">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                It all started when our founders struggled to find a reliable
                rental property. The traditional process was slow, involved too
                many middlemen, and lacked transparency.
              </p>
              <p>
                We realized that property owners also faced challenges managing
                tenants, collecting rent securely, and showcasing their
                properties effectively.
              </p>
              <p>
                That's why we built HouseRental. A unified platform bridging the
                gap between property owners and renters, equipped with modern
                tools like virtual visits, digital agreements, and secure
                management.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Meet Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The passionate people working behind the scenes to bring you the
              best real estate experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <FadeIn key={idx} delay={idx * 200}>
                <TeamMember {...member} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
