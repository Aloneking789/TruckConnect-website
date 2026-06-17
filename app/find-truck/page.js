'use client';

import { useState, useMemo } from 'react';
import FilterSidebar from '@/components/marketplace/FilterSidebar';
import TruckCard from '@/components/marketplace/TruckCard';
import { COLORS } from '@/lib/constants';

export default function FindTruckPage() {
  const [filters, setFilters] = useState({
    city: '',
    truckType: '',
    verifiedOnly: false,
  });

  const trucks = [
    {
      id: 1,
      owner: 'RK Transport',
      city: 'Ahmedabad',
      type: 'Container',
      capacity: '20 Ton',
      phone: '+919876543210',
      verified: true,
    },
    {
      id: 2,
      owner: 'Surat Movers',
      city: 'Surat',
      type: 'Open Truck',
      capacity: '10 Ton',
      phone: '+919812345678',
      verified: true,
    },
    {
      id: 3,
      owner: 'NorthLine',
      city: 'Delhi',
      type: 'Trailer',
      capacity: '30 Ton',
      phone: '+919700112233',
      verified: false,
    },
    {
      id: 4,
      owner: 'CityHaul',
      city: 'Mumbai',
      type: 'Container',
      capacity: '18 Ton',
      phone: '+919998887766',
      verified: true,
    },
    {
      id: 5,
      owner: 'Gujarat Logistics',
      city: 'Ahmedabad',
      type: 'Trailer',
      capacity: '35 Ton',
      phone: '+919876500000',
      verified: true,
    },
    {
      id: 6,
      owner: 'Fast Freight',
      city: 'Pune',
      type: 'Open Truck',
      capacity: '15 Ton',
      phone: '+919955443322',
      verified: false,
    },
  ];

  const filtered = useMemo(() => {
    return trucks.filter((truck) => {
      if (filters.verifiedOnly && !truck.verified) return false;

      if (
        filters.city &&
        !truck.city.toLowerCase().includes(filters.city.toLowerCase())
      ) {
        return false;
      }

      if (
        filters.truckType &&
        !truck.type.toLowerCase().includes(filters.truckType.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50 top-19 relative">

      {/* Hero Header (UPDATED) */}
      <section
        className="py-16 px-4 mb-12"
        style={{
          background: `linear-gradient(135deg, ${COLORS.darkNavy}, ${COLORS.primary})`,
        }}
      >
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Trucks
          </h1>

          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Search and connect with verified truck owners across India.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
              />
            </div>
          </aside>

          {/* Truck Listings */}
          <main className="lg:col-span-3">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <h2
                className="text-xl font-semibold"
                style={{ color: COLORS.darkNavy }}
              >
                Available Trucks
              </h2>

              <span className="text-sm text-gray-600">
                {filtered.length} truck
                {filtered.length !== 1 ? 's' : ''} found
              </span>
            </div>

            {filtered.length === 0 ? (
              <div className="bg-white rounded-xl p-10 text-center shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700">
                  No Trucks Found
                </h3>
                <p className="text-gray-500 mt-2">
                  Try changing your filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map((truck) => (
                  <TruckCard
                    key={truck.id}
                    truck={truck}
                  />
                ))}
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
}