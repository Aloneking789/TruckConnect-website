"use client";

import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { COLORS } from "@/lib/constants";

export default function MarketplaceClient() {
  const [tab, setTab] = useState("loads");
  const [expanded, setExpanded] = useState(null);

  const loads = [
    {
      id: 1,
      from: "Ahmedabad",
      to: "Mumbai",
      material: "Steel Pipes",
      weight: "15 Tons",
      truck: "Trailer",
      time: "2 hrs ago",
      verified: true,
      phone: "919974092166",
    },
    {
      id: 2,
      from: "Delhi",
      to: "Jaipur",
      material: "Textiles",
      weight: "8 Tons",
      truck: "Mini Truck",
      time: "5 hrs ago",
      verified: true,
      phone: "919974092166",
    },
    {
      id: 3,
      from: "Surat",
      to: "Pune",
      material: "Fabric Rolls",
      weight: "12 Tons",
      truck: "Container",
      time: "1 day ago",
      verified: true,
      phone: "919974092166",
    },
  ];

  return (
    <main className="min-h-screen bg-skyblue-50 relative">

      {/* HERO (MATCHED STYLE) */}
      <section
        className="py-16 px-4"
        style={{
          background: `linear-gradient(135deg, ${COLORS.darkNavy}, ${COLORS.primary})`,
        }}
      >
        <div className="max-w-7xl mx-auto text-center text-white top-6 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Marketplace
          </h1>
          <p className="text-lg text-white/90">
            Find Loads & Trucks across India
          </p>

          {/* TABS */}
          <div className="mt-8 flex justify-center">
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-full flex gap-2">

              <button
                onClick={() => setTab("loads")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  tab === "loads"
                    ? "bg-white text-[#1A4FBF]"
                    : "text-white"
                }`}
              >
                Find Loads
              </button>

              <button
                onClick={() => setTab("trucks")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  tab === "trucks"
                    ? "bg-white text-[#1A4FBF]"
                    : "text-white"
                }`}
              >
                Find Trucks
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* LOAD CARDS */}
        {tab === "loads" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {loads.map((load) => (
              <div
                key={load.id}
                onClick={() =>
                  setExpanded(expanded === load.id ? null : load.id)
                }
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition cursor-pointer border border-gray-100"
              >

                <div className="font-bold text-lg flex items-center gap-2">
                  <FaMapMarkerAlt style={{ color: COLORS.primary }} />
                  {load.from} → {load.to}
                </div>

                <p className="text-gray-600 mt-2">
                  {load.material} • {load.weight}
                </p>

                {load.verified && (
                  <span className="inline-block mt-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Verified
                  </span>
                )}

                {expanded === load.id && (
                  <div className="mt-5 space-y-3">

                    <a
                      href={`tel:${load.phone}`}
                      className="block text-center py-2 rounded-xl text-white"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      Call
                    </a>

                    <a
                      href={`https://wa.me/${load.phone}`}
                      target="_blank"
                      className="block bg-green-600 text-white py-2 rounded-xl text-center"
                    >
                      WhatsApp
                    </a>

                  </div>
                )}

              </div>
            ))}

          </div>
        )}

        {/* TRUCK TAB */}
        {tab === "trucks" && (
          <div className="text-center mt-20 text-gray-500">
            Trucks section coming soon...
          </div>
        )}

      </div>
    </main>
  );
}