'use client'
import React, { useState, useEffect } from 'react'
import Button from '../ui/Button'
import { IoMdSearch } from 'react-icons/io'
import { MdUnfoldLess } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { api } from '@/app/lib/api'
import { authStorage } from '@/app/lib/auth'
import { Asset } from '@/app/types/asset'
import AssetCard from '../AssetCard'

type AssetCardProps = {
  onClick?: () => void;
};

const AssetList = ({ onClick }: AssetCardProps) => {
    const router = useRouter();

    const [assetShow, setAssetShow] = useState(false);
    const [assets, setAssets] = useState<Asset[]>([]);
    const [filteredAssets, setFilteredAssets] = useState<Asset[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('All Assets');

    useEffect(() => {
        fetchAssets();
    }, []);

    useEffect(() => {
        filterAssets();
    }, [searchQuery, selectedFilter, assets]);

    const fetchAssets = async () => {
        const token = authStorage.getAccessToken();
        if (!token) {
            router.push('/auth/login');
            return;
        }

        try {
            setLoading(true);
            const data = await api.getAssets(token);
            setAssets(data);
            setFilteredAssets(data);
        } catch (err: any) {
            console.error('Failed to fetch assets:', err);
        } finally {
            setLoading(false);
        }
    };

    const filterAssets = () => {
        let filtered = [...assets];

        // Apply search filter
        if (searchQuery) {
            filtered = filtered.filter(asset =>
                asset.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply category filter
        if (selectedFilter !== 'All Assets') {
            const filterMap: Record<string, string> = {
                'Properties': 'property',
                'Gold': 'money',
                'Cars': 'vehicle',
                'Money': 'money',
                'Business': 'business',
                'Products': 'products',
                'Contracts': 'contracts'
            };
            const categoryFilter = filterMap[selectedFilter];
            if (categoryFilter) {
                filtered = filtered.filter(asset => asset.type === categoryFilter);
            }
        }

        setFilteredAssets(filtered);
    };

    const handleDelete = async (asset: Asset) => {
        if (!confirm(`Are you sure you want to delete "${asset.name}"?`)) return;

        const token = authStorage.getAccessToken();
        if (!token) return;

        try {
            await api.deleteAsset(token, asset.id);
            setAssets(assets.filter(a => a.id !== asset.id));
        } catch (err: any) {
            alert(err.message || 'Failed to delete asset');
        }
    };

    const handleEdit = (asset: Asset) => {
        router.push(`/assets/edit-asset/${asset.id}`);
    };

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
                        <form className="w-full mt-2 relative" onSubmit={(e) => e.preventDefault()}>
                            <IoMdSearch className="absolute top-2 left-3 text-2xl text-gray-400" />

                            <input
                                type="search"
                                name="q"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
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
                                        {['All Assets', 'Properties', 'Business', 'Cars', 'Products', 'Contracts', 'Money'].map((filter) => (
                                            <li key={filter}>
                                                <button
                                                    className="w-full text-left px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                                    onClick={() => {
                                                        setSelectedFilter(filter);
                                                        setAssetShow(false);
                                                    }}
                                                >
                                                    {filter}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="p-4 sm:p-8 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 text-white">
                    {loading ? (
                        <div className="col-span-full text-center py-12">
                            <div className="text-xl text-gray-400">Loading assets...</div>
                        </div>
                    ) : filteredAssets.length === 0 ? (
                        <div className="col-span-full text-center py-12">
                            <div className="text-xl text-gray-400">
                                {searchQuery || selectedFilter !== 'All Assets' ? 'No assets found matching your filters' : 'No assets found. Add your first asset!'}
                            </div>
                        </div>
                    ) : (
                        filteredAssets.map((asset) => (
                            <AssetCard
                                key={asset.id}
                                asset={asset}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                                onClick={(asset) => router.push(`/assets/${asset.id}`)}
                            />
                        ))
                    )}
                </div>
            </div>
        </>
    )
}

export default AssetList