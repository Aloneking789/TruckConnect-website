'use client';

import { FaCheckCircle } from 'react-icons/fa';
import { COLORS } from '@/lib/constants';

export default function Metrics() {
  const metrics = [
    { label: 'Loads Posted', value: '10,000+' },
    { label: 'Trucks', value: '5,000+' },
    { label: 'Cities', value: '500+' },
    { label: '24x7 Support', icon: FaCheckCircle },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              {metric.value ? (
                <>
                  <div className="text-4xl font-bold mb-2" style={{ color: COLORS.primary }}>
                    {metric.value}
                  </div>
                </>
              ) : (
                <div className="text-4xl mb-2" style={{ color: COLORS.primary }}>
                  <metric.icon />
                </div>
              )}
              <p className="text-gray-700 font-semibold">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

