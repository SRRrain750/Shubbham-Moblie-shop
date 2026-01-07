import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className="container mx-auto p-4 text-center flex flex-col lg:flex-row lg:justify-between items-center gap-2">
        <p>© All right reserved 2026</p>

        <div className="flex gap-4 justify-center text-2xl">
          <a 
            href="https://www.facebook.com/share/1AS4YSCafD/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-primary-100 transition-colors">
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/_shubh_ray_?igsh=dGFteXQ5YWRjeHli" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition-colors">
            <FaInstagram />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors">
            <FaLinkedin />
          </a>
          <a 
            href="https://chat.whatsapp.com/GHLDowiTmuiHFxZx9EcsaT"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-500 transition-colors">
            <FaWhatsapp />
          </a>
        </div>


      </div>
    </footer>
  )
}

export default Footer