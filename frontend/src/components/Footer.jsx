import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className='border-t'>
        <div className='container mx-auto p-4'>
            <p>© All right reseved 2025</p>
            <a href=''>
            <FaFacebook/>
            </a>

            <a href=''>
            <FaInstagram/>
            </a>
            <a href=''>
            <FaLinkedin/>
            </a>
            
        </div>
    </footer>   
  )
}

export default Footer
