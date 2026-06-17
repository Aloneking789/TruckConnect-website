'use client';

import Link from 'next/link';
import { FaBox, FaTruck, FaMapPin, FaCheckCircle } from 'react-icons/fa';
import { COLORS } from '@/lib/constants';

export default function ProductsShowcase() {
  const products = [
    {
      id: 1,
      title: 'Loads Marketplace',
      description: 'Post and find loads instantly with AI-powered matching. Connect with verified shippers and truck owners across India.',
      stat: '10,000+ Loads Posted Monthly',
      icon: FaBox,
      href: '/marketplace',
      color: COLORS.primary,
    },
    {
      id: 2,
      title: 'Truck Directory',
      description: 'Browse verified trucks and transporters. Search by location, capacity, and truck type in real-time.',
      stat: '5,000+ Active Trucks',
      icon: FaTruck,
      href: '/find-truck',
      color: COLORS.secondary,
    },
    {
      id: 3,
      title: 'GPS Tracking',
      description: 'Real-time shipment tracking with live updates. Monitor your freight from pickup to delivery.',
      stat: 'Coming Soon',
      icon: FaMapPin,
      href: '#',
      color: '#FF6B6B',
    },
    {
      id: 4,
      title: 'Verified Profiles',
      description: 'GST-verified transporters and shippers. Build trust with certification and verification badges.',
      stat: '500+ Verified Partners',
      icon: FaCheckCircle,
      href: '/directory',
      color: COLORS.success,
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: COLORS.darkNavy }}
          >
            Empower Your Logistics Business
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Complete ecosystem of tools to manage, grow, and scale your transportation operations across India
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group"
            >
              <div
                className="h-full p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 border-t-4 bg-white cursor-pointer"
                style={{ borderTopColor: product.color }}
              >
                {/* Icon */}
                <div className="text-4xl mb-4" style={{ color: product.color }}>
                  <product.icon />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: COLORS.darkNavy }}
                >
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-4 min-h-20">
                  {product.description}
                </p>

                {/* Stat */}
                <div
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-white text-center"
                  style={{ backgroundColor: product.color }}
                >
                  {product.stat}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="rounded-xl p-12 text-center"
          style={{ backgroundColor: COLORS.lightBlue }}
        >
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: COLORS.darkNavy }}
          >
            Ready to Transform Your Logistics Business?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join thousands of shippers, truck owners, and transporters already using TruckConnect
          </p>
          <Link
            href="/register"
            className="px-8 py-3 rounded-lg font-semibold text-white transition-all transform hover:scale-105 inline-block"
            style={{ backgroundColor: COLORS.primary }}
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </div>
  );
}
