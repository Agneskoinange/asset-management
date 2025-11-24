'use client'
import Button from '@/app/components/ui/Button'
import Link from 'next/link'
import React from 'react'
import IndividualProduct from './IndividualProduct'
import DeleteAssetModal from '@/app/components/ui/Modal'

const AssetDetailsPage = () => {
  return (
    <div>
      <IndividualProduct />
      <DeleteAssetModal />
    </div>

  )
}

export default AssetDetailsPage