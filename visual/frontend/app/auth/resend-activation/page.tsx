'use client'
import React from 'react'
import ResendActivationForm from './ResendActivationForm'
import MainLogo from '@/app/components/ui/Logo'

const page = () => {
  return (
    <div className='bg-black h-screen text-white flex flex-col items-center pt-7'>
        <MainLogo />
        <ResendActivationForm />
    </div>
  )
}

export default page