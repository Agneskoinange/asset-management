'use client'
import React, { useState } from 'react'
import Button from '../ui/Button'
import { IoMdSearch } from 'react-icons/io'
import { MdUnfoldLess } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type AssetCardProps = {
  onClick?: () => void;
};

const AssetList = ({ onClick }: AssetCardProps) => {
    const router = useRouter();

    const [assetShow, setAssetShow] = useState(false);

    return (
        <>
            <div className="flex flex-col h-100vh bg-black text-white max-w-[1500px] overflow-hidden">
                <div className='flex flex-col w-full p-5'>
                    {/* Heading */}
                    <div className="flex justify-between items-center p-5">
                        <h1 className="font-bold text-2xl">Assets</h1>
                        <Link href='/assets/add-asset'>
                            <Button
                                label='+ Create new Asset'
                                type='button'
                                className='cursor-pointer'
                            />
                        </Link>
                    </div>
                    <p className="text-gray-400 pl-4 -mt-5">
                        Manage and track all your assets in one place.
                    </p>
                    {/* Search and filters */}
                    <div className="flex flex-row space-x-4 pl-4 pr-5">
                        <form className="w-full mt-2 relative" onSubmit={() => console.log('submit form')}>
                            <IoMdSearch className="absolute top-2 left-3 text-2xl text-gray-400" />

                            <input
                                type="search"
                                name="q"
                                placeholder="Search by asset name..."
                                className="w-full h-10 pl-12 pr-3 rounded border border-gray-600
                                    bg-gray-700 text-white placeholder-gray-400
                                    focus:outline-none focus:border-blue-500 focus:ring-2
                                    focus:ring-blue-500"
                            />
                        </form>

                        {/* Filters */}
                        <div className="w-1/6 mt-2">
                            <div className="relative">
                                {/* Dropdown Button */}
                                <button
                                    type="button"
                                    className="w-full h-10 px-3 flex justify-between items-center 
                                    bg-gray-700 text-gray-300 border border-gray-600 rounded
                                    hover:bg-gray-600 focus:outline-none focus:border-blue-500
                                    focus:ring-2 focus:ring-blue-500 cursor-pointer"
                                    onClick={() => setAssetShow(prev => !prev)}
                                >
                                    <span>Filter</span>
                                    <MdUnfoldLess />
                                </button>

                                {/* Dropdown Menu */}
                                <div className={`absolute ${assetShow ? 'block' : 'hidden'} left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-md shadow-xl z-20`}>
                                    <ul className="py-2 text-sm text-gray-200">
                                        <li>
                                            <button className="w-full text-left px-4 py-2 hover:bg-gray-700 cursor-pointer">
                                                All Assets
                                            </button>
                                        </li>
                                        <li>
                                            <button className="w-full text-left px-4 py-2 hover:bg-gray-700 cursor-pointer">
                                                Active
                                            </button>
                                        </li>
                                        <li>
                                            <button className="w-full text-left px-4 py-2 hover:bg-gray-700 cursor-pointer">
                                                Archived
                                            </button>
                                        </li>
                                        <li>
                                            <button className="w-full text-left px-4 py-2 hover:bg-gray-700 cursor-pointer">
                                                Properties
                                            </button>
                                        </li>
                                        <li>
                                            <button className="w-full text-left px-4 py-2 hover:bg-gray-700 cursor-pointer">
                                                Gold
                                            </button>
                                        </li>
                                        <li>
                                            <button className="w-full text-left px-4 py-2 hover:bg-gray-700 cursor-pointer">
                                                Cars
                                            </button>
                                        </li>
                                        <li>
                                            <button className="w-full text-left px-4 py-2 hover:bg-gray-700 cursor-pointer">
                                                Money
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="p-4 sm:p-8 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 text-white">
                    {/* Card 1 */}
                    <div className="w-full shadow-md hover:shadow-lg bg-gray-600 rounded-lg
                        overflow-hidden transition-shadow duration-300 cursor-pointer">
                        {/* Card image */}
                        <img
                            className="w-full h-48 object-cover"
                            src="/property.png"
                            alt="Brazil property"
                        />

                        {/* Card content */}
                        <div className="p-5 flex flex-col space-y-2">
                            <h2 className="text-white text-xl font-semibold">Jungle Villa</h2>
                            <p className="text-gray-400 text-md">Our best property in Brazil</p>
                            <Button
                                label='View Details'
                                type='button'
                                className='cursor-pointer'
                            />
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="w-full shadow-md hover:shadow-lg bg-gray-600 rounded-lg overflow-hidden
                        transition-shadow durations-300 cursor-pointer">
                            <img
                            className="w-full h-48 object-cover"
                            src="/lfa.png"
                            alt="LFA Lexus"
                            />
                            <div className="flex flex-col space-y-2 p-5">
                                <h2 className="text-white font-semibold text-xl">LFA Lexus 2015</h2>
                                <p className="text-gray-400 text md">599 HP LFA CNA</p>
                                 <Button
                                    label='View Details'
                                    type='button'
                                    className='cursor-pointer'
                                    onClick={() => router.push("/assets/1")}
                                />
                            </div>
                    </div>
                    {/* Card 3 */}
                    <div className="w-full shadow-md hover:shadow-lg bg-gray-600 rounded-lg overflow-hidden
                        transition-shadow duration-300 cursor-pointer">
                            {/* Card image */}
                            <img
                                className="w-full h-48 object-cover"
                                src="/gold.jpg"
                                alt="Brazil property"
                            />
                            <div className="flex flex-col space-y-2 p-5">
                                <h2 className="text-white font-semibold text-2xl">Gold Reserv</h2>
                                <p className="text-gray-400 text-md">1 Kg gold bars of reserv</p>
                                <Button
                                    label='View Details'
                                    type='button'
                                    className='cursor-pointer'
                                />
                            </div>
                    </div>
                    {/* Card 4 */}
                    <div className="w-full shadow-md hover:shadow-lg bg-gray-600 rounded-lg
                        overflow-hidden transition-shadow duration-300 cursor-pointer">
                        {/* Card image */}
                        <img
                            className="w-full h-48 object-cover"
                            src="/property.png"
                            alt="Brazil property"
                        />

                        {/* Card content */}
                        <div className="p-5 flex flex-col space-y-2">
                            <h2 className="text-white text-xl font-semibold">Jungle Villa</h2>
                            <p className="text-gray-400 text-md">Our best property in Brazil</p>
                            <Button
                                label='View Details'
                                type='button'
                                className='cursor-pointer'
                            />
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className="w-full shadow-md hover:shadow-lg bg-gray-600 rounded-lg overflow-hidden
                        transition-shadow durations-300 cursor-pointer">
                            <img
                            className="w-full h-48 object-cover"
                            src="/lfa.png"
                            alt="LFA Lexus"
                            />
                            <div className="flex flex-col space-y-2 p-5">
                                <h2 className="text-white font-semibold text-xl">LFA Lexus 2015</h2>
                                <p className="text-gray-400 text md">599 HP LFA CNA</p>
                                 <Button
                                    label='View Details'
                                    type='button'
                                    className='cursor-pointer'
                                />
                            </div>
                    </div>
                    {/* Card 6 */}
                    <div className="w-full shadow-md hover:shadow-lg bg-gray-600 rounded-lg overflow-hidden
                        transition-shadow duration-300 cursor-pointer">
                            {/* Card image */}
                            <img
                                className="w-full h-48 object-cover"
                                src="/gold.jpg"
                                alt="Brazil property"
                            />
                            <div className="flex flex-col space-y-2 p-5">
                                <h2 className="text-white font-semibold text-2xl">Gold Reserv</h2>
                                <p className="text-gray-400 text-md">1 Kg gold bars of reserv</p>
                                <Button
                                    label='View Details'
                                    type='button'
                                    className='cursor-pointer'
                                />
                            </div>
                    </div>
                    {/* Card 7 */}
                    <div className="w-full shadow-md hover:shadow-lg bg-gray-600 rounded-lg
                        overflow-hidden transition-shadow duration-300 cursor-pointer">
                        {/* Card image */}
                        <img
                            className="w-full h-48 object-cover"
                            src="/property.png"
                            alt="Brazil property"
                        />

                        {/* Card content */}
                        <div className="p-5 flex flex-col space-y-2">
                            <h2 className="text-white text-xl font-semibold">Jungle Villa</h2>
                            <p className="text-gray-400 text-md">Our best property in Brazil</p>
                            <Button
                                label='View Details'
                                type='button'
                                className='cursor-pointer'
                            />
                        </div>
                    </div>
                    {/* Card 8 */}
                    <div className="w-full shadow-md hover:shadow-lg bg-gray-600 rounded-lg overflow-hidden
                        transition-shadow durations-300 cursor-pointer">
                            <img
                            className="w-full h-48 object-cover"
                            src="/lfa.png"
                            alt="LFA Lexus"
                            />
                            <div className="flex flex-col space-y-2 p-5">
                                <h2 className="text-white font-semibold text-xl">LFA Lexus 2015</h2>
                                <p className="text-gray-400 text md">599 HP LFA CNA</p>
                                 <Button
                                    label='View Details'
                                    type='button'
                                    className='cursor-pointer'
                                />
                            </div>
                    </div>
                    {/* Card 9 */}
                    <div className="w-full shadow-md hover:shadow-lg bg-gray-600 rounded-lg overflow-hidden
                        transition-shadow duration-300 cursor-pointer">
                            {/* Card image */}
                            <img
                                className="w-full h-48 object-cover"
                                src="/gold.jpg"
                                alt="Brazil property"
                            />
                            <div className="flex flex-col space-y-2 p-5">
                                <h2 className="text-white font-semibold text-2xl">Gold Reserv</h2>
                                <p className="text-gray-400 text-md">1 Kg gold bars of reserv</p>
                                <Button
                                    label='View Details'
                                    type='button'
                                    className='cursor-pointer'
                                />
                            </div>
                    </div>
                    {/* Card 10 */}
                    <div className="w-full shadow-md hover:shadow-lg bg-gray-600 rounded-lg
                        overflow-hidden transition-shadow duration-300 cursor-pointer">
                        {/* Card image */}
                        <img
                            className="w-full h-48 object-cover"
                            src="/property.png"
                            alt="Brazil property"
                        />

                        {/* Card content */}
                        <div className="p-5 flex flex-col space-y-2">
                            <h2 className="text-white text-xl font-semibold">Jungle Villa</h2>
                            <p className="text-gray-400 text-md">Our best property in Brazil</p>
                            <Button
                                label='View Details'
                                type='button'
                                className='cursor-pointer'
                            />
                        </div>
                    </div>
                    {/* Card 11 */}
                    <div className="w-full shadow-md hover:shadow-lg bg-gray-600 rounded-lg overflow-hidden
                        transition-shadow durations-300 cursor-pointer">
                            <img
                            className="w-full h-48 object-cover"
                            src="/lfa.png"
                            alt="LFA Lexus"
                            />
                            <div className="flex flex-col space-y-2 p-5">
                                <h2 className="text-white font-semibold text-xl">LFA Lexus 2015</h2>
                                <p className="text-gray-400 text md">599 HP LFA CNA</p>
                                 <Button
                                    label='View Details'
                                    type='button'
                                    className='cursor-pointer'
                                />
                            </div>
                    </div>
                    {/* Card 12 */}
                    <div className="w-full shadow-md hover:shadow-lg bg-gray-600 rounded-lg overflow-hidden
                        transition-shadow duration-300 cursor-pointer">
                            {/* Card image */}
                            <img
                                className="w-full h-48 object-cover"
                                src="/gold.jpg"
                                alt="Brazil property"
                            />
                            <div className="flex flex-col space-y-2 p-5">
                                <h2 className="text-white font-semibold text-2xl">Gold Reserv</h2>
                                <p className="text-gray-400 text-md">1 Kg gold bars of reserv</p>
                                <Button
                                    label='View Details'
                                    type='button'
                                    className='cursor-pointer'
                                />
                            </div>
                    </div>
                    {/* Card 13 */}
                    <div className="w-full shadow-md hover:shadow-lg bg-gray-600 rounded-lg
                        overflow-hidden transition-shadow duration-300 cursor-pointer">
                        {/* Card image */}
                        <img
                            className="w-full h-48 object-cover"
                            src="/property.png"
                            alt="Brazil property"
                        />

                        {/* Card content */}
                        <div className="p-5 flex flex-col space-y-2">
                            <h2 className="text-white text-xl font-semibold">Jungle Villa</h2>
                            <p className="text-gray-400 text-md">Our best property in Brazil</p>
                            <Button
                                label='View Details'
                                type='button'
                                className='cursor-pointer'
                            />
                        </div>
                    </div>
                    {/* Card 14 */}
                    <div className="w-full shadow-md hover:shadow-lg bg-gray-600 rounded-lg overflow-hidden
                        transition-shadow durations-300 cursor-pointer">
                            <img
                            className="w-full h-48 object-cover"
                            src="/lfa.png"
                            alt="LFA Lexus"
                            />
                            <div className="flex flex-col space-y-2 p-5">
                                <h2 className="text-white font-semibold text-xl">LFA Lexus 2015</h2>
                                <p className="text-gray-400 text md">599 HP LFA CNA</p>
                                 <Button
                                    label='View Details'
                                    type='button'
                                    className='cursor-pointer'
                                />
                            </div>
                    </div>
                    {/* Card 15 */}
                    <div className="w-full shadow-md hover:shadow-lg bg-gray-600 rounded-lg overflow-hidden
                        transition-shadow duration-300 cursor-pointer">
                            {/* Card image */}
                            <img
                                className="w-full h-48 object-cover"
                                src="/gold.jpg"
                                alt="Brazil property"
                            />
                            <div className="flex flex-col space-y-2 p-5">
                                <h2 className="text-white font-semibold text-2xl">Gold Reserv</h2>
                                <p className="text-gray-400 text-md">1 Kg gold bars of reserv</p>
                                <Button
                                    label='View Details'
                                    type='button'
                                    className='cursor-pointer'
                                />
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AssetList