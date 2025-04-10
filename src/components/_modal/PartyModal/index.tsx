'use client'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import FloatingInput from '@/components/ui/floating-input'
import FloatingSelect from '@/components/ui/FloatingSelect'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
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
    <div className="w-[950px] h-[650px] px-4 flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between py-4 border-b ">
          <div className="flex items-center gap-4">
            <p className=" font-semibold text-xl">Add Party</p>
          </div>
          <div className="flex gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <Settings size={20} color="gray" />
            </button>
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => dispatch(closeModal())}
            >
              <X size={20} />
            </button>
          </div>
        </div>
        {/* Header input */}
        <div className="flex flex-wrap gap-6 py-5 ">
          <FloatingInput label="Party Name" />
          <FloatingInput label="GSTIN" />
          <FloatingInput label="Phone Number" />
          <FloatingSelect
            label="Party Group"
            // value={selectedType}
            // onValueChange={(val) => setSelectedType(val)}
            options={[
              { label: 'Product', value: 'Product' },
              { label: 'Service', value: 'Service' },
            ]}
          />
        </div>
        {/* Header tabs */}
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
        {/* Tabs */}
        <div className=" pt-4">
          {tab === 0 && (
            <div className="flex w-full gap-4">
              <div className="flex flex-col gap-4">
                <FloatingSelect
                  label="GST Type"
                  // value={selectedType}
                  // onValueChange={(val) => setSelectedType(val)}
                  options={[
                    { label: 'Product', value: 'Product' },
                    { label: 'Service', value: 'Service' },
                  ]}
                />
                <FloatingSelect
                  label="State"
                  // value={selectedType}
                  // onValueChange={(val) => setSelectedType(val)}
                  options={[
                    { label: 'Product', value: 'Product' },
                    { label: 'Service', value: 'Service' },
                  ]}
                />
                <FloatingInput label="Email ID"  />
              </div>
              <div className="border"></div>
              <div className="flex gap-3 w-full">
                <Textarea placeholder="Billing Address ..." cols={5} rows={3} />
                <Textarea
                  placeholder="Shipping Address ..."
                  cols={5}
                  rows={1}
                />
              </div>
            </div>
          )}
          {tab === 1 && (
            <div className="flex flex-col w-full gap-4">
              <div className="flex  gap-4">
                <FloatingInput label="Opening Balance" />
                <FloatingInput label="As of Date" type="Date" />
              </div>

              <div className="flex flex-col gap-3 w-full">
                <p>Credit Limit *</p>
                <SwitchTwoWay leftValue="No Limit" rightValue="Custom Limit" />
                <FloatingInput label="Credit Limit" />
              </div>
            </div>
          )}
          {tab === 2 && (
            <div className="flex flex-col w-full gap-4">
              <div className="flex-col flex  gap-1 ">
                <div className="flex gap-4 items-center">
                  <Checkbox id="checkbox" />
                  <FloatingInput label="Additional Field 1 Name" />
                  <FloatingInput label="Value" />
                </div>
                <p className="flex items-center gap-3 text-sm pl-9">
                  Show in Print <Switch />
                </p>
              </div>
              <div className="flex-col flex  gap-1 ">
                <div className="flex gap-4 items-center">
                  <Checkbox id="checkbox" />
                  <FloatingInput label="Additional Field 2 Name" />
                  <FloatingInput label="Value" />
                </div>
                <p className="flex items-center gap-3 text-sm pl-9">
                  Show in Print <Switch />
                </p>
              </div>
              <div className="flex-col flex  gap-1 ">
                <div className="flex gap-4 items-center">
                  <Checkbox id="checkbox" />
                  <FloatingInput label="Additional Field 3 Name" />
                  <FloatingInput label="Value" />
                </div>
                <p className="flex items-center gap-3 text-sm pl-9">
                  Show in Print <Switch />
                </p>
              </div>
              <div className="flex-col flex  gap-1 ">
                <div className="flex gap-4 items-center">
                  <Checkbox id="checkbox" />
                  <FloatingInput label="Additional Field 4 Name" />
                  <FloatingInput label="Value" />
                </div>
                <p className="flex items-center gap-3 text-sm pl-9">
                  Show in Print <Switch />
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="border-t py-3 flex gap-4 justify-end ">
        <Button>Save & New</Button>
        <Button>Save</Button>
      </div>
    </div>
  )
}

export default PartyModal
