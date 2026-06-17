'use client';

import Image from 'next/image';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import { COLORS } from '@/lib/constants';

export default function AboutSection() {
  return (


<section className="py-12 md:py-20 bg-gradient-to-br from-[#E8F0FE] via-white to-[#f0f2f5] overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-10 md:mb-16">
      <span
        className="inline-block px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4"
        style={{
          backgroundColor: '#E8F1FF',
          color: COLORS.primary,
        }}
      >
        About TruckConnect
      </span>

      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        style={{ color: COLORS.darkNavy }}
      >
        Connecting India's Logistics Network
      </h2>

      <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600">
        TruckConnect is a technology-driven logistics platform helping
        transporters, truck owners, and shippers connect seamlessly for
        faster, smarter, and more reliable freight movement across India.
      </p>
    </div>

    {/* Content */}
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* Left Side */}
      <div className="order-2 lg:order-1">
        <h3
          className="text-2xl sm:text-3xl font-bold mb-6"
          style={{ color: COLORS.darkNavy }}
        >
          CLOUD TRUCK PRIVATE LIMITED
        </h3>

        <p className="text-gray-600 leading-relaxed mb-8">
          TruckConnect, operated by CLOUD TRUCK PRIVATE LIMITED, is committed
          to transforming logistics through technology. Our platform bridges
          the gap between truck owners and businesses, enabling efficient
          load matching, real-time communication, and transparent transport
          operations.
        </p>

        <div className="space-y-6">

          <div className="flex items-start gap-4">
            <Building2
              className="flex-shrink-0 mt-1"
              size={22}
              style={{ color: COLORS.primary }}
            />
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Registered Office
              </h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Shop N F3 B-A Takshashila, Orient,
                <br />
                Naroda Road, Nikol,
                <br />
                Ahmedabad – 380049,
                Gujarat, India
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone
              size={20}
              style={{ color: COLORS.primary }}
            />
            <span className="text-gray-700 text-sm sm:text-base">
              +91 9974092166
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Mail
              size={20}
              style={{ color: COLORS.primary }}
            />
            <span className="text-gray-700 text-sm sm:text-base break-all">
              info@truckconnect.in
            </span>
          </div>

          <div className="flex items-center gap-4">
            <MapPin
              size={20}
              style={{ color: COLORS.primary }}
            />
            <span className="text-gray-700 text-sm sm:text-base">
              Ahmedabad, Gujarat, India
            </span>
          </div>

        </div>
      </div>

      {/* Right Side Image */}
      <div className="relative order-1 lg:order-2">
        <div className="overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl">
          <Image
            src="/image/truck.jpg"
            alt="TruckConnect Logistics"
            width={1200}
            height={800}
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
          />
        </div>

        {/* Floating Card */}
        <div
          className="
            mt-4 lg:mt-0
            lg:absolute lg:-bottom-6 lg:-left-6
            bg-white p-4 sm:p-6
            rounded-2xl shadow-xl
            max-w-full lg:max-w-xs
          "
        >
          <h4
            className="font-bold text-lg sm:text-xl mb-2"
            style={{ color: COLORS.darkNavy }}
          >
            Trusted Logistics Partner
          </h4>

          <p className="text-gray-600 text-sm">
            Helping transporters and businesses move goods efficiently
            across India with a reliable digital logistics ecosystem.
          </p>
        </div>
      </div>

    </div>

    {/* Map Section */}
    <div className="mt-12 md:mt-20">
      <h3
        className="text-2xl md:text-3xl font-bold text-center mb-8"
        style={{ color: COLORS.darkNavy }}
      >
        Our Location
      </h3>

      <div className="rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://maps.google.com/maps?q=Ahmedabad%20Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          className="w-full h-[250px] sm:h-[350px] md:h-[450px]"
          loading="lazy"
        />
      </div>
    </div>

  </div>
</section>

   ) }