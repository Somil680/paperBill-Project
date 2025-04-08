'use client'
import Group from '@/components/PartyPageComponent/Group'
import Name from '@/components/PartyPageComponent/Name'
import { fetchAllItems } from '@/redux/features/item/item.reducer'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import React, { useEffect, useState } from 'react'

const PartyPage = () => {
  const [activeState, setActiveState] = useState('name')

     const dispatch = useAppDispatch()
     const { items, loading, error } = useAppSelector((state) => state.item)
     console.log("🚀 ~ ItemPage ~ items:", items)

     useEffect(() => {
       dispatch(fetchAllItems())
     }, [dispatch])
  return (

    <div>
      <div className="flex  w-full h-10 bg-white font-semibold text-lg text-neutral-500 ">
        <div
          className={` w-full flex items-center justify-center ${
            activeState === 'name' &&  'text-blue-600 border-b-2 border-blue-600'
          }`}
          onClick={() => setActiveState('name')}
        >
          NAME
        </div>
        <div
          className={` w-full flex items-center justify-center ${
            activeState === 'group' &&  'text-blue-600 border-b-2 border-blue-600'
          }`}
          onClick={() => setActiveState('group')}
        >
          GROUP
        </div>
  
    
      </div>
      {activeState === 'name' && <Name />}
      {activeState === 'group' && <Group />}
    
    </div>

    
  )
}

export default PartyPage
