import AnimatedHeading from "../components/AnimatedHeading";
import FadeIn from "../components/FadeIn";
import Counter from "../components/Counter";
import TeamMember from "../components/TeamMember";

export default function AboutPage() {
  const team = [
    {
      name: "Abebe Kebede",
      role: "Founder & CEO",
      bio: "Former real estate agent who saw the need for a modern, digital approach to finding homes in Ethiopia.",
      social: { twitter: "#", linkedin: "#" },
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    },
    {
      name: "Tigist Haile",
      role: "Head of Operations",
      bio: "Ensures that all property owners are verified and the quality of listings remains top-notch.",
      social: { linkedin: "#" },
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    },
    {
      name: "Dawit Samuel",
      role: "Lead Developer",
      bio: "The technical mind behind our fast, secure, and user-friendly platform.",
      social: { twitter: "#", linkedin: "#" },
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <AnimatedHeading 
            text="Revolutionizing the way you find your home."
            className="text-4xl md:text-5xl font-bold mb-6"
          />
          <FadeIn delay={400}>
            <p className="text-lg text-gray-400">
              HouseRental was founded with a simple mission: to make the process of renting a house in Ethiopia transparent, secure, and completely digital.
            </p>
          </FadeIn>
        </div>

        {/* Stats Section */}
        <FadeIn delay={600}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-white/10 py-12">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                <Counter end={500} suffix="+" />
              </h3>
              <p className="text-gray-400">Available Houses</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                <Counter end={1200} suffix="+" />
              </h3>
              <p className="text-gray-400">Happy Renters</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                <Counter end={300} suffix="+" />
              </h3>
              <p className="text-gray-400">Verified Owners</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                <Counter end={15} />
              </h3>
              <p className="text-gray-400">Cities Covered</p>
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
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                It all started when our founders struggled to find a reliable rental property. The traditional process was slow, involved too many middlemen, and lacked transparency.
              </p>
              <p>
                We realized that property owners also faced challenges managing tenants, collecting rent securely, and showcasing their properties effectively.
              </p>
              <p>
                That's why we built HouseRental. A unified platform bridging the gap between property owners and renters, equipped with modern tools like virtual visits, digital agreements, and secure management.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The passionate people working behind the scenes to bring you the best real estate experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
