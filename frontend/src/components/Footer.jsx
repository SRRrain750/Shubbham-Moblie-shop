// import React from 'react'
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
// import { FaWhatsapp } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className='border-t'>
//       <div className="container mx-auto p-4 text-center flex flex-col lg:flex-row lg:justify-between items-center gap-2">
//         <p>© All right reserved 2026</p>

//         <div className="flex gap-4 justify-center text-2xl">
//           <a 
//             href="https://www.facebook.com/share/1AS4YSCafD/" 
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Facebook"
//             className="hover:text-primary-100 transition-colors">
//             <FaFacebook />
//           </a>
//           <a
//             href="https://www.instagram.com/_shubh_ray_?igsh=dGFteXQ5YWRjeHli" 
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Instagram"
//             className="hover:text-pink-500 transition-colors">
//             <FaInstagram />
//           </a>
//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-blue-600 transition-colors">
//             <FaLinkedin />
//           </a>
//           <a 
//             href="https://chat.whatsapp.com/GHLDowiTmuiHFxZx9EcsaT"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="WhatsApp"
//             className="hover:text-green-500 transition-colors">
//             <FaWhatsapp />
//           </a>
//         </div>


//       </div>
//     </footer>
//   )
// }

//export default Footer

import React from "react"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="border-t">
      
      {/* Top Section */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Shubham Style</h2>
          <p className="text-sm leading-relaxed">
            Trusted Mobile Shop delivering quality products at the best prices.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/mobiles" className="hover:text-blue-500 transition">
                Mobiles
              </Link>
            </li>
           
            <li>
              <Link to="/accessories" className="hover:text-blue-500 transition">
                Accessories
              </Link>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
           
            <li>
              <Link to="/policy" className="hover:text-blue-500 transition">
                Policy
              </Link>
            </li>
            <li>
              <Link to="/returns" className="hover:text-blue-500 transition">
                Returns
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="https://www.facebook.com/share/1AS4YSCafD/" target="_blank" className="hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/_shubh_ray_?igsh=dGFteXQ5YWRjeHli" target="_blank" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://chat.whatsapp.com/GHLDowiTmuiHFxZx9EcsaT" target="_blank" className="hover:text-green-500">
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm ">
        © 2026 All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
