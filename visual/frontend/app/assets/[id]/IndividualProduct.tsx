'use client'

import React from 'react'
import Image from 'next/image'
import Button from '@/app/components/ui/Button'
import Link from 'next/link'

const IndividualProduct = () => {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      {/* Heading */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center p-5">
        <p className="text-gray-400 text-md">
          <Link href='/' className='hover:text-white'>
            Home
          </Link> / 
          <Link href='/assets' className='hover:text-white pl-1'>
            All assets
          </Link> / <strong className="text-white">product-detail</strong>
        </p>

        {/* Right side buttons */}
        <div className="mt-4 sm:mt-0 sm:ml-auto flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4">
          <Link href='/assets/add-asset'>
            <Button
              type="button"
              label="+ Add New Asset"
              variant="primary"
              onClick={() => console.log("Add asset")}
              className="cursor-pointer"
            />
          </Link>
           <Link href='/assets/edit-asset'>
              <Button
                type="button"
                label="Edit"
                variant="secondary"
                className="cursor-pointer"
              />
          </Link>
           <Link href='/assets/add-asset'>
            <Button
              type="button"
              label="Delete"
              variant="danger"
              onClick={() => console.log("Delete asset")}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <div className="bg-black flex flex-col md:flex-row p-4 md:p-6 gap-6 md:gap-8">

        {/* LEFT: Only One Image (70%) */}
        <div className="md:w-7/12 bg-gray-800 rounded-lg p-4 shrink-0">
          <div className="w-full h-64 sm:h-80 md:h-[450px] rounded-md overflow-hidden">
            <Image
              src="/lfa.png"
              className="w-full h-full object-cover"
              alt="Asset preview"
              width={400}
              height={300}
              loading="eager"
            />
          </div>
        </div>

        {/* RIGHT: Product Details (30%) */}
        <div className="md:w-5/12 bg-gray-800 rounded-lg p-6 flex flex-col space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold">Jungle Villa</h1>

          <p className="text-gray-400 text-sm sm:text-base">
            Our best property in Brazil located in the heart of the jungle.
          </p>

          {/* Info list */}
          <div className="space-y-3 text-sm sm:text-base">
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Type</span>
              <span className="text-white font-semibold">Property</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Value</span>
              <span className="text-white font-semibold">$2,500,000</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Receipt</span>
              <span className="text-white font-semibold">Yes</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Insured</span>
              <span className="text-white font-semibold">No</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Created</span>
              <span className="text-white font-semibold">2024-11-17</span>
            </div>
          </div>

          <Button
            label="Download Receipt"
            variant="success"
            className="w-full mt-4 cursor-pointer"
            onClick={() => console.log('Download assets')}
          />
        </div>
      </div>
    </div>
  )
}

export default IndividualProduct
