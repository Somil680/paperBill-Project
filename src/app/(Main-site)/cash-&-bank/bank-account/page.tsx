'use client'
import { Button } from '@/components/ui/button'
import FloatingInput from '@/components/ui/floating-input'
import { openModal } from '@/redux/slices/modal'
import { ChevronDown, Landmark, LoaderCircleIcon, Plus } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
// import { formatCurrencyINR, formatDate, formatString } from '@/hooks/hook'
import { AppDispatch } from '@/redux/store'
// import { queryOptions, useQuery } from '@tanstack/react-query'
// import { fetchBankAccount, fetchBankTransaction } from '@/lib/paymentAction'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
// import ActionButton from '@/components/ActionButton'

interface BankAccount {
  id: string
  account_number: number | null
  IFSC_code: string | null
  upi_number: string | null
  account_holder_name: string | null
  balance: number | null
  account_name: string | null
}

const BankAccount = () => {
  // const isFetching = useIsFetching()
  // console.log("🚀 ~ BankAccount ~ isFetching:", isFetching)
  const dispatch = useDispatch<AppDispatch>()
  const [filterTransaction, setFilterTransaction] = useState('')
  const [selectProduct, setSelectProduct] = useState<BankAccount[]>()
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [searchInput, setSearchInput] = useState('')

  //   const { data, isLoading } = useQuery({
  //     queryKey: ['Payment'],
  //     queryFn: fetchBankAccount,
  //     select: (data) =>
  //       data.filter((item) => item.account_name?.toLowerCase() !== 'cash'),
  //   })

  //   function groupOptions(id: string) {
  //     return queryOptions({
  //       queryKey: ['Bank_Transaction', id],
  //       queryFn: () => fetchBankTransaction(id),
  //     })
  //   }
  //   const { data: bank_transaction } = useQuery({
  //     ...groupOptions(selectedId ?? ''),
  //     enabled: !!selectedId,
  //   })

  const open = (
    types: string,
    data: BankAccount[],
    id: string,
    bank: string
  ) => {
    dispatch(
      openModal({
        type: types,
      })
    )
    if (types === 'BankAccount') {
    } else {
      dispatch(
        openModal({
          type: types,
          //   data: data,
          types: id,
          index: bank,
        })
      )
    }
  }

  const handleGetData = (item: BankAccount) => {
    setSelectProduct([item])
  }
  //   useEffect(() => {
  //     const paymentData = (data ?? []).filter(
  //       (item) => item.account_name !== 'Cash'
  //     )
  //     console.log('🚀 ~ useEffect ~ paymentData:', paymentData)
  //     setSelectProduct([paymentData[0]])
  //     setSelectedId(paymentData[0]?.id)
  //   }, [data])

  return (
    <main>
      <div className="flex  w-full h-10 bg-white font-semibold text-md text-neutral-500 ">
        <p className={` w-full flex items-center justify-center `}>BANKS</p>
      </div>
      <section className="w-full flex gap-3 h-full ">
        <section className="bg-white shadow-lg w-1/4 my-3 ml-3 p-3 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <FloatingInput
              label="Search"
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full"
              removeText={() => setSearchInput('')}
            />
            <Button onClick={() => open('BankAccount', [], '', '')}>
              <Plus /> Add Bank
            </Button>
          </div>
          <div className="overflow-y-scroll scroll-smooth h-[79.5dvh]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">ACCOUNT NAME</TableHead>
                  <TableHead className="text-right text-xs">AMOUNT</TableHead>
                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="flex gap-1 items-center">
                    <Landmark className="text-blue-500" size={20} />
                    Phonepay
                  </TableCell>
                  <TableCell className="text-right">{0}</TableCell>
                  <TableCell className="text-right w-3">
                    {/* <ActionButton type={'BankAccount'} editData={item} /> */}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
        <section className=" w-3/4 my-3 mr-3 flex flex-col gap-3">
          <div className=" bg-white shadow-lg h-1/5 w-full p-3 ">
            <div className="flex justify-between">
              <p className="text-md font-semibold">
                {selectProduct
                  ? selectProduct?.map((item) =>
                      (item?.account_name ?? 'Unknown').toUpperCase()
                    )
                  : 'Select Bank'}
              </p>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-2">
                    Deposit / Withdraw <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" text-left">
                  <DropdownMenuItem>Bank to Cash Transfer</DropdownMenuItem>
                  <DropdownMenuItem>Cash to Bank Transfer</DropdownMenuItem>
                  <DropdownMenuItem>Bank to Bank Transfer</DropdownMenuItem>
                  <DropdownMenuItem>Adjust Bank Balance</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex flex-col  ">
              <div className=" space-y-1">
                <p className="text-sm  text-gray-400">
                  Bank Name:
                  {selectProduct
                    ? selectProduct?.map((item) => item?.account_holder_name)
                    : ''}
                </p>
                <p className="text-sm  text-gray-400">
                  Account number:{' '}
                  {selectProduct
                    ? selectProduct?.map((item) => item?.account_number)
                    : ''}{' '}
                </p>
                <p className="text-sm  text-gray-400">
                  IFSC Code:{' '}
                  {selectProduct
                    ? selectProduct?.map((item) => item?.IFSC_code)
                    : ''}{' '}
                </p>
                <p className="text-sm  text-gray-400">
                  UPI Number:{' '}
                  {selectProduct
                    ? selectProduct?.map((item) => item?.upi_number)
                    : ''}{' '}
                </p>
              </div>
              {/* <div className="flex justify-between">
              <p className="text-sm  text-gray-400">
                UPI Number:{' '}
                {selectProduct
                  ? selectProduct?.map((item) => item?.upi_number)
                   : ''}{' '}
              </p>

              <p className="text-sm  text-gray-400">
                Balance:{' '}
                {selectProduct
                  ? selectProduct?.map((item) => item?.balance)
                   : ''}{' '}
              </p>
            </div> */}
            </div>
          </div>

          <div className=" bg-white shadow-lg p-3 h-full space-y-2">
            <div className="flex justify-between">
              <p className="text-md font-semibold">TRANSACTION</p>
              <FloatingInput
                label="Search by Type | Name"
                type="text"
                value={filterTransaction}
                onChange={(e) => setFilterTransaction(e.target.value)}
                removeText={() => setFilterTransaction('')}
              />
            </div>
            <div className="overflow-y-scroll h-[50dvh] scroll-smooth">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-40">Type</TableHead>
                    <TableHead className="">Name</TableHead>
                    <TableHead className="text-right w-">Date</TableHead>
                    <TableHead className="text-right w-">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="w-40">Cash Withdrawal</TableCell>
                    <TableCell className="">BANK TO CASH</TableCell>
                    <TableCell className="text-right">12/11/2023</TableCell>
                    <TableCell>2000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default BankAccount
