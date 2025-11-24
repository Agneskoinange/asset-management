'use client'

import React from 'react'
import Button from '@/app/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

const AboutUs = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900/80 w-full h-[300px] flex flex-col justify-center items-center text-center px-5">
        <h1 className="text-4xl md:text-5xl font-bold">Secure Asset Management Made Simple</h1>
        <p className="text-gray-400 mt-4 text-lg md:text-xl max-w-2xl">
          Track, store, and manage all your assets securely in one modern platform.
        </p>
        <Link href='/auth/register'>
            <Button
                label="Get Started"
                className="mt-6 px-6 py-3 text-lg font-semibold"
                />
        </Link>
      </section>

      {/* About / Mission Section */}
      <section className="px-5 md:px-20 py-16">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          At AssetManager, we believe that managing your assets should be secure, simple, and transparent.
          Our platform allows individuals and businesses to track, store, and organize their valuable assets—from
          properties and vehicles to contracts and digital products—all in one place. Security is our top priority.
          Every asset is protected using advanced encryption, secure authentication, and role-based access control
          to ensure only authorized users can view or modify sensitive information.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Features</h2>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gray-700 rounded-lg p-6 text-center">
            <Image src="/end_to_end.png" alt="Security" width={60} height={60} className='rounded' />
            <h3 className="font-semibold mt-4">Secure Storage</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Advanced encryption and authentication keep your assets safe.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-6 text-center">
            <Image src="/asset_tracking.png" alt="Tracking" width={60} height={60} className='rounded' />
            <h3 className="font-semibold mt-4">Asset Tracking</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Organize your properties, vehicles, contracts, and more efficiently.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-6 text-center">
            <Image src="/legal.png" alt="Insurance" width={60} height={60} className='rounded' />
            <h3 className="font-semibold mt-4">Insurance & Receipts</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Keep track of receipts, insurance, and asset documentation.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-6 text-center">
            <Image src="/asset_data.png" alt="Upload" width={60} height={60} className='rounded' />
            <h3 className="font-semibold mt-4">Image & Document Upload</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Attach images and documents to assets easily for full visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-5 md:px-20 py-16">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          Our platform is designed for reliability and performance. We continuously adopt the latest technologies
          to enhance security, usability, and speed. Focus on making informed decisions about your assets while we
          handle the complexity behind the scenes.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          With AssetManager, managing personal or company assets has never been easier or more secure.
          From intuitive navigation to modern design, we aim to make your experience seamless and stress-free.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-900/80 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Managing Your Assets Today</h2>
        
        <Link href='/assets/add-asset'>
            <Button
          label="Add Your First Asset"
          className="px-6 py-3 text-lg font-semibold"
        />
        </Link>
      </section>
    </div>
  )
}

export default AboutUs
