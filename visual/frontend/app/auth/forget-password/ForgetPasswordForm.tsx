'use client'
import Button from "@/app/components/ui/Button";
import { MdEmail, MdOutlineWatchLater } from "react-icons/md";


import React from 'react'

const ForgetPasswordForm = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="flex flex-col w-[90%] max-w-md">
                <div className="flex justify-center items-center mb-[50px]">

                    <MdOutlineWatchLater className="text-4xl text-blue-500" />
                </div>

                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white">Forget Password?</h2>
                    <p className="text-gray-400 text-center xl:text-xl md:text-sm font-normal mt-2">
                        Enter the email address associated with your account, and we'll send a link to reset your password.
                    </p>
                </div>

                {/* Form */}
                <form className="w-full mt-6 space-y-4">
                    <div className="flex flex-col relative">
                        <label className="text-white mb-1">Email Address</label>
                        <MdEmail className="absolute left-3 top-12.5 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full h-10 pl-10 pr-3 rounded border border-gray-800
                            bg-black text-white placeholder-gray-400
                            focus:outline-none focus:border-blue-500 focus:ring-2
                            focus:ring-blue-500"
                        />
                    </div>

                    <Button
                        label="Send Reset Link"
                        className="w-full hover:font-bold cursor-pointer"
                        onClick={() => console.log('Clicked the resend link')}
                        type="button"
                    />

                    <p className="text-center text-gray-400 underline mt-2 cursor-pointer">Back to login</p>
                </form>

            </div>
        </div>
    )
}

export default ForgetPasswordForm
