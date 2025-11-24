'use client'

import React from 'react'
import { MdEmail } from 'react-icons/md'
import { FaLock, FaUser } from 'react-icons/fa'
import Button from '@/app/components/ui/Button'
import MainLogo from '@/app/components/ui/Logo'

const RegisterForm = () => {
    return (
        <div className="min-h-screen bg-black flex justify-center items-start pt-20 px-4 sm:px-6 lg:px-0">
            <div className="flex flex-col items-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl space-y-10 text-white">
                
                {/* Logo */}
                <MainLogo />

                {/* Marketing */}
                <div className="flex flex-col items-center space-y-4 font-extrabold text-center">
                    <h2 className="capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Create your account</h2>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-normal">
                        Join thousands of users and get started today.
                    </p>
                </div>

                {/* Register form */}
                <form className="flex flex-col w-full space-y-4">

                    {/* Email field */}
                    <div className="flex flex-col relative">
                        <label className="text-white mb-1">Email</label>
                        <MdEmail className="absolute left-3 top-12 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="email"
                            placeholder="your@example.com"
                            className="w-full h-10 pl-10 pr-3 rounded border border-gray-800
                                bg-black text-white placeholder-gray-400
                                focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Username field */}
                    <div className="flex flex-col relative">
                        <label className="text-white mb-1">Username</label>
                        <FaUser className="absolute left-3 top-12 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="your_username"
                            className="w-full h-10 pl-10 pr-3 rounded border border-gray-800
                                bg-black text-white placeholder-gray-400
                                focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password field */}
                    <div className="flex flex-col relative">
                        <label className="text-white mb-1">Password</label>
                        <FaLock className="absolute left-3 top-12 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full h-10 pl-10 pr-3 rounded border border-gray-800
                                bg-black text-white placeholder-gray-400
                                focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Confirm password field */}
                    <div className="flex flex-col relative">
                        <label className="text-white mb-1">Confirm Password</label>
                        <FaLock className="absolute left-3 top-12 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full h-10 pl-10 pr-3 rounded border border-gray-800
                                bg-black text-white placeholder-gray-400
                                focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Register button */}
                    <Button
                        label='Register'
                        variant='primary'
                        type='button'
                        onClick={() => console.log('Clicked register')}
                        className='cursor-pointer w-full'
                    />

                    {/* Login link */}
                    <p className="text-gray-400 text-sm sm:text-base text-center">
                        Already have an account?
                        <span className="pl-1 cursor-pointer text-blue-500 font-bold">Log in</span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm
