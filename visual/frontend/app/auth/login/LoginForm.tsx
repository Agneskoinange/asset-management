import React from 'react'
import Image from 'next/image'
import Button from '@/app/components/ui/Button';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import MainLogo from '@/app/components/ui/Logo';

const LoginForm = () => {
    return (
        <div className="flex flex-col lg:flex-row w-[90%] max-w-[1500px] gap-8 items-center">
            {/* Left - Gradient Hero */}
            <div
                className="hidden bg-linear-to-b from-blue-400 to-indigo-900 rounded-l-xl
                        h-80 lg:h-[70vh] w-full lg:w-1/2 lg:flex flex-col justify-end items-start p-8 text-white"
            >
                {/* Logo */}
                <MainLogo />

                {/* Marketing Text */}
                <h3 className="font-extrabold lg:text-4xl md:text-xl">
                    Secure Access to Your Asset Manager
                </h3>
                <p className="pt-3 text-gray-300">
                    Access encrypted storage, smart asset tracking, and seamless
                    document management. Login to maintain control over your digital
                    essentials. Git test
                </p>
            </div>

            {/* Right - Login / Form */}
            <div className="text-white w-full lg:w-1/2 flex flex-col items-start justify-center">
                <div className="flex flex-col justify-start items-start h-80 lg:h-[70vh] w-full">
                    <div className="p-6 w-full">
                        <h2 className="font-bold text-4xl">Welcome back</h2>
                        <p className="pt-3 text-gray-300 -mt-2">
                            log in to your account to continue
                        </p>
                        <form className="flex flex-col w-full space-y-4">
                            {/* Email field */}
                            <div className="flex flex-col relative pt-7">
                                <label className="text-white mb-1">
                                    Email Address
                                </label>
                                <MdEmail className="absolute left-3 top-19 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    placeholder="your@example.com"
                                    className="w-full h-10 pl-10 pr-3 rounded border border-gray-800
                                            bg-black text-white placeholder-gray-400
                                            focus:outline-none focus:border-blue-500 focus:ring-2
                                            focus:ring-blue-500"
                    />
                            </div>
                            {/* Confirm password field */}
                            <div className="flex flex-col relative pt-5">
                                <label className="text-white mb-1">
                                    Password
                                </label>
                                <FaLock className="absolute left-3 top-17 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full h-10 pl-10 pr-3 rounded border border-gray-800
                                        bg-black text-white placeholder-gray-400
                                        focus:outline-none focus:border-blue-500 focus:ring-2
                                        focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex items-center justify-between w-full mt-4">
                                {/* Left: Checkbox + Label */}
                                <label className="flex items-center space-x-2 text-gray-400 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-500 border-gray-400 rounded focus:ring-blue-500"
                                    />
                                    <span>Remember me</span>
                                </label>

                                {/* Right: Forgot Password */}
                                <button className="text-blue-500 font-medium hover:underline">
                                    Forgot Password?
                                </button>
                            </div>


                            <Button
                                label='Log in'
                                variant='primary'
                                type='button'
                                onClick={() => console.log('Clicked loged in')}
                                className='cursor-pointer'
                            />
                        </form>
                        <p className="pt-4 text-gray-400 pl-[170px]">Don't have an account?
                            <span className="pl-1 cursor-pointer text-blue-500 font-bold">Sign up</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm