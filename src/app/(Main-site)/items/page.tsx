'use client'
import Category from '@/components/ItemPageComponent/Category'
import Product from '@/components/ItemPageComponent/Product'
import Service from '@/components/ItemPageComponent/Service'
import Unit from '@/components/ItemPageComponent/Unit'
import { fetchAllItems } from '@/redux/features/item/item.reducer'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import React, { useEffect, useState } from 'react'

const ItemPage = () => {
  const [activeState, setActiveState] = useState('product')

     const dispatch = useAppDispatch()
     const { items, loading, error } = useAppSelector((state) => state.item)
     console.log("🚀 ~ ItemPage ~ items:", items)

     useEffect(() => {
       dispatch(fetchAllItems())
     }, [dispatch])
  return (

    <div>
      <div className="flex  w-full h-10 bg-white font-bold text-lg text-neutral-500 ">
        <div
          className={`w-1/4  flex items-center justify-center ${
            activeState === 'product' && 'border-b-2 border-blue-600'
          }`}
          onClick={() => setActiveState('product')}
        >
          PRODUCT
        </div>
        <div
          className={`w-1/4  flex items-center justify-center ${
            activeState === 'service' && 'border-b-2 border-blue-600'
          }`}
          onClick={() => setActiveState('service')}
        >
          SERVICE
        </div>
        <div
          className={`w-1/4  flex items-center justify-center ${
            activeState === 'category' && 'border-b-2 border-blue-600'
          }`}
          onClick={() => setActiveState('category')}
        >
          CATEGORY
        </div>
        <div
          className={`w-1/4  flex items-center justify-center ${
            activeState === 'unit' && 'border-b-2 border-blue-600'
          }`}
          onClick={() => setActiveState('unit')}
        >
          UNIT
        </div>
      </div>
      {activeState === 'product' && <Product />}
      {activeState === 'service' && <Service />}
      {activeState === 'category' && <Category />}
      {activeState === 'unit' && <Unit />}
    </div>

    
  )
}

export default ItemPage
