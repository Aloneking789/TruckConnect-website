import {
  FaSearch,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaTruck,
} from "react-icons/fa";
import Image from "next/image";
import { FaArrowRight} from "react-icons/fa";

export const metadata = {
  title: "Transporter Directory | TruckConnect",
  description:
    "Find verified transporters, logistics companies, and truck operators across India.",
};

export default function DirectoryPage() {
  const transporters = [
    {
      id: 1,
      company: "Shree Logistics",
      location: "Ahmedabad, Gujarat",
      services: "Full Truck Load (FTL), Part Load, Express Delivery",
      contact: "+91 9876543210",
      verified: true,
    },
    {
      id: 2,
      company: "National Roadways",
      location: "Mumbai, Maharashtra",
      services: "Long Haul Transport, Industrial Freight",
      contact: "+91 9988776655",
      verified: true,
    },
    {
      id: 3,
      company: "Speed Cargo Movers",
      location: "Delhi, NCR",
      services: "Container Transport, E-Commerce Logistics",
      contact: "+91 9123456789",
      verified: true,
    },
    {
      id: 4,
      company: "South India Transport",
      location: "Bangalore, Karnataka",
      services: "FTL, Refrigerated Trucks, Warehousing",
      contact: "+91 9871234567",
      verified: true,
    },
    {
      id: 5,
      company: "Pune Freight Services",
      location: "Pune, Maharashtra",
      services: "Industrial Goods Transport",
      contact: "+91 9000012345",
      verified: true,
    },
    {
      id: 6,
      company: "Surat Cargo Movers",
      location: "Surat, Gujarat",
      services: "Textile Logistics, Full Truck Loads",
      contact: "+91 9988998899",
      verified: true,
    },
  ];

  const seoCities = [
  {
    name: "Ahmedabad",
    image: "/image/ahmedabad.jpg",
    transporters: "250+ Transporters",
  },
  {
    name: "Surat",
    image: "/image/surat-city.jpg",
    transporters: "180+ Transporters",
  },
  {
    name: "Mumbai",
    image: "/image/mumbai.jpg",
    transporters: "500+ Transporters",
  },
  {
    name: "Delhi",
    image: "/image/delhi.jpg",
    transporters: "450+ Transporters",
  },
  {
    name: "Pune",
    image: "/image/pune.jpg",
    transporters: "200+ Transporters",
  },
  {
    name: "Bangalore",
    image: "/image/bangalore.jpg",
    transporters: "350+ Transporters",
  },
];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E8F0FE] via-white to-[#DCE8FF]">

      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4">

          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block bg-blue-100 text-[#1A4FBF] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              VERIFIED DIRECTORY
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-5">
              Find Trusted
              <span className="text-[#1A4FBF]"> Transporters</span>
            </h1>

            <p className="text-gray-600 text-lg">
              Connect with verified logistics companies, truck owners,
              and transport service providers across India.
            </p>
          </div>

        </div>
      </section>

      {/* Search Section */}
      <section className="pb-10">
        <div className="container mx-auto px-4">

          <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-[0_15px_50px_rgba(26,79,191,0.12)]">

            <h2 className="text-2xl font-bold mb-6">
              Search Transporters
            </h2>

            <div className="grid md:grid-cols-4 gap-4">

              <input
                type="text"
                placeholder="Company Name"
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#1A4FBF]"
              />

              <input
                type="text"
                placeholder="City"
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#1A4FBF]"
              />

              <input
                type="text"
                placeholder="State"
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#1A4FBF]"
              />

              <button className="bg-[#1A4FBF] hover:bg-[#163f98] text-white rounded-xl px-6 py-3 font-semibold flex items-center justify-center gap-2">
                <FaSearch />
                Search
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* Transporter Cards */}
      <section className="py-10">
        <div className="container mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-8">

            {transporters.map((transporter) => (
              <div
                key={transporter.id}
                className="bg-white rounded-3xl p-8 border border-blue-100 shadow-[0_15px_50px_rgba(26,79,191,0.12)] hover:shadow-[0_25px_80px_rgba(26,79,191,0.18)] transition-all duration-300"
              >

                <div className="flex justify-between items-start mb-5">

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {transporter.company}
                    </h3>

                    <div className="flex items-center gap-2 mt-2 text-gray-600">
                      <FaMapMarkerAlt className="text-[#1A4FBF]" />
                      {transporter.location}
                    </div>
                  </div>

                  {transporter.verified && (
                    <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-2 rounded-full text-sm font-semibold">
                      <FaCheckCircle />
                      GST Verified
                    </div>
                  )}

                </div>

                <div className="flex items-start gap-3 mb-5">
                  <FaTruck className="text-[#1A4FBF] mt-1" />

                  <p className="text-gray-600">
                    {transporter.services}
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <FaPhoneAlt className="text-[#1A4FBF]" />
                  <span>{transporter.contact}</span>
                </div>

                <div className="flex flex-wrap gap-3">

                  <a
                    href={`tel:${transporter.contact}`}
                    className="bg-[#1A4FBF] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#163f98] transition"
                  >
                    Contact
                  </a>

                  <a
                    href={`https://wa.me/${transporter.contact.replace(
                      /\D/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-700 transition flex items-center gap-2"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </a>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="py-20">
  <div className="container mx-auto px-4">

    <div className="text-center mb-12">
      <span className="inline-block bg-blue-100 text-[#1A4FBF] px-4 py-2 rounded-full text-sm font-semibold mb-4">
        POPULAR CITIES
      </span>

      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Explore Transporters by City
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto">
        Find verified transport companies and truck operators
        across India's major logistics hubs.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {seoCities.map((city, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl h-[320px] cursor-pointer shadow-[0_15px_50px_rgba(26,79,191,0.15)] hover:shadow-[0_25px_80px_rgba(26,79,191,0.25)] transition-all duration-500"
        >

          <Image
            src={city.image}
            alt={city.name}
            fill
            className="object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B4B] via-[#0D1B4B]/50 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

            <div className="flex items-center gap-2 mb-2">
              <FaMapMarkerAlt />
              <span className="text-sm">
                Logistics Hub
              </span>
            </div>

            <h3 className="text-3xl font-bold mb-2">
              {city.name}
            </h3>

            <p className="text-blue-100 mb-4">
              {city.transporters}
            </p>

            <button className="flex items-center gap-2 bg-white text-[#1A4FBF] px-5 py-2 rounded-full font-semibold group-hover:bg-[#1A4FBF] group-hover:text-white transition">
              View Transporters
              <FaArrowRight />
            </button>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

    </main>
  );
}