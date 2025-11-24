'use client'

import React from 'react'
import Button from '@/app/components/ui/Button'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'

const ContactUs = () => {
  return (
    <div className="bg-black text-white min-h-screen px-5 md:px-20 py-20">
      
      {/* Hero / Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="text-gray-400 mt-4 text-lg md:text-xl">
          We are here to help you manage your assets securely. Reach out to us anytime.
        </p>
      </section>

      {/* Contact Info */}
      <section className="grid xs:grid-cols-1 md:grid-cols-3 gap-10 mb-16 text-center">
        <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg">
          <MdLocationOn size={40} className="text-blue-500 mb-4" />
          <h3 className="font-semibold text-xl mb-2">Address</h3>
          <p className="text-gray-400">Keillers Park 99, 53983 - Gothenburg</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg">
          <MdPhone size={40} className="text-blue-500 mb-4" />
          <h3 className="font-semibold text-xl mb-2">Phone</h3>
          <p className="text-gray-400">+46 783 720 1577</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg">
          <MdEmail size={40} className="text-blue-500 mb-4" />
          <h3 className="font-semibold text-xl mb-2">Email</h3>
          <p className="text-gray-400">asset.manager@auth.se</p>
        </div>
      </section>

      {/* Map / Optional */}
      <section className="mt-16">
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2013.123456!2d11.999999!3d57.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ffb3f0f6b3b3b%3A0xabcdef1234567890!2sKeillers%20Park%2099%2C%2053983%20Gothenburg!5e0!3m2!1sen!2sse!4v1700000000000!5m2!1sen!2sse"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
