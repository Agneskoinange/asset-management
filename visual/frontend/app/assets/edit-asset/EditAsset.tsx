'use client'

import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Image from "next/image";
import Button from "@/app/components/ui/Button";

const EditAsset = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Update asset", { file });
    // Later: send updated data to backend
  };

  return (
    <div className="bg-black min-h-screen text-white flex justify-center py-10">
      <div className="w-[60%]">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="font-semibold text-2xl">Edit Asset</h1>
          <p className="text-gray-400">
            Update your asset details securely and easily.
          </p>
        </div>

        {/* Form Card */}
        <form className="bg-gray-700 border border-gray-500 rounded-2xl p-10 space-y-6" onSubmit={handleSubmit}>

          {/* Owner Name */}
          <div>
            <label className="text-white text-md font-normal">Owner Name</label>
            <input
              type="text"
              defaultValue="Eleanor Pena"
              className="p-2 mt-1 bg-gray-900 border border-gray-500 rounded w-full
              focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white"
            />
          </div>

          {/* Asset Name */}
          <div>
            <label className="text-white text-md font-normal">Asset Name</label>
            <input
              type="text"
              defaultValue="Jungle Villa"
              className="p-2 mt-1 bg-gray-900 border border-gray-500 rounded w-full
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Type + Value */}
          <div className="flex space-x-6">
            <div className="w-1/2">
              <label className="text-white">Type</label>
              <select
                defaultValue="property"
                className="w-full mt-1 bg-gray-900 border border-gray-500 rounded p-2
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select type</option>
                <option value="property">Property</option>
                <option value="business">Business</option>
                <option value="vehicle">Vehicle</option>
                <option value="products">Products</option>
                <option value="contracts">Contracts</option>
                <option value="money">Money</option>
              </select>
            </div>

            <div className="w-1/2">
              <label className="text-white">Value</label>
              <input
                type="number"
                defaultValue={2500000}
                className="w-full mt-1 bg-gray-900 border border-gray-500 rounded p-2
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Receipt + Insured */}
          <div className="flex space-x-6">
            <div className="w-1/2">
              <label className="text-white">Receipt Available</label>
              <select
                defaultValue="yes"
                className="w-full mt-1 bg-gray-900 border border-gray-500 rounded p-2
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="w-1/2">
              <label className="text-white">Is Insured?</label>
              <select
                defaultValue="no"
                className="w-full mt-1 bg-gray-900 border border-gray-500 rounded p-2
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          {/* Existing Image + Upload New */}
          <div className="flex flex-col space-y-4">
            {/* Existing Image */}
            <div>
              <label className="text-white block mb-2">Current Asset Image</label>
              <div className="w-full h-48 bg-gray-900 rounded-xl overflow-hidden border border-gray-500">
                <Image
                  src="/lfa.png"
                  className="w-full h-full object-cover"
                  alt="Asset preview"
                  width={600}
                  height={400}
                />
              </div>
            </div>

            {/* Upload New Image */}
            <div>
              <label className="text-white block mb-2">Upload New Image</label>
              <div className="border-2 border-dashed border-gray-500 rounded-xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition relative">
                <FaCloudUploadAlt className="text-5xl text-gray-300" />
                <p className="text-gray-300 mt-3 text-center">
                  <span className="text-blue-400 underline cursor-pointer">Upload a file</span> or drag and drop
                </p>
                <p className="text-gray-500 text-sm mt-1 text-center">PNG, JPG, GIF up to 10MB</p>
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-600" />

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <Button
              label="Cancel"
              variant="secondary"
              className="cursor-pointer"
              onClick={() => console.log('Cancel')}
            />
            <Button
              label="Update Asset"
              variant="success"
              type="submit"
              className="cursor-pointer"
              onClick={() => console.log('Update Asset')}
            />
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditAsset;
