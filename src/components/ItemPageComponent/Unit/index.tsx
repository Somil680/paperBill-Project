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
import { AppDispatch } from '@/redux/store'
const Items = () => {
  const dispatch = useDispatch<AppDispatch>()
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
              <Plus /> Add Unit
            </Button>
          </div>
        </div>
        <div className="overflow-y-auto whitespace-nowrap">
          <Table className="h-full">
            <TableCaption>A list of your Products.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">FULLNAME</TableHead>
                <TableHead className="text-right">SHORTNAME</TableHead>
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

        <div className=" bg-white shadow-lg h-16 w-full p-3 flex justify-between  ">
          <p className="text-lg font-semibold">Unit</p>
          <Button>
            Add Conversion
          </Button>
        </div>

        {/* TABLE INFORMATION---------------------------------------------------------------------------------------------- */}
        <div className=" bg-white shadow-lg p-3 h-full space-y-2">
          <div className="flex justify-between">
            <p className="text-lg font-semibold">UNITS</p>
            <FloatingInput
              label="Search by Name | Type"
              type="text"
              value={filterTransaction}
              removeText={() => setFilterTransaction('')}
              onChange={(e) => setFilterTransaction(e.target.value)}
            />
          </div>
          <div className=" overflow-y-scroll h-[72.5dvh]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-20">Sl.no</TableHead>
                  <TableHead className="">Conversion</TableHead>
                 
                </TableRow>
              </TableHeader>
              <TableBody>
                              <TableRow>
                <TableCell className="">{1}</TableCell>
                <TableCell className="">{'1 BOTTLE = 9 DOZENS'}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Items
