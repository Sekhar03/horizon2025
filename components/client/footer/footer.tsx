"use client"

import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">About Horizon</h3>
            <p className="text-sm">
              Horizon is the annual techno-cultural fest of IGIT Sarang, 
              bringing together talent, innovation, and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-brand">Home</Link></li>
              <li><Link href="/events" className="hover:text-brand">Events</Link></li>
              <li><Link href="/" className="hover:text-brand">Schedule</Link></li>
              <li><Link href="/" className="hover:text-brand">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>IGIT Sarang</li>
              <li>Parjang, Dhenkanal</li>
              <li>Odisha - 759146</li>
              <li>Email: horizon@igitsarang.ac.in</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="hover:text-[#0078D7]">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-[#000000]">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-[#FF0069]">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Horizon IGIT Sarang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer