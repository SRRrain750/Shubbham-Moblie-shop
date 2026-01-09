import { FaClipboardList, FaClock, FaStore, FaInfoCircle } from "react-icons/fa"

const Policy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Order Policy</h1>
          <p className="text-gray-600">
            We accept orders – delivery is handled separately
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <FaClipboardList className="text-blue-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold">Order Placement</h3>
            <p className="text-sm text-gray-600">
              Customers can place orders through our website easily.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <FaClock className="text-orange-500 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold">Order Confirmation</h3>
            <p className="text-sm text-gray-600">
              Orders are confirmed after verification by our team.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <FaStore className="text-green-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold">Store Pickup</h3>
            <p className="text-sm text-gray-600">
              Customers may collect products directly from the store.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <FaInfoCircle className="text-purple-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold">No Shipping Service</h3>
            <p className="text-sm text-gray-600">
              We do not provide delivery or courier services.
            </p>
          </div>

        </div>

        {/* Policy Details */}
        <div className="bg-white shadow rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold mb-2">Important Information</h2>

          <p className="text-gray-600 text-sm">
            • This website is used only for placing product orders.
          </p>
          <p className="text-gray-600 text-sm">
            • Delivery, transportation, or courier services are not provided by us.
          </p>
          <p className="text-gray-600 text-sm">
            • Customers must collect products from the store or arrange delivery themselves.
          </p>
          <p className="text-gray-600 text-sm">
            • Order confirmation is mandatory before product collection.
          </p>
        </div>

        {/* Note */}
        <div className="mt-8 bg-red-50 border-l-4 border-red-400 p-4 rounded">
          <p className="text-sm text-gray-700">
            ⚠️ Please do not assume home delivery. This website is for order placement only.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Policy


