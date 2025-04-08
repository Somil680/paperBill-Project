'use client'
import FloatingInput from '@/components/ui/floating-input'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { SwitchTwoWay } from '@/components/ui/twoWaySwitch'
import { closeModal } from '@/redux/slices/modal'
import { Settings, X } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'

const PartyModal = () => {
  const [tab, setTab] = React.useState(0)
  const dispatch = useDispatch()
  return (
    <div className="w-[950px] h-[650px] px-4">
      <div className="flex items-center justify-between py-4 border-b ">
        <div className="flex items-center gap-4">
          <p className=" font-semibold text-xl">Add Party</p>
        </div>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <Settings size={20} />
          </button>
          <button
            className="p-1 hover:bg-gray-100 rounded"
            onClick={() => dispatch(closeModal())}
          >
            <X size={20} />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 py-5 ">
        <FloatingInput label="Party Name" />
        <FloatingInput label="GSTIN" />
        <FloatingInput label="Phone Number" />
        <FloatingInput label="Party Group" />
      </div>
      <div className="border-b border-gray-200 my-3">
        <nav className="flex gap-4">
          <button
            className={`py-2 text-sm font-bold   px-3 ${
              tab === 0
                ? 'text-blue-600 border-b-4 border-blue-600 -'
                : 'text-gray-400 '
            }`}
            onClick={() => setTab(0)}
          >
            GST & Address
          </button>
          <button
            className={`py-2 text-sm font-bold  px-3 ${
              tab === 1
                ? 'text-blue-600 border-b-4 border-blue-600'
                : 'text-gray-400 '
            }`}
            onClick={() => setTab(1)}
          >
            Credit & Balance
          </button>
          <button
            className={`py-2 text-sm font-bold  px-3  ${
              tab === 2
                ? 'text-blue-600 border-b-4 border-blue-600'
                : 'text-gray-400 '
            }`}
            onClick={() => setTab(2)}
          >
            Additional Fields
          </button>
        </nav>
      </div>
      <div className="">
        {tab === 0 && (
          <div className="flex w-full gap-4">
            <div className="flex flex-col gap-4">
              <FloatingInput label="GST Type" />
              <FloatingInput label="State" />
              <FloatingInput label="Email" />
            </div>
            {/* <Separator  orientation='vertical' className='border-4 border-red-500 h-96 w-2'/> */}
            <div className="border"></div>
            <div className="flex gap-3 w-full">
              <Textarea placeholder="Billing Address ..." cols={5} rows={3} />
              <Textarea placeholder="Shipping Address ..." cols={5} rows={1} />
            </div>
          </div>
        )}
        {tab === 1 && (
          <div className="flex flex-col w-full gap-4">
            <div className="flex  gap-4">
              <FloatingInput label="Opening Balance" />
              <FloatingInput label="As of Date" type='Date' />
            </div>

            <div className="flex flex-col gap-3 w-full">
              <p>Credit Limit *</p>
              <div>
                <p>No Limit</p>
                <Switch />
                <p>Custom Limit</p>
                <SwitchTwoWay leftValue='No Limit' rightValue='Custom Limit'/>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PartyModal
