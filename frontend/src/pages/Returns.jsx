import { FaUndoAlt, FaBoxOpen, FaClock, FaCheckCircle } from "react-icons/fa"

const Returns = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Returns & Refunds</h1>
          <p className="text-gray-600">
            Easy and hassle-free returns for your peace of mind
          </p>
        </div>

        {/* Highlight Card */}
        <div className="bg-white shadow rounded-xl p-6 mb-10 text-center">
          <FaClock className="text-blue-600 text-4xl mx-auto mb-3" />
          <h2 className="text-xl font-semibold mb-2">
            7-Day Return Policy
          </h2>
          <p className="text-gray-600">
            Return your product within <strong>7 days</strong> of delivery if you are not satisfied.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <FaBoxOpen className="text-orange-500 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold mb-2">1. Request Return</h3>
            <p className="text-gray-600 text-sm">
              Contact our support team to initiate a return request.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <FaUndoAlt className="text-green-500 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold mb-2">2. Pickup or Drop</h3>
            <p className="text-gray-600 text-sm">
              We’ll arrange pickup or guide you to the nearest drop point.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <FaCheckCircle className="text-blue-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold mb-2">3. Refund Processed</h3>
            <p className="text-gray-600 text-sm">
              Refund will be processed after quality verification.
            </p>
          </div>

        </div>

        {/* Note */}
        <div className="mt-10 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <p className="text-sm text-gray-700">
            ⚠️ Products must be unused, in original packaging, and include all accessories.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Returns

