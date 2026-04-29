import { ArrowRight, Menu } from "lucide-react";
import ShinyText from "../components/ShinyText";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";

export default function DesignProHero() {
  return (
    <section className="relative h-screen bg-black overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 h-full">
        {/* Nav */}
        <header className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-white" />
              </div>
              <div className="text-white font-medium tracking-tight">
                DesignPro
              </div>
            </div>

            <nav className="hidden lg:flex items-center">
              <div className="rounded-full border border-gray-700 px-3 py-2 flex items-center gap-4 text-sm">
                {[
                  "Home",
                  "About Us",
                  "Courses",
                  "Instructors",
                  "Testimonials",
                  "Blog",
                ].map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                ))}

                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  Contact us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </nav>

            <button
              type="button"
              className="lg:hidden text-white/80 hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100%-80px)] flex flex-col">
          {/* Top section */}
          <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <p className="text-white/80 text-sm md:text-base">
              We deliver transformative programs that empower emerging product
              designers with cutting-edge expertise and vision to thrive
              globally.
            </p>
            <p className="text-white/80 text-sm md:text-base lg:text-right">
              8000+ Talented Designers Launched !
            </p>
          </div>

          {/* Hero center */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="text-white/80 uppercase tracking-tight text-xs md:text-sm">
              Seats for Next Program Opening Soon
            </div>

            <h1 className="mt-4 tracking-tighter leading-[0.85]">
              <div className="text-white font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                Become
              </div>
              <ShinyText
                text="Product Leader."
                className="block font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
                baseColor="#64CEFB"
                shineColor="#ffffff"
                durationSeconds={3}
                spreadDegrees={100}
              />
            </h1>

            <button
              type="button"
              className="group mt-8 rounded-full bg-black hover:bg-gray-900 transition-colors px-6 md:px-8 py-3 md:py-4 text-white inline-flex items-center gap-3"
            >
              Apply for Next Enrollment
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
