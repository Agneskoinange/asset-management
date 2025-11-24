'use client'

import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "@/app/components/ui/Button";

const AddNewAsset = () => {
  

  return (
    <div className="bg-black min-h-screen text-white flex justify-center py-10">
      <div className="w-[60%]">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="font-semibold text-2xl">Add New Asset</h1>
          <p className="text-gray-400">
            Add a new asset that you can manage securely in a modern way.
          </p>
        </div>

        {/* Form Card */}
        <form className="bg-gray-700 border border-gray-500 rounded-2xl p-10 space-y-6">

          {/* Owner Name */}
          <div>
            <label className="text-white text-md font-normal">Owner Name</label>
            <input
              type="text"
              placeholder="Eleanor Pena"
              className="p-2 mt-1 bg-gray-900 border border-gray-500 rounded w-full
              focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white"
            />
          </div>

          {/* Asset Name */}
          <div>
            <label className="text-white text-md font-normal">Asset Name</label>
            <input
              type="text"
              placeholder="Enter asset name"
              className="p-2 mt-1 bg-gray-900 border border-gray-500 rounded w-full
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Type + Value */}
          <div className="flex space-x-6">
            <div className="w-1/2">
              <label className="text-white">Type</label>
              <select className="w-full mt-1 bg-gray-900 border border-gray-500 rounded p-2
                focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                placeholder="2500000"
                className="w-full mt-1 bg-gray-900 border border-gray-500 rounded p-2
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Receipt + Insured */}
          <div className="flex space-x-6">
            <div className="w-1/2">
              <label className="text-white">Receipt Available</label>
              <select className="w-full mt-1 bg-gray-900 border border-gray-500 rounded p-2
                focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="w-1/2">
              <label className="text-white">Is Insured?</label>
              <select className="w-full mt-1 bg-gray-900 border border-gray-500 rounded p-2
                focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="text-white block mb-2">Asset Image</label>

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
                onClick={() => console.log('uploaded image')}
              />
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
              label="Add Asset"
              variant="primary"
              type="submit"
              className="cursor-pointer"
              onClick={() => console.log('Add Asset')}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewAsset;
