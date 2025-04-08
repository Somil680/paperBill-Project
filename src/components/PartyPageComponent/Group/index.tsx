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
  //  const handleCreateItem = () => {
  //    const now = new Date().toISOString()

  //    const newItem = {
  //      id: crypto.randomUUID(), // or leave it blank if backend generates it
  //      name: 'Sample Product',
  //      itemType: "Product" as "Product",
  //      unit: 'pcs',
  //      salePrice: 100,
  //      salePriceTaxInclusive: false,
  //      purchasePrice: 80,
  //      purchasePriceTaxInclusive: false,
  //      isActive: true,
  //      createdAt: now,
  //      updatedAt: now,
  //    }

  //    dispatch(createNewItem(newItem))
  //  }
    
    
  // const [sortOrder, setSortOrder] = useState('asc')

  // Function to filter and sort data

  return (
    <main className="w-full flex gap-3 h-full ">
      <section className="bg-white shadow-lg  w-1/4 my-3 ml-3 p-3 space-y-3 ">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <FloatingInput
              label="Search"
              className="w-full"
              removeText={() => setFilterProduct('')}
              type="text"
              value={filterProduct}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFilterProduct(e.target.value)
              }
            />
            <Button onClick={() => open('Items', '')}>
              <Plus /> Add Party Group
            </Button>
            {/* <Button onClick={handleCreateItem}>
              <Plus /> Add Item
            </Button> */}
          </div>
        </div>
        <div className="overflow-y-auto whitespace-nowrap">
          <Table className="h-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">GROUP</TableHead>
                <TableHead className="text-right">PARTY</TableHead>
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
            <p className="text-md">PARTY GROUP NAME</p>

            <Button>Move To This Group</Button>
          </div>
          <p className="text-xs font-semibold text-gray-400">
            Parties: <span className="text-green-600"></span>
          </p>
        </div>

        {/* TABLE INFORMATION---------------------------------------------------------------------------------------------- */}
        <div className=" bg-white shadow-lg p-3 h-full space-y-2">
          <div className="flex justify-between">
            <p className="text-md font-semibold">TRANSACTION</p>
            <FloatingInput
              label="Search by Name | Type"
              type="text"
              value={filterTransaction}
              removeText={() => setFilterTransaction('')}
              onChange={(e) => setFilterTransaction(e.target.value)}
            />
          </div>
          <div className=" overflow-y-scroll h-[71dvh]">
            <Table>
    
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/2">PARTY</TableHead>
                  <TableHead className="w-1/2 text-right border-l">AMOUNT</TableHead>
                  <TableHead className="text-right w-5 border-l"></TableHead>
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
