'use client';

import { COLORS, COMPANY } from '@/lib/constants';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/919974092166?text=Hello%20TruckConnect!%20I%20would%20like%20to%20know%20more%20about%20your%20services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-40 flex items-center justify-center"
      style={{ backgroundColor: COLORS.success }}
      title="Chat on WhatsApp"
    >
      <svg
        className="w-6 h-6 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.782 1.176l-.308.156-3.22-.842.857 3.135.236.374a9.86 9.86 0 001.516 5.031c2.122 2.856 5.588 3.785 8.744 1.66z" />
      </svg>
    </a>
  );
}
