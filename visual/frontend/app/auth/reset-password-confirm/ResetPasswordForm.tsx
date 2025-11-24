'use client'
import Button from '@/app/components/ui/Button'
import React from 'react'
import { CiUnlock } from 'react-icons/ci'
import { FaLockOpen } from 'react-icons/fa'

const ResetPasswordForm = () => {
  return (
    <div className='flex flex-col justify-center min-h-screen -mt-[50px]'>
        <div className="flex flex-col items-center">
            <h3 className="font-bold text-3xl md:text-2xl">
            Set a New Password
        </h3>
        <p className="text-gray-400 text-center">
            Your new password must be different from previosly used <br />password
        </p>
        </div>
        <form className="space-y-3">
            <div className="flex flex-col relative">
                <label className='font-normal mb-1'>New Password</label>
                <FaLockOpen className="absolute left-3 top-12 -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="password"
                    placeholder="Enter your new password"
                    className='w-full h-10 pl-10 rounded border border-gray-800 focus:outline-none focus:ring-2
                        placeholder-gray-400 focus:ring-blue-500'
                />

            </div>
            <div className="flex flex-col relative">
                <label className='font-normal mb-1'>Confirm New Password</label>
                <FaLockOpen className="absolute left-3 top-12 -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="password"
                    placeholder="Enter your new password"
                    className='w-full h-10 pl-10 rounded border border-gray-800 focus:outline-none focus:ring-2
                        placeholder-gray-400 focus:ring-blue-500'
                />

            </div>

            <Button
                type='button'
                label='Reset Password'
                fullWidth
                className='mt-3 hover:font-bold transition-all cursor-pointer'
                variant='primary'
                onClick={() => console.log('Clicked the reset password')}
            />
        </form>

    </div>
  )
}

export default ResetPasswordForm