'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const MainLogo = () => {
    const router = useRouter();
    return (
        <div className='cursor-pointer' onClick={() => router.push('/')}>
            <div className="flex items-center space-x-3">
                <Image
                    src="/main_logo.png"
                    alt="Logo image"
                    height={60}
                    width={60}
                    priority
                    className="rounded hover:bg-gray-600"
                    style={{ width: "auto" }}
                />
                <h1 className="capitalize font-semibold xl:text-2xl md:text-xl">SaaSify</h1>
            </div>
        </div>
    )
}

export default MainLogo