'use client'
import { Button } from '@/components/ui/button'
import FloatingInput from '@/components/ui/floating-input'
import { openModal } from '@/redux/slices/modal'
import {
  EllipsisVertical,
  LoaderCircle,
  Plus,
  SlidersVertical,
  X,
} from 'lucide-react'
import React, { ChangeEvent, Suspense, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
// import { Product } from '@/lib/type'
// import { formatCurrencyINR, formatDate } from '@/hooks/hook'
import { AppDispatch } from '@/redux/store'
import { createNewItem } from '@/redux/features/item/item.reducer'
// import CategorySubcategorySelect from '@/components/categorySelect'
// import { queryOptions, useQuery } from '@tanstack/react-query'
// import { fetchProduct } from '@/lib/productAction'
// import { fetchInvoiceProductBasedProduct } from '@/lib/invoiceProductAction'
// import ActionButton from '@/components/ActionButton'

const Items = () => {
  const dispatch = useDispatch<AppDispatch>()

  const [selectedId, setSelectedId] = useState<string | null>(null)

  const [selectProduct, setSelectProduct] = useState()
  //   const [inputItem, setItemInput] = useState<Product>({
  //     id: '',
  //     name: '',
  //     hsn: '',
  //     unit: '',
  //     category: '',
  //     sub_category: ''
  //     opening_quantity: 0,
  //     purchase_price: 0,
  //     sale_price: 0,
  //     taxs: 18,
  //     location: '',
  //   })
  const [filterProduct, setFilterProduct] = useState('')
  const [filterTransaction, setFilterTransaction] = useState('')

  const open = (types: string, id: string) => {
    if (types === 'AdjustItems') {
      dispatch(
        openModal({
          type: types,
          index: id,
        })
      )
    } else {
      dispatch(
        openModal({
          type: types,
        })
      )
    }
  }
   const handleCreateItem = () => {
     const now = new Date().toISOString()

     const newItem = {
       id: crypto.randomUUID(), // or leave it blank if backend generates it
       name: 'Sample Product',
       itemType: "Product" as "Product",
       unit: 'pcs',
       salePrice: 100,
       salePriceTaxInclusive: false,
       purchasePrice: 80,
       purchasePriceTaxInclusive: false,
       isActive: true,
       createdAt: now,
       updatedAt: now,
     }

     dispatch(createNewItem(newItem))
   }
    
    
  // const [sortOrder, setSortOrder] = useState('asc')

  // Function to filter and sort data

  return (
    <main className="w-full flex gap-3 h-full ">
      <section className="bg-white shadow-lg  w-1/4 my-3 ml-3 p-3 space-y-3 ">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <FloatingInput
              label="Search Products...."
              className="w-full"
              removeText={() => setFilterProduct('')}
              type="text"
              value={filterProduct}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFilterProduct(e.target.value)
              }
            />
            <Button onClick={() => open('Items', '')}>
              <Plus /> Add Item
            </Button>
            <Button onClick={handleCreateItem}>
              <Plus /> Add Item
            </Button>
          </div>
        </div>
        <div className="overflow-y-auto whitespace-nowrap">
          <Table className="h-full">
            <TableCaption>A list of your Products.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Item</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead className="text-right w-5"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className=" ">
              <TableRow className="">
                <TableCell className="font-semibold">{'item.name'}</TableCell>

                <TableCell className="text-right">{0}</TableCell>
                <TableCell className="text-right w-5">
                  <EllipsisVertical size={15} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className=" w-3/4 my-3 mr-3 flex flex-col gap-3">
        {/* ITEM DETAILS-------------------------------------------------------------------------------------------------- */}

        <div className=" bg-white shadow-lg h-1/5 w-full p-3 ">
          <div className="flex justify-between">
            <p className="text-lg font-semibold">
              Select Product / Total Product Details
            </p>

            <Button>
              <SlidersVertical />
              Adjust Item
            </Button>
          </div>
          <div className="flex justify-between  items-center">
            <div className="space-y-6">
              <p className="text-base font-semibold text-gray-400">
                SALE PRICE: <span className="text-green-600"></span>
              </p>
              <p className="text-base font-semibold text-gray-400">
                PURCHASE PRICE: <span className="text-green-600"></span>
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-base font-semibold text-gray-400">
                STOCK QUANTITY: <span className="text-green-600"></span>
              </p>
              <p className="text-base font-semibold text-gray-400">
                STOCK VALUE: <span className="text-green-600"></span>
              </p>
            </div>
          </div>
        </div>

        {/* TABLE INFORMATION---------------------------------------------------------------------------------------------- */}
        <div className=" bg-white shadow-lg p-3 h-full space-y-2">
          <div className="flex justify-between">
            <p className="text-lg font-semibold">TRANSACTION</p>
            <FloatingInput
              label="Search by Name | Type"
              type="text"
              value={filterTransaction}
              removeText={() => setFilterTransaction('')}
              onChange={(e) => setFilterTransaction(e.target.value)}
            />
          </div>
          <div className=" overflow-y-scroll h-[65dvh]">
            <Table>
              {/* <TableCaption>
                {transaction.length > 0
                  ? ' A list of your recent invoices.'
                  : 'Select Product to see invoices '}
              </TableCaption> */}
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[20px]">Sl.no</TableHead>
                  <TableHead className="">Type</TableHead>
                  <TableHead className="w-24">Invoice no.</TableHead>
                  <TableHead className="w-24">Date</TableHead>
                  <TableHead className="w-24">Shade no.</TableHead>
                  <TableHead className="w-24">Quantity</TableHead>
                  <TableHead className="text-right w-24">Price/Unit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <></>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Items
