'use client'
import React, { useState } from 'react'
import MainLogo from '../ui/Logo'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const DesNav = () => {
    const router = useRouter();
    const [hideSupNav, setHideSupNav] = useState(false);
    return (
        <nav className="hidden md:flex bg-black items-center text-white w-full h-[70px] 
     shadow-md border-b border-gray-600 z-1000 px-5 fixed top-0">
  {/* Logo 30% */}
  <div className="shrink-0 w-[30%]">
      <MainLogo />
  </div>

  {/* Links 50% */}
  <div className="flex justify-between items-center w-[50%]">
      <Link href="/" className="text-gray-400 hover:text-blue-500 focus:text-blue-500 
           border-b-2 border-transparent hover:border-blue-500 focus:font-bold
           focus:border-blue-500 transition-all duration-300 pb-1">Home</Link>
      <Link href="/assets" className="text-gray-400 hover:text-blue-500 focus:text-blue-500 
           border-b-2 border-transparent hover:border-blue-500 focus:font-bold
           focus:border-blue-500 transition-all duration-300 pb-1">Assets</Link>
      <Link href="/contact-us" className="text-gray-400 hover:text-blue-500 focus:text-blue-500 
           border-b-2 border-transparent hover:border-blue-500 
           focus:border-blue-500 transition-all duration-300 pb-1">Contact Us</Link>
      <Link href="/about" className="text-gray-400 hover:text-blue-500 focus:text-blue-500 
           border-b-2 border-transparent hover:border-blue-500 focus:font-bold
           focus:border-blue-500 transition-all duration-300 pb-1">About</Link>
  </div>

  {/* User Profile 20% */}
  <div className="flex justify-end items-center w-[20%]">
      <div className="w-10 h-10 relative rounded-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition">
          <Image
              src="/profile_image.png"
              alt="User Profile"
              fill
              className="object-cover"
              onClick={() => setHideSupNav(prev => !prev)}
          />
      </div>
      <div className={`rounded absolute bg-gray-600 h-fit w-[15%] ${hideSupNav ? 'block' : 'hidden'} right-0 top-17`}>
        <div className="p-2 font-semibold hover:bg-gray-300/40 hover:rounded">
            <Link href='/auth/login'>Log in</Link>
        </div>
        <div className="p-2 font-semibold hover:bg-gray-300/40 hover:rounded">
            <Link href='/auth/settings'>Log out</Link>
        </div>
        <div className="p-2 font-semibold hover:bg-gray-300/40 hover:rounded">
            <Link href='/auth/register'>register</Link>
        </div>
        <div className="md:block p-2 font-semibold hover:bg-gray-300/40 hover:rounded">
            <Link href='/auth/settings'>account</Link>
        </div>
      </div>
  </div>
</nav>

        


    )
}

export default DesNav