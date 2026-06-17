'use client';

import { FaCheckCircle, FaClipboardList, FaLock, FaBolt, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { COLORS } from '@/lib/constants';

export default function WhyTruckConnect() {
  const features = [
    {
      title: 'Verified Transporters',
      description: 'All transporters are verified and certified',
      icon: FaCheckCircle,
    },
    {
      title: 'GST Verification',
      description: 'Complete GST verification for all business profiles',
      icon: FaClipboardList,
    },
    {
      title: 'Secure Platform',
      description: 'Your data is encrypted and secured with latest protocols',
      icon: FaLock,
    },
    {
      title: 'Fast Matching',
      description: 'AI-powered matching to find perfect trucks instantly',
      icon: FaBolt,
    },
    {
      title: 'Pan India Network',
      description: 'Connect with transporters across all major cities',
      icon: FaMapMarkerAlt,
    },
    {
      title: 'Dedicated Support',
      description: '24x7 customer support for all your needs',
      icon: FaPhone,
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.darkNavy }}>
            Why TruckConnect
          </h2>
          <p className="text-gray-700 text-lg">Industry-leading features designed for your success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4" style={{ color: COLORS.primary }}>
                <feature.icon />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.darkNavy }}>
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

