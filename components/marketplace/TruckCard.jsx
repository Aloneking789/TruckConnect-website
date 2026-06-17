'use client';

import Link from 'next/link';
import { FaPhone, FaWhatsapp, FaTruck } from 'react-icons/fa';
import { COLORS } from '@/lib/constants';

export default function TruckCard({ truck }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md border-t-4" style={{ borderTopColor: COLORS.primary }}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 bg-gray-50 rounded-full w-14 h-14 flex items-center justify-center text-2xl text-white" style={{ backgroundColor: COLORS.primary }}>
          <FaTruck />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-lg" style={{ color: COLORS.darkNavy }}>{truck.owner}</h3>
          <p className="text-sm text-gray-600">{truck.type} • {truck.capacity}</p>
          <p className="text-xs text-gray-500 mt-1">Location: {truck.city}</p>
        </div>

        <div className="flex flex-col items-end gap-2">
          {truck.verified && (
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">Verified</span>
          )}
          <div className="flex gap-2">
            <a href={`tel:${truck.phone}`} className="px-3 py-2 rounded-md border text-sm font-semibold" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>
              <FaPhone className="inline mr-1" /> Call
            </a>
            <a href={`https://wa.me/${truck.phone.replace(/[^0-9]/g,'')}`} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md text-white font-semibold" style={{ backgroundColor: COLORS.success }}>
              <FaWhatsapp className="inline mr-1" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
