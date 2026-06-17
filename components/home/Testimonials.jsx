'use client';

import Image from 'next/image';
import { COLORS } from '@/lib/constants';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Truck Owner',
      text: 'TruckConnect has been a game-changer for my business. I get consistent loads and earn 40% more than before.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    },
    {
      name: 'Priya Sharma',
      role: 'Shipper',
      text: 'Reliable and transparent. The platform made finding trusted transporters so much easier. Highly recommended!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    },
    {
      name: 'Amit Patel',
      role: 'Transport Company',
      text: 'Outstanding support team. Our loads are matched within minutes. Best logistics platform in India!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: COLORS.darkNavy }}
          >
            What Our Users Say
          </h2>
          <p className="text-gray-700 text-lg">
            Trusted by thousands of logistics professionals
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-between gap-4"
            >

              {/* LEFT SIDE (TEXT) */}
              <div className="flex-1">
                {/* Name */}
                <h3
                  className="font-bold text-lg"
                  style={{ color: COLORS.darkNavy }}
                >
                  {t.name}
                </h3>

                {/* Role */}
                <p className="text-sm text-gray-500">{t.role}</p>

                {/* Rating */}
                <div className="flex gap-1 mt-2 text-yellow-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-base">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              {/* RIGHT SIDE (IMAGE) */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}