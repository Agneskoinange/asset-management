import React from 'react'
import ResetPasswordForm from './ResetPasswordForm'
import MainLogo from '@/app/components/ui/Logo'

const ResetPasswordConfirm = () => {
  return (
    <div className='flex flex-col items-center h-screen bg-black text-white pt-[50px]'>
        <MainLogo />
        <ResetPasswordForm />
    </div>
  )
}

export default ResetPasswordConfirm