'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import MainLogo from '@/app/components/ui/Logo'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false);


  return (
    <nav className="flex md:hidden bg-black w-full h-[70px] items-center justify-between px-5 fixed top-0 z-50 shadow-md border-b border-gray-600 text-white">
      
      {/* Logo */}
      <div className="shrink-0 w-[30%]">
        <MainLogo />
      </div>

      {/* Hamburger / Close Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white text-3xl focus:outline-none"
      >
        {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-black text-white overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[400px] py-4' : 'max-h-0'
        } flex flex-col items-center space-y-3 z-40`}
      >
        <Link
            href="/"
            className="text-gray-400 hover:text-blue-500 focus:text-blue-500 
                transition-colors duration-300"
            onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
            href="/assets"
            className="text-gray-400 hover:text-blue-500 focus:text-blue-500 
                transition-colors duration-300"
            onClick={() => setIsOpen(false)}
        >
          Assets
        </Link>
        <Link
            href="/contact-us"
            className="text-gray-400 hover:text-blue-500 focus:text-blue-500 
                transition-colors duration-300"
            onClick={() => setIsOpen(false)}
        >
          Contact Us
        </Link>
        <Link
            href="/about"
            className="text-gray-400 hover:text-blue-500 focus:text-blue-500 
                transition-colors duration-300"
            onClick={() => setIsOpen(false)}
        >
          About
        </Link>

        {/* User Profile */}
        <div className="w-full text-center">
  <button
    className="text-gray-400 hover:text-blue-500 transition-colors duration-300 w-full text-center"
    onClick={() => setShowProfileMenu(prev => !prev)}
  >
    Profile ▾
  </button>

  {/* Submenu */}
  <div
    className={`mt-2 flex flex-col space-y-3 transition-all duration-300 ${
      showProfileMenu ? 'block' : 'hidden'
    }`}
  >
    <Link
      href="/auth/login"
      className="text-gray-300 hover:text-blue-500"
      onClick={() => setIsOpen(false)}
    >
      Log in
    </Link>

    <Link
      href="/auth/logout"
      className="text-gray-300 hover:text-blue-500"
      onClick={() => setIsOpen(false)}
    >
      Log out
    </Link>

    <Link
      href="/auth/register"
      className="text-gray-300 hover:text-blue-500"
      onClick={() => setIsOpen(false)}
    >
      Register
    </Link>

    <Link
      href="/auth/settings"
      className="text-gray-300 hover:text-blue-500"
      onClick={() => setIsOpen(false)}
    >
      Account
    </Link>
  </div>
</div>

      </div>
    </nav>
  )
}

export default MobileNav
