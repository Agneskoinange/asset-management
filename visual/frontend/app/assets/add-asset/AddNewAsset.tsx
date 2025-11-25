'use client'

import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "@/app/components/ui/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/app/lib/api";
import { authStorage } from "@/app/lib/auth";
import { AssetCategory, YesNoChoice } from "@/app/types/asset";

const AddNewAsset = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    type: '' as AssetCategory | '',
    value: '',
    receipt: '' as YesNoChoice | '',
    insured: '' as YesNoChoice | '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.type || !formData.value || !formData.receipt || !formData.insured) {
      alert('Please fill in all required fields');
      return;
    }

    const token = authStorage.getAccessToken();
    if (!token) {
      router.push('/auth/login');
      return;
    }

    try {
      setLoading(true);
      const data = new FormData();
      data.append('name', formData.name);
      data.append('type', formData.type);
      data.append('value', formData.value);
      data.append('receipt', formData.receipt);
      data.append('insured', formData.insured);
      if (imageFile) {
        data.append('image', imageFile);
      }

      await api.createAsset(token, data);
      router.push('/assets');
    } catch (err: any) {
      alert(err.message || 'Failed to create asset');
    } finally {
      setLoading(false);
    }
  };

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
        <form onSubmit={handleSubmit} className="bg-gray-700 border border-gray-500 rounded-2xl p-10 space-y-6">

          {/* Asset Name */}
          <div>
            <label className="text-white text-md font-normal">Asset Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter asset name"
              required
              className="p-2 mt-1 bg-gray-900 border border-gray-500 rounded w-full
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Type + Value */}
          <div className="flex space-x-6">
            <div className="w-1/2">
              <label className="text-white">Type *</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                required
                className="w-full mt-1 bg-gray-900 border border-gray-500 rounded p-2
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
              <label className="text-white">Value *</label>
              <input
                type="number"
                name="value"
                value={formData.value}
                onChange={handleInputChange}
                placeholder="2500000"
                required
                step="0.01"
                min="0"
                className="w-full mt-1 bg-gray-900 border border-gray-500 rounded p-2
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Receipt + Insured */}
          <div className="flex space-x-6">
            <div className="w-1/2">
              <label className="text-white">Receipt Available *</label>
              <select
                name="receipt"
                value={formData.receipt}
                onChange={handleInputChange}
                required
                className="w-full mt-1 bg-gray-900 border border-gray-500 rounded p-2
                focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="w-1/2">
              <label className="text-white">Is Insured? *</label>
              <select
                name="insured"
                value={formData.insured}
                onChange={handleInputChange}
                required
                className="w-full mt-1 bg-gray-900 border border-gray-500 rounded p-2
                focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="text-white block mb-2">Asset Image (optional)</label>

            {imagePreview ? (
              <div className="relative border-2 border-gray-500 rounded-xl p-4">
                <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover rounded" />
                <button
                  type="button"
                  onClick={() => {
                    setImageFile(null);
                    setImagePreview(null);
                  }}
                  className="absolute top-6 right-6 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-500 rounded-xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition relative">
                <FaCloudUploadAlt className="text-5xl text-gray-300" />
                <p className="text-gray-300 mt-3 text-center">
                  <span className="text-blue-400 underline cursor-pointer">Upload a file</span> or drag and drop
                </p>
                <p className="text-gray-500 text-sm mt-1 text-center">PNG, JPG, GIF up to 10MB</p>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            )}
          </div>

          {/* Divider */}
          <hr className="border-gray-600" />

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <Button
              label="Cancel"
              variant="secondary"
              type="button"
              className="cursor-pointer"
              onClick={() => router.push('/assets')}
            />
            <Button
              label={loading ? "Adding..." : "Add Asset"}
              variant="primary"
              type="submit"
              disabled={loading}
              className="cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewAsset;
