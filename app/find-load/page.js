'use client';

import { useState, useMemo } from 'react';
import { Search, MapPin, Package, Truck } from 'lucide-react';
import { COLORS } from '@/lib/constants';

export default function FindLoadPage() {
  const [search, setSearch] = useState('');

  const loads = [
    {
      id: 1,
      from: 'Ahmedabad',
      to: 'Mumbai',
      material: 'Electronics',
      weight: '15 Ton',
      truckType: 'Container',
      posted: 'Today',
      contact: '+91 9974092166',
    },
    {
      id: 2,
      from: 'Delhi',
      to: 'Lucknow',
      material: 'FMCG Goods',
      weight: '10 Ton',
      truckType: 'Open Truck',
      posted: '1 Day Ago',
      contact: '+91 9876543210',
    },
    {
      id: 3,
      from: 'Surat',
      to: 'Pune',
      material: 'Textiles',
      weight: '20 Ton',
      truckType: 'Trailer',
      posted: 'Today',
      contact: '+91 9988776655',
    },
    {
      id: 4,
      from: 'Kanpur',
      to: 'Noida',
      material: 'Machinery',
      weight: '25 Ton',
      truckType: 'Container',
      posted: '2 Days Ago',
      contact: '+91 9123456789',
    },
  ];

  const filteredLoads = useMemo(() => {
    return loads.filter(
      (load) =>
        load.from.toLowerCase().includes(search.toLowerCase()) ||
        load.to.toLowerCase().includes(search.toLowerCase()) ||
        load.material.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-50 top-19 relative">

      {/* Hero Section */}
      <section
        className="py-16 px-4"
        style={{
          background: `linear-gradient(135deg, ${COLORS.darkNavy}, ${COLORS.primary})`,
        }}
      >
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Available Loads
          </h1>

          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Discover loads from verified shippers across India and keep your
            trucks moving profitably.
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto mt-8 relative" style={{ color: 'white' }}>
            <Search
              className="absolute left-4 top-4 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Search by city, destination, or material..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-4 pl-12 pr-4 rounded-2xl text-black outline-none shadow-lg bg-amber-50"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 py-8 bg-white rounded-3xl shadow-lg -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <p className="text-gray-500 text-sm">Available Loads</p>
            <h3 className="text-3xl font-bold">{loads.length}</h3>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <p className="text-gray-500 text-sm">Active Cities</p>
            <h3 className="text-3xl font-bold">50+</h3>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <p className="text-gray-500 text-sm">Verified Shippers</p>
            <h3 className="text-3xl font-bold text-green-600">100%</h3>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <p className="text-gray-500 text-sm">Daily Loads</p>
            <h3 className="text-3xl font-bold">500+</h3>
          </div>

        </div>
      </section>

      {/* Loads List */}
      <section className="max-w-7xl mx-auto px-4 pb-16">

        <div className="flex justify-between items-center mb-6">
          <h2
            className="text-2xl font-bold"
            style={{ color: COLORS.darkNavy }}
          >
            Available Loads
          </h2>

          <span className="text-gray-600">
            {filteredLoads.length} Results
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">

          {filteredLoads.map((load) => (
            <div
              key={load.id}
              className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100" 
            >

              {/* Route */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <MapPin
                  size={18}
                  style={{ color: COLORS.primary }}
                />
                <span className="font-semibold">{load.from}</span>

                <span className="text-gray-400">→</span>

                <span className="font-semibold">{load.to}</span>
              </div>

              {/* Material */}
              <div className="flex items-center gap-2 mb-3">
                <Package size={18} className="text-gray-500" />
                <span>{load.material}</span>
              </div>

              {/* Truck Type */}
              <div className="flex items-center gap-2 mb-3">
                <Truck size={18} className="text-gray-500" />
                <span>{load.truckType}</span>
              </div>

              {/* Weight */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                  {load.weight}
                </span>
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                <div>
                  <p className="text-sm text-gray-500">
                    Posted: {load.posted}
                  </p>
                </div>

                <a
                  href={`tel:${load.contact}`}
                  className="px-5 py-3 rounded-xl text-white text-center font-medium"
                  style={{
                    backgroundColor: COLORS.primary,
                  }}
                >
                  Contact Shipper
                </a>

              </div>

            </div>
          ))}

        </div>

      </section>
    </div>
  );
}