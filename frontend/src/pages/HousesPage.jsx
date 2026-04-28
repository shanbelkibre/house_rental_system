import { useState, useEffect } from 'react';
import api from '../api/axios';
import HouseCard from '../components/HouseCard';
import { Spinner, Pagination, Input, Button, Select } from '../components/UI';

export default function HousesPage() {
  const [houses, setHouses] = useState([]);
  const [meta, setMeta]     = useState(null);
  const [page, setPage]     = useState(1);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ location: '', min_price: '', max_price: '', rooms: '' });

  const fetchHouses = async (p = page, f = filters) => {
    setLoading(true);
    try {
      const params = { page: p, ...Object.fromEntries(Object.entries(f).filter(([, v]) => v !== '')) };
      const { data } = await api.get('/houses', { params });
      setHouses(data.data);
      setMeta(data);
    } catch {}
    setLoading(false);
  };

  useEffect(() => { fetchHouses(); }, []);

  const handleFilter = (e) => {
    e.preventDefault();
    setPage(1);
    fetchHouses(1, filters);
  };

  const handlePage = (p) => {
    setPage(p);
    fetchHouses(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setF = (k) => (e) => setFilters({ ...filters, [k]: e.target.value });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Browse Houses</h1>
        <p className="text-gray-500 mt-1">Find your perfect rental home</p>
      </div>

      {/* Filters */}
      <form onSubmit={handleFilter} className="bg-white rounded-2xl border border-gray-100 p-4 mb-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        <Input placeholder="Location..." value={filters.location} onChange={setF('location')} />
        <Input type="number" placeholder="Min price" value={filters.min_price} onChange={setF('min_price')} />
        <Input type="number" placeholder="Max price" value={filters.max_price} onChange={setF('max_price')} />
        <div className="flex gap-2">
          <Input type="number" placeholder="Rooms" value={filters.rooms} onChange={setF('rooms')} className="flex-1" />
          <Button type="submit">Search</Button>
        </div>
      </form>

      {loading ? (
        <div className="flex justify-center py-20"><Spinner size={12} /></div>
      ) : houses.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <div className="text-6xl mb-4">🏚</div>
          <p className="text-lg">No houses found matching your criteria.</p>
        </div>
      ) : (
        <>
          <p className="text-sm text-gray-500 mb-4">{meta?.total ?? houses.length} houses found</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {houses.map((h) => <HouseCard key={h.id} house={h} />)}
          </div>
          <Pagination
            meta={meta ? { current_page: meta.current_page, last_page: meta.last_page } : null}
            onPage={handlePage}
          />
        </>
      )}
    </div>
  );
}
