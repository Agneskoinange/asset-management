'use client'
import Button from '@/app/components/ui/Button'
import MainLogo from '@/app/components/ui/Logo'
import React from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5'

const ActivationMessage = () => {
    return (
        <>
            <div className="bg-black min-h-screen flex flex-col items-center text-white">
                {/* Logo */}
                <div className="pt-10">
                    <MainLogo />
                </div>

                {/* Main Content */}
                <div className="flex flex-col items-center justify-center flex-1 w-full">
                    <div className="flex flex-col items-center w-[90%] max-w-md space-y-3"> {/* reduced space-y */}

                        {/* Success Icon */}
                        <div className="flex w-12 h-12 justify-center items-center bg-green-400/20 rounded-full">
                            <IoCheckmarkSharp className="text-green-400 text-xl" />
                        </div>

                        {/* Header */}
                        <h2 className="font-bold text-2xl text-center -mt-1">Activation Successful</h2> {/* optional negative margin to pull closer */}

                        {/* Paragraph */}
                        <p className="text-gray-400 text-center -mt-1">
                            Welcome to our app! You’re all set to get started.
                        </p>

                        {/* Button */}
                        <Button
                            type="button"
                            label="Go to Your Dashboard"
                            onClick={() => console.log('clicked activation success button')}
                            variant="success"
                            fullWidth
                            className="cursor-pointer hover:font-bold mt-2"
                        />

                        {/* Return link */}
                        <p className="text-gray-400 text-center underline cursor-pointer mt-1">
                            Return to homepage
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ActivationMessage