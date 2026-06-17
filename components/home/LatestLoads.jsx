'use client';

import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
import { COLORS } from '@/lib/constants';

export default function LatestLoads() {
  const loads = [
    {
      id: 1,
      from: 'Ahmedabad',
      to: 'Mumbai',
      weight: '5 Ton',
      material: 'Electronics',
      truckType: 'Truck',
      time: '2 hours ago',
      verified: true,
    },
    {
      id: 2,
      from: 'Surat',
      to: 'Pune',
      weight: '10 Ton',
      material: 'Industrial Equipment',
      truckType: 'Trailer',
      time: '4 hours ago',
      verified: true,
    },
    {
      id: 3,
      from: 'Delhi',
      to: 'Kolkata',
      weight: '8 Ton',
      material: 'Textiles',
      truckType: 'Truck',
      time: '6 hours ago',
      verified: false,
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.darkNavy }}>
            Latest Loads
          </h2>
          <p className="text-gray-700 text-lg">Browse recent shipments from shippers across India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {loads.map((load) => (
            <div
              key={load.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4"
              style={{ borderLeftColor: COLORS.primary }}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-lg" style={{ color: COLORS.darkNavy }}>
                      {load.from} → {load.to}
                    </span>
                    {load.verified && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded flex items-center gap-1">
                        <FaCheckCircle className="w-3 h-3" /> Verified
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{load.time}</p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-4 pb-4 border-b" style={{ borderBottomColor: COLORS.gray200 }}>
                <p className="text-sm text-gray-700">
                  <strong>Weight:</strong> {load.weight}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Material:</strong> {load.material}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Truck Type:</strong> {load.truckType}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  className="flex-1 px-3 py-2 border rounded-lg font-semibold text-sm transition-colors"
                  style={{
                    borderColor: COLORS.primary,
                    color: COLORS.primary,
                  }}
                >
                  Call
                </button>
                <button
                  className="flex-1 px-3 py-2 text-white rounded-lg font-semibold text-sm transition-colors"
                  style={{ backgroundColor: COLORS.success }}
                >
                  WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/marketplace"
            className="px-8 py-3 rounded-lg font-semibold text-white transition-all transform hover:scale-105"
            style={{ backgroundColor: COLORS.primary }}
          >
            View All Loads
          </Link>
        </div>
      </div>
    </div>
  );
}
