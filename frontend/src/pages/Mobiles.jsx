import { FaMobileAlt, FaBolt, FaCamera, FaBatteryFull } from "react-icons/fa"
import samsung from "../assets/samsung1.webp"
import redmi from "../assets/redmi.webp"
import realme from "../assets/realmi2.jpg"

const Mobiles = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <FaMobileAlt className="text-5xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Mobiles</h1>
          <p className="text-sm md:text-base">
            Explore the latest smartphones at the best prices
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow p-4 text-center">
          <FaBolt className="text-yellow-500 text-3xl mx-auto mb-2" />
          <p className="font-semibold text-sm">Fast Performance</p>
        </div>

        <div className="bg-white rounded-xl shadow p-4 text-center">
          <FaCamera className="text-blue-500 text-3xl mx-auto mb-2" />
          <p className="font-semibold text-sm">High Camera Quality</p>
        </div>

        <div className="bg-white rounded-xl shadow p-4 text-center">
          <FaBatteryFull className="text-green-500 text-3xl mx-auto mb-2" />
          <p className="font-semibold text-sm">Long Battery Life</p>
        </div>

        <div className="bg-white rounded-xl shadow p-4 text-center">
          <FaMobileAlt className="text-purple-500 text-3xl mx-auto mb-2" />
          <p className="font-semibold text-sm">Latest Models</p>
        </div>
      </div>

      {/* Product Cards */}
      <div className="container mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Available Smartphones
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Samsung */}
          <div className="bg-white shadow rounded-xl p-5 hover:shadow-lg transition">
            <img
              src={samsung}
              alt="Samsung Galaxy"
              className="h-40 w-full object-contain rounded mb-4 hover:scale-105 transition"
            />
            <h3 className="font-semibold mb-1">Samsung Galaxy Series</h3>
            <p className="text-sm text-gray-600 mb-3">
              Powerful performance with stunning display.
            </p>
            
          </div>

          {/* Redmi */}
          <div className="bg-white shadow rounded-xl p-5 hover:shadow-lg transition">
            <img
              src={redmi}
              alt="Redmi Note"
              className="h-40 w-full object-contain rounded mb-4 hover:scale-105 transition"
            />
            <h3 className="font-semibold mb-1">Redmi Note Series</h3>
            <p className="text-sm text-gray-600 mb-3">
              Best value phones with premium features.
            </p>
           
          </div>

          {/* Realme */}
          <div className="bg-white shadow rounded-xl p-5 hover:shadow-lg transition">
            <img
              src={realme}
              alt="Realme Smartphone"
              className="h-40 w-full object-contain rounded mb-4 hover:scale-105 transition"
            />
            <h3 className="font-semibold mb-1">Realme Smartphones</h3>
            <p className="text-sm text-gray-600 mb-3">
              Stylish design with fast charging.
            </p>
          
          </div>

        </div>
      </div>

    </div>
  )
}

export default Mobiles


