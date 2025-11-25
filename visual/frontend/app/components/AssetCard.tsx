'use client';

import { Asset } from '@/app/types/asset';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Image from 'next/image';

interface AssetCardProps {
  asset: Asset;
  onEdit?: (asset: Asset) => void;
  onDelete?: (asset: Asset) => void;
  onClick?: (asset: Asset) => void;
}

export default function AssetCard({ asset, onEdit, onDelete, onClick }: AssetCardProps) {
  const formatCurrency = (value: string | number) => {
    const num = typeof value === 'string' ? parseFloat(value) : value;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(num);
  };

  const getCategoryColor = (type: string) => {
    const colors: Record<string, string> = {
      property: 'bg-blue-500',
      business: 'bg-green-500',
      vehicle: 'bg-yellow-500',
      products: 'bg-purple-500',
      contracts: 'bg-pink-500',
      money: 'bg-teal-500',
    };
    return colors[type] || 'bg-gray-500';
  };

  return (
    <div
      className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer border border-gray-800"
      onClick={() => onClick?.(asset)}
    >
      {/* Image */}
      <div className="relative h-48 bg-gray-800">
        {asset.image ? (
          <Image
            src={asset.image}
            alt={asset.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <span className="text-4xl">📦</span>
          </div>
        )}
        {/* Category Badge */}
        <div className={`absolute top-2 right-2 ${getCategoryColor(asset.type)} text-white px-3 py-1 rounded-full text-xs font-semibold uppercase`}>
          {asset.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2 truncate">{asset.name}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Value:</span>
            <span className="text-white font-semibold">{formatCurrency(asset.value)}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Receipt:</span>
            <span className={`text-xs px-2 py-1 rounded ${asset.receipt === 'yes' ? 'bg-green-600' : 'bg-red-600'} text-white`}>
              {asset.receipt === 'yes' ? 'Yes' : 'No'}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Insured:</span>
            <span className={`text-xs px-2 py-1 rounded ${asset.insured === 'yes' ? 'bg-green-600' : 'bg-red-600'} text-white`}>
              {asset.insured === 'yes' ? 'Yes' : 'No'}
            </span>
          </div>
        </div>

        {/* Actions */}
        {(onEdit || onDelete) && (
          <div className="flex gap-2 pt-3 border-t border-gray-800">
            {onEdit && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(asset);
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center justify-center gap-2 transition-colors"
              >
                <FaEdit /> Edit
              </button>
            )}
            {onDelete && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(asset);
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center justify-center gap-2 transition-colors"
              >
                <FaTrash /> Delete
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
