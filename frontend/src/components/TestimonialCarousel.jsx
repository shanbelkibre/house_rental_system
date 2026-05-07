import { useState, useEffect } from "react";

export default function TestimonialCarousel({ testimonials = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto slide every 5s

    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden px-4">
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((t, idx) => (
          <div key={idx} className="w-full flex-shrink-0 px-4 md:px-12">
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 text-center relative">
              <span className="text-6xl text-blue-500/20 absolute top-4 left-8 font-serif">"</span>
              <p className="text-lg md:text-xl text-gray-300 italic mb-8 relative z-10 leading-relaxed">
                {t.content}
              </p>
              <div className="flex flex-col items-center">
                <img 
                  src={t.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=random`} 
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-2 border-gray-700 mb-3"
                />
                <h4 className="text-white font-semibold">{t.name}</h4>
                <p className="text-blue-500 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      {testimonials.length > 1 && (
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-blue-500 w-6" : "bg-gray-700 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
