"use client";

import { useState } from "react";

export default function Hero() {
  const [mode, setMode] = useState("load");

  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/truck-video.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl">

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          India’s Smart Trucking & Logistics Network
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Connect Shippers, Transporters & Truck Owners in Real-Time
        </p>

        {/* Search Box */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6">

          {/* Toggle */}
          <div className="flex justify-center mb-4 gap-3">
            <button
              onClick={() => setMode("load")}
              className={`px-5 py-2 rounded-full transition ${
                mode === "load"
                  ? "bg-green-500 text-white"
                  : "bg-white/10 text-white"
              }`}
            >
              Find Load
            </button>

            <button
              onClick={() => setMode("truck")}
              className={`px-5 py-2 rounded-full transition ${
                mode === "truck"
                  ? "bg-blue-500 text-white"
                  : "bg-white/10 text-white"
              }`}
            >
              Find Truck
            </button>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

            <input
              type="text"
              placeholder="From City"
              className="px-4 py-3 rounded-lg bg-white text-black outline-none"
            />

            <input
              type="text"
              placeholder="To City"
              className="px-4 py-3 rounded-lg bg-white text-black outline-none"
            />

            <button
              className={`px-6 py-3 rounded-lg font-semibold text-white transition ${
                mode === "load"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {mode === "load" ? "Search Loads" : "Search Trucks"}
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}