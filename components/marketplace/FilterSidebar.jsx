'use client';

import { FaMapMarkerAlt, FaTruck } from 'react-icons/fa';
import { COLORS } from '@/lib/constants';

export default function FilterSidebar({ filters, setFilters }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h4 className="font-semibold mb-4" style={{ color: COLORS.darkNavy }}>Filters</h4>

      <label className="block mb-3">
        <span className="text-sm font-medium text-gray-700">City</span>
        <div className="mt-2 relative">
          <input
            type="text"
            value={filters.city}
            onChange={(e) => setFilters(prev => ({ ...prev, city: e.target.value }))}
            placeholder="e.g. Ahmedabad"
            className="w-full px-3 py-2 rounded-lg border"
            style={{ borderColor: '#E5E7EB' }}
          />
        </div>
      </label>

      <label className="block mb-3">
        <span className="text-sm font-medium text-gray-700">Truck Type</span>
        <div className="mt-2">
          <input
            type="text"
            value={filters.truckType}
            onChange={(e) => setFilters(prev => ({ ...prev, truckType: e.target.value }))}
            placeholder="e.g. Container"
            className="w-full px-3 py-2 rounded-lg border"
            style={{ borderColor: '#E5E7EB' }}
          />
        </div>
      </label>

      <label className="flex items-center gap-3 mt-4">
        <input
          type="checkbox"
          checked={filters.verifiedOnly}
          onChange={(e) => setFilters(prev => ({ ...prev, verifiedOnly: e.target.checked }))}
          className="w-4 h-4"
        />
        <span className="text-sm">Verified only</span>
      </label>

      <div className="mt-6">
        <button
          onClick={() => setFilters({ city: '', truckType: '', verifiedOnly: false })}
          className="w-full btn btn-secondary btn-sm"
          style={{ borderColor: COLORS.primary }}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
