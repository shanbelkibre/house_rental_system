import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AnimatedHeading from '../components/AnimatedHeading';
import FadeIn from '../components/FadeIn';

export default function HomePage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-black text-white">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4" type="video/mp4" />
      </video>

      {/* Hero content pushing everything to the bottom */}
      <div className="relative z-10 flex flex-col h-screen px-6 md:px-12 lg:px-16 pb-12 lg:pb-16 justify-end">
        <div className="lg:grid lg:grid-cols-2 lg:items-end w-full">
          {/* Left Column */}
          <div>
            <AnimatedHeading 
              text="Find Your Perfect Home&#10;in Ethiopia." 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4"
              style={{ letterSpacing: '-0.04em' }}
            />
            
            <FadeIn delay={800} duration={1000}>
              <p className="text-base md:text-lg text-gray-300 mb-5 max-w-xl">
                Browse verified rental listings across Addis Ababa and beyond. Connect directly with owners.
              </p>
            </FadeIn>

            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-wrap gap-4">
                {user ? (
                  <Link to="/houses" className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Browse Houses
                  </Link>
                ) : (
                  <>
                    <Link to="/register" className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Get Started
                    </Link>
                    <Link to="/houses" className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors">
                      Browse Houses
                    </Link>
                  </>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Tag */}
          <FadeIn delay={1400} duration={1000} className="mt-8 lg:mt-0 flex items-end justify-start lg:justify-end">
            <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl inline-block">
              <p className="text-lg md:text-xl lg:text-2xl font-light">
                Secure. Fast. Trusted.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
