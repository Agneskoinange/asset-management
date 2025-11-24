'use client'
import React from 'react'
import { FaLock, FaUser } from 'react-icons/fa'
import { ImBin } from 'react-icons/im'
import { RxAvatar } from 'react-icons/rx'
import Image from 'next/image'
import Button from '@/app/components/ui/Button'

const AccountSetttingsSections = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="relative w-full md:w-1/6 p-3 bg-gray-800 border-b md:border-b-0 md:border-r border-gray-700 flex flex-col justify-between space-y-3">
        {/* Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center text-gray-400 hover:bg-blue-400/50 focus:bg-blue-400/50 hover:p-2 focus:p-2 rounded-xl hover:text-blue-500 focus:text-blue-500 cursor-pointer">
            <FaUser className="mr-3" /> Profile
          </button>

          <button className="w-full flex items-center text-gray-400 hover:bg-blue-400/50 focus:bg-blue-400/50 hover:p-2 focus:p-2 rounded-xl hover:text-blue-500 focus:text-blue-500 cursor-pointer">
            <FaLock className="mr-3" /> Password
          </button>

          <button className="w-full flex items-center text-red-600 hover:bg-blue-400/50 hover:p-2 focus:p-2 rounded-xl hover:text-blue-500 cursor-pointer">
            <ImBin className="mr-3 text-red-600" /> Delete Account
          </button>
        </div>

        {/* Bottom user info */}
        <div className="flex items-center mt-6">
          <RxAvatar className="cursor-pointer h-6 w-6 text-gray-300" />
          <div className="flex flex-col ml-2">
            <p className="text-white text-sm">First & Last Name</p>
            <p className="text-gray-400 text-xs">user email</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE – BOTH SECTIONS INSIDE */}
      <div className="flex-1 p-4 md:p-7 bg-gray-900 space-y-12">
        {/* ------------------ PROFILE SECTION ------------------ */}
        <div>
          <h1 className="font-semibold text-2xl">Profile Information</h1>
          <p className="text-gray-400 text-sm mb-4">
            Update your photo and personal details
          </p>

          <div className="flex flex-col sm:w-full md:w-[90%] mt-6 bg-gray-800 shadow-xl rounded-md h-fit pb-3">

            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="p-5 w-full md:w-1/3 flex flex-col items-center">
                <Image
                  src="/placeholder.png"
                  alt="Image placeholder"
                  height={150}
                  width={150}
                  className="rounded-full object-cover cursor-pointer"
                />
                <p className="text-gray-400 text-sm pt-2 text-center">
                  Click to upload an image.<br />
                  <strong className="text-xs">PNG, PNG(max 2MB).</strong>
                </p>
              </div>

              {/* Inputs */}
              <div className="p-5 flex flex-col w-full md:w-2/3 space-y-3">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-3 md:space-y-0">
                  {/* First name */}
                  <div className="flex flex-col w-full md:w-1/2 md:pr-2">
                    <label className="text-sm">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="pl-3 border-gray-800
                        bg-black text-white placeholder-white rounded mt-1 p-1
                        focus:outline-none focus:border-blue-500 focus:ring-2
                        focus:ring-blue-500"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col w-full md:w-1/2 md:pl-2">
                    <label className="text-sm">Last Name</label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="pl-3 border-gray-800
                        bg-black text-white placeholder-white rounded mt-1 p-1
                        focus:outline-none focus:border-blue-500 focus:ring-2
                        focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* username */}
                <div className="flex flex-col">
                  <label className="text-sm">Username</label>
                  <input
                    type="text"
                    placeholder="johnsmith"
                    className="pl-3 border-gray-800
                        bg-black text-white placeholder-white rounded mt-1 p-1
                        focus:outline-none focus:border-blue-500 focus:ring-2
                        focus:ring-blue-500"
                  />
                </div>

                {/* email */}
                <div className="flex flex-col">
                  <label className="text-sm">Email address</label>
                  <input
                    type="email"
                    placeholder="johnsmith@example.com"
                    className="pl-3 border-gray-800
                        bg-black text-white placeholder-white rounded mt-1 p-1
                        focus:outline-none focus:border-blue-500 focus:ring-2
                        focus:ring-blue-500"
                  />
                </div>

                {/* phone */}
                <div className="flex flex-col">
                  <label className="text-sm">Phone number</label>
                  <input
                    type="number"
                    placeholder="+467483725634"
                    className="pl-3 border-gray-800
                        bg-black text-white placeholder-white rounded mt-1 p-1
                        focus:outline-none focus:border-blue-500 focus:ring-2
                        focus:ring-blue-500"
                  />
                </div>

                {/* bio */}
                <div className="flex flex-col">
                  <label className="text-sm">Bio</label>
                  <textarea
                    placeholder="A short bio about yourself"
                    className="pl-3 border-gray-800
                        bg-black text-white placeholder-white rounded mt-1 p-1
                        focus:outline-none focus:border-blue-500 focus:ring-2
                        focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Divider + Save Button */}
            <hr className="mx-5 border-gray-600 my-4" />
            <div className="flex justify-end">
              <Button
                label="Save changes"
                className="w-fit m-4 cursor-pointer"
                type="button"
                onClick={() => console.log('delete account')}
              />
            </div>
          </div>
        </div>

        {/* ------------------ PASSWORD SECTION ------------------ */}
        <div>
          <h1 className="font-semibold text-2xl">Change Password</h1>
          <p className="text-gray-400 text-sm mb-4">
            Update your account password
          </p>

          <div className="flex flex-col sm:w-full md:w-[90%] mt-6 bg-gray-800 shadow-xl rounded-md h-fit pb-3">
            <div className="p-5 flex flex-col w-full space-y-3">
              <label className="text-sm">Email</label>
              <input
                type="email"
                placeholder="johnsmith@example.com"
                className="w-full h-10 pl-3 rounded border border-gray-800
                        bg-gray-700 text-white placeholder-gray-400
                        focus:outline-none focus:border-blue-500 focus:ring-2
                        focus:ring-blue-500"
              />
            </div>

            {/* divider + reset button */}
            <hr className="mx-5 border-gray-600 my-4" />

            <div className="flex justify-between items-center px-5">
              <p className="text-gray-400 text-xs">
                For security reasons, password changes require email verification.
              </p>
              <Button
                label="Send Password Reset Link"
                className="w-fit cursor-pointer"
                type="button"
                variant="primary"
                onClick={() => console.log('delete account')}
              />
            </div>
          </div>
        </div>


        {/* ------------------ DELETE ACCOUNT SECTION ------------------ */}
        <div>
          <h1 className="font-semibold text-2xl">Delete Account</h1>
          <p className="text-gray-400 text-sm mb-4">
            Permenantly remove your account and all of its contents.
          </p>

          <div className="flex flex-col sm:w-full md:w-[90%] mt-6 bg-gray-800 shadow-xl rounded-md h-fit pb-6">

            {/* Warning box */}
            <div className="mx-6 mt-6 rounded-md border border-red-600 bg-red-900/20 shadow-[0_0_12px_rgba(255,0,0,0.5)]">
              <p className="pt-5 px-5 font-bold text-sm text-red-400">
                ⚠️ Warning: This action is permanent
              </p>
              <p className="px-5 pb-5 font-semibold text-xs text-red-400">
                Deleting your account cannot be undone. All your data will be permenantly erased.
              </p>
            </div>


            {/* Input area */}
            <div className="p-6 flex flex-col w-full space-y-3">
              <p className="text-gray-400 text-xs">
                To confirm, type <strong className="text-white">"DELETE"</strong> in the box below:
              </p>
              <input
                type="text"
                className="pl-3 py-2 border border-gray-700 rounded-md bg-gray-700 mt-1
                 focus:border-red-500 focus:outline-none text-white"
              />
            </div>

            {/* Divider */}
            <hr className="mx-6 border-gray-700 my-2" />

            {/* Full width button */}
            <div className="px-6 mt-3">
              <Button
                label="Delete My Account"
                type="button"
                variant="danger"
                onClick={() => console.log('delete account')}
                className="w-full py-3 text-center cursor-pointer"
              />
            </div>

          </div>

        </div>
      </div>
    </div>


  )
}

export default AccountSetttingsSections