'use client'
import Button from '@/app/components/ui/Button'
import React from 'react'
import { MdEmail } from 'react-icons/md'

const ResendActivationForm = () => {
    return (
        <div className='flex justify-center items-center min-h-screen bg-black'>
            <div className='flex flex-col w-[90%] max-w-xl'>
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Didn't get an email?</h2>
                <p className="text-gray-400 text-center xl:text-xl md:text-sm font-normal mt-2">
                    Enter the email address associated with your account, and we'll send a new activation link.
                </p>
                </div>

                <form className="w-[90%] space-y-4">
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
                        <Button
                            label='Resend Link'
                            className='mt-5 hover:font-bold cursor-pointer'
                            onClick={() => console.log('Clicked the resend link')}
                            type='button'
                        />
                        <p className="text-center text-gray-400 underline pt-4 cursor-pointer">Back to login</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResendActivationForm