import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSearch() {
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [rooms, setRooms] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.append("search", location);
    if (priceRange) params.append("max_price", priceRange);
    if (rooms) params.append("rooms", rooms);
    
    navigate(`/houses?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="liquid-glass border border-white/20 p-2 rounded-2xl flex flex-col md:flex-row gap-2 max-w-4xl w-full">
      <div className="flex-1 bg-black/40 rounded-xl px-4 py-3 flex items-center">
        <span className="text-gray-400 mr-3">📍</span>
        <input 
          type="text" 
          placeholder="Where do you want to live?" 
          className="bg-transparent border-none outline-none text-white w-full placeholder-gray-500 text-sm md:text-base"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      
      <div className="flex-1 bg-black/40 rounded-xl px-4 py-3 flex items-center">
        <span className="text-gray-400 mr-3">💰</span>
        <select 
          className="bg-transparent border-none outline-none text-white w-full text-sm md:text-base appearance-none cursor-pointer"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="" className="text-black">Any Price</option>
          <option value="5000" className="text-black">Up to 5,000 ETB</option>
          <option value="10000" className="text-black">Up to 10,000 ETB</option>
          <option value="20000" className="text-black">Up to 20,000 ETB</option>
          <option value="50000" className="text-black">Up to 50,000 ETB</option>
        </select>
      </div>

      <div className="flex-1 bg-black/40 rounded-xl px-4 py-3 flex items-center">
        <span className="text-gray-400 mr-3">🛏️</span>
        <select 
          className="bg-transparent border-none outline-none text-white w-full text-sm md:text-base appearance-none cursor-pointer"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
        >
          <option value="" className="text-black">Rooms</option>
          <option value="1" className="text-black">1+ Rooms</option>
          <option value="2" className="text-black">2+ Rooms</option>
          <option value="3" className="text-black">3+ Rooms</option>
          <option value="4" className="text-black">4+ Rooms</option>
        </select>
      </div>

      <button 
        type="submit" 
        className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-8 py-3 md:py-4 font-semibold transition-colors flex items-center justify-center min-w-[120px]"
      >
        Search
      </button>
    </form>
  );
}
