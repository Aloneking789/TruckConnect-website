import Link from "next/link";
import Image from "next/image";

import {
  IoMdCall,
  IoMdMail,
} from "react-icons/io";

import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B4B] text-white mt-16">

      <div className="container mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            {/* LOGO */}
            <div className="flex items-center gap-3 mb-3">
              <Link href="/" className="flex items-center">
                    <Image
                        src="/image/truck-logo.png"
                        alt="Truck Connect Logo"
                        width={180}
                        height={60}
                        className="h-10 w-auto object-contain"
                        priority
                    />
                </Link>

              <h2 className="text-2xl font-bold">
                TruckConnect
              </h2>
            </div>

            <p className="text-gray-300 mb-4">
              India's Trusted Truck & Load Marketplace
            </p>

            {/* SOCIAL MEDIA */}
            <div className="flex gap-3 mt-4">
              <a className="p-2 bg-white/10 rounded-full hover:bg-blue-600 transition">
                <FaFacebookF />
              </a>

              <a className="p-2 bg-white/10 rounded-full hover:bg-pink-500 transition">
                <FaInstagram />
              </a>

              <a className="p-2 bg-white/10 rounded-full hover:bg-blue-500 transition">
                <FaLinkedinIn />
              </a>

              <a className="p-2 bg-white/10 rounded-full hover:bg-black transition">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-bold text-lg mb-3">Company</h3>

            <p>CIN: U52290GJ2026PTC173772</p>
            <p>PAN: AANCC5682Q</p>
            <p>TAN: AHMC10398D</p>
            <p className="mt-2 text-gray-300 text-sm">
              Registered logistics platform operating across India.
            </p>
          </div>

          {/* QUICK LINKS (IMPORTANT FOR PRO) */}
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>

            <p className="hover:text-blue-400 cursor-pointer">Find Loads</p>
            <p className="hover:text-blue-400 cursor-pointer">Find Trucks</p>
            <p className="hover:text-blue-400 cursor-pointer">Marketplace</p>
            <p className="hover:text-blue-400 cursor-pointer">Post Load</p>
            <p className="hover:text-blue-400 cursor-pointer">Contact Us</p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-bold text-lg mb-3">Contact</h3>

            <p className="flex items-center gap-2">
              <span className="p-2 bg-blue-600 rounded-full">
                <IoMdCall />
              </span>
              +91 9974092166
            </p>

            <p className="flex items-center gap-2 mt-2">
              <span className="p-2 bg-blue-600 rounded-full">
                <IoMdMail />
              </span>
              info@truckconnect.in
            </p>

            <p className="flex items-center gap-2 mt-2">
              <span className="p-2 bg-blue-600 rounded-full">
                <FaMapMarkerAlt />
              </span>
              Ahmedabad, Gujarat
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <hr className="my-8 border-gray-600" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-300">

          <p>© 2026 TruckConnect. All Rights Reserved.</p>

          <div className="flex gap-4">
            <p className="hover:text-white cursor-pointer">Privacy Policy</p>
            <p className="hover:text-white cursor-pointer">Terms</p>
            <p className="hover:text-white cursor-pointer">Support</p>
          </div>

        </div>

      </div>

    </footer>
  );
}