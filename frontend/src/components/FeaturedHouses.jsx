import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HouseCard from "./HouseCard";
import { listHouses } from "../services/api";

export default function FeaturedHouses() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        // Fetch a few houses, assuming backend sorts by newest or featured
        const res = await listHouses({ per_page: 3 });
        // Use standard response structure
        if (res.data?.data) {
          setHouses(res.data.data.slice(0, 3));
        } else if (Array.isArray(res.data)) {
          setHouses(res.data.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching featured houses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHouses();
  }, []);

  if (loading) {
    return (
      <div className="py-20 flex justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (houses.length === 0) {
    return null; // Don't show section if no houses
  }

  return (
    <section className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Properties
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Hand-picked selection of quality homes available for rent right now.
            </p>
          </div>
          <Link 
            to="/houses" 
            className="hidden md:flex items-center text-blue-500 hover:text-blue-400 font-medium group"
          >
            View all properties
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {houses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>

        <div className="mt-10 md:hidden text-center">
          <Link 
            to="/houses" 
            className="inline-flex items-center text-blue-500 hover:text-blue-400 font-medium group"
          >
            View all properties
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
