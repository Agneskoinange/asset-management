'use client'
import Button from '@/app/components/ui/Button'
import MainLogo from '@/app/components/ui/Logo'
import React from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5'

const PasswordReset = () => {
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
                        <h2 className="font-bold text-2xl text-center -mt-1">Password Reset!</h2> {/* optional negative margin to pull closer */}

                        {/* Paragraph */}
                        <p className="text-gray-400 text-center -mt-1">
                            Your password has been successfully updated. You can now log in with your new credentials.
                        </p>

                        {/* Button */}
                        <Button
                            type="button"
                            label="Back to Log In"
                            onClick={() => console.log('clicked password reset success button')}
                            variant="success"
                            fullWidth
                            className="cursor-pointer hover:font-bold mt-2"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default PasswordReset