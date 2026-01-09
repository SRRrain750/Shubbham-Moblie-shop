import {
  FaHeadphones,
  FaBatteryFull,
  FaMobileAlt,
  FaBolt,
} from "react-icons/fa"

// ✅ Import images
import chargerImg from "../assets/charger.png"
import headphoneImg from "../assets/headphones.jpeg"
import coverImg from "../assets/cover.jpeg"

const Accessories = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <FaHeadphones className="text-5xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Mobile Accessories</h1>
          <p className="text-sm md:text-base">
            Chargers, headphones, covers and more
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow p-4 text-center">
          <FaBolt className="text-yellow-500 text-3xl mx-auto mb-2" />
          <p className="font-semibold text-sm">Fast Charging</p>
        </div>

        <div className="bg-white rounded-xl shadow p-4 text-center">
          <FaHeadphones className="text-purple-500 text-3xl mx-auto mb-2" />
          <p className="font-semibold text-sm">High Sound Quality</p>
        </div>

        <div className="bg-white rounded-xl shadow p-4 text-center">
          <FaMobileAlt className="text-blue-500 text-3xl mx-auto mb-2" />
          <p className="font-semibold text-sm">Premium Covers</p>
        </div>

        <div className="bg-white rounded-xl shadow p-4 text-center">
          <FaBatteryFull className="text-green-500 text-3xl mx-auto mb-2" />
          <p className="font-semibold text-sm">Power Banks</p>
        </div>
      </div>

      {/* Accessories Cards */}
      <div className="container mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Popular Accessories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Charger */}
          <div className="bg-white shadow rounded-xl p-5 hover:shadow-lg transition">
            <img
              src={chargerImg}
              alt="Fast Charger"
              className="h-40 w-full object-contain bg-gray-100 rounded mb-4"
            />
            <h3 className="font-semibold mb-1">Fast Charger</h3>
            <p className="text-sm text-gray-600 mb-3">
              Quick charge with safety protection.
            </p>
          
          </div>

          {/* Headphones */}
          <div className="bg-white shadow rounded-xl p-5 hover:shadow-lg transition">
            <img
              src={headphoneImg}
              alt="Wireless Headphones"
              className="h-40 w-full object-contain bg-gray-100 rounded mb-4"
            />
            <h3 className="font-semibold mb-1">Wireless Headphones</h3>
            <p className="text-sm text-gray-600 mb-3">
              Crystal clear sound and deep bass.
            </p>
           
          </div>

          {/* Mobile Cover */}
          <div className="bg-white shadow rounded-xl p-5 hover:shadow-lg transition">
            <img
              src={coverImg}
              alt="Mobile Cover"
              className="h-40 w-full object-contain bg-gray-100 rounded mb-4"
            />
            <h3 className="font-semibold mb-1">Mobile Back Cover</h3>
            <p className="text-sm text-gray-600 mb-3">
              Stylish & protective phone covers.
            </p>
           
          </div>

        </div>
      </div>

    </div>
  )
}

export default Accessories
