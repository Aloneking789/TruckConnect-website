'use client';

import { FaBox, FaTruck, FaCheckCircle } from 'react-icons/fa';
import { COLORS } from '@/lib/constants';

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: 'Post Load',
      description: 'Share your freight details and requirements',
      icon: FaBox,
    },
    {
      num: 2,
      title: 'Get Truck Matches',
      description: 'Receive instant matches from verified transporters',
      icon: FaTruck,
    },
    {
      num: 3,
      title: 'Move Goods',
      description: 'Complete your shipment with real-time tracking',
      icon: FaCheckCircle,
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.darkNavy }}>
            How It Works
          </h2>
          <p className="text-gray-700 text-lg">Simple steps to get your shipment on the road</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              {/* Step Card */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center border-t-4"
                style={{ borderTopColor: COLORS.primary }}>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <step.icon />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: COLORS.darkNavy }}>
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>

              {/* Arrow */}
              {step.num < 3 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-2xl" style={{ color: COLORS.primary }}>
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
