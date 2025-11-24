import React from "react";
import Button from "@/app/components/ui/Button";
import { FaExclamationTriangle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const DeleteAssetModal= () => {
  return (
    <div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-gray-800 rounded-xl shadow-xl w-[400px] p-6 space-y-4 relative">
        
        {/* Close icon */}
        <button className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <IoMdClose className="text-2xl cursor-pointer" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-2">
          <FaExclamationTriangle className="text-red-500 text-2xl" />
          <h2 className="text-xl font-bold text-white">
            Delete Asset 'Marketing Campaign X Q3'?
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm">
          This action is irreversible and will permanently delete the asset and all its associated data. To confirm, please type <strong>DELETE</strong> in the box below.
        </p>

        {/* Input */}
        <div className="flex flex-col space-y-2">
          <label className="text-gray-300 text-sm">Type DELETE to confirm</label>
          <input
            type="text"
            placeholder="DELETE"
            className="w-full p-2 rounded-md bg-gray-900 border border-gray-500 text-white
              focus:outline-none placeholder-gray-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3 mt-4">
          <Button
            label="Cancel"
            variant="secondary"
            className="cursor-pointer"
            onClick={() => console.log('Cancel')}
          />
          <Button
            label="Delete Asset"
            variant="danger"
            className="cursor-pointer"
              onClick={() => console.log('Delete asset')}
          />
        </div>

      </div>
    </div>
  );
};

export default DeleteAssetModal;

