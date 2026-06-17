import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export const metadata = {
  title: "Contact Us | TruckConnect",
  description: "Get in touch with TruckConnect for logistics, truck booking, and freight support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          {/* <span className="text-[#1A4FBF] font-semibold uppercase tracking-wider">
            Contact Us
          </span> */}

          <h1 className="text-3xl md:text-5xl font-bold mt-3 text-gray-900">
            Let's Connect
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Have questions about loads, trucks, transport services, or business
            partnerships? Our team is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Details */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(26,79,191,0.15)] hover:shadow-[0_20px_60px_rgba(26,79,191,0.25)] hover:-translate-y-1 transition-all duration-300">

            <h2 className="text-2xl font-bold mb-8 text-gray-900">
              Contact Information
            </h2>

            <div className="space-y-6">

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaPhoneAlt className="text-[#1A4FBF]" />
                </div>

                <div>
                  <h5 className="font-semibold">Phone</h5>
                  <p className="text-gray-600">+91 9974092166</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-[#1A4FBF]" />
                </div>

                <div>
                  <h5 className="font-semibold">Email</h5>
                  <p className="text-gray-600">info@truckconnect.in</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-[#1A4FBF]" />
                </div>

                <div>
                  <h5 className="font-semibold">Office Address</h5>
                  <p className="text-gray-600">
                    Shop N F3 B-A Takshashila, Orient,
                    <br />
                    Naroda Road, Nikol,
                    <br />
                    Ahmedabad - 380049,
                    <br />
                    Gujarat, India
                  </p>
                </div>
              </div>

            </div>

            <a
              href="https://wa.me/919974092166"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(26,79,191,0.15)] hover:shadow-[0_20px_60px_rgba(26,79,191,0.25)] hover:-translate-y-1 transition-all duration-300">

            <h2 className="text-2xl font-bold mb-8 text-gray-900">
              Send a Message
            </h2>

            <form className="space-y-5">

              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#1A4FBF]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#1A4FBF]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#1A4FBF]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#1A4FBF]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1A4FBF] hover:bg-[#163f98] text-white py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-md overflow-hidden">
          <iframe
            title="TruckConnect Location"
            src="https://maps.google.com/maps?q=Ahmedabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            loading="lazy"
          />
        </div>

      </div>
    </main>
  );
}