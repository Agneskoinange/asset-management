'use clieant'
import React from 'react'
import ForgetPasswordForm from './ForgetPasswordForm'
import MainLogo from '@/app/components/ui/Logo'

const forgetPassword = () => {
  return (
    <div className='bg-black h-screen text-white flex flex-col items-center pt-7'>
        <MainLogo />
        <ForgetPasswordForm />
    </div>
  )
}

export default forgetPassword