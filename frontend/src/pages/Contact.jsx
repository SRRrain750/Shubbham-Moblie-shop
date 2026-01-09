import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600">
            We’d love to hear from you. Reach out anytime!
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div className="bg-white rounded-xl shadow p-6 space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-600 text-xl" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">rayshubham472@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-600 text-xl" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+91 8103797994</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600">
                  Dhanaura Umarpani Road, Seoni 480999, Madhya Pradesh, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Send Message</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact

