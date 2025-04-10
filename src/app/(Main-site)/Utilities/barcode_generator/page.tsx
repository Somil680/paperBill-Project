
import { Button } from '@/components/ui/button'
import FloatingInput from '@/components/ui/floating-input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Eye } from 'lucide-react'
import React from 'react'

const BarcodeGenerator = () => {
  return (
    <main className="bg-[#f3f3f3">
      <section className="bg-[#f3f3f3] px-4 pt-4 flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="text-2xl font-semibold">Barcode Generator</p>
          <div className="flex gap-4">
            <Label
              htmlFor="print"
              className="text-lg font-normal text-gray-500"
            >
              Printer:
            </Label>
            <Select>
              <SelectTrigger id="print" className="w-[180px]">
                <SelectValue placeholder="Theme" defaultValue={'Regular'} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Regular">Regular Printer</SelectItem>
                <SelectItem value="label">Label Printer</SelectItem>
              </SelectContent>
            </Select>
            <Label htmlFor="size" className="text-lg font-normal text-gray-500">
              Size:
            </Label>
            <Select>
              <SelectTrigger id="size" className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">65 Labels (38 * 21 mm)</SelectItem>
                <SelectItem value="dark">65 Labels (38 * 21 mm)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="  gap-2 flex items-center justify-between ">
          <div className="bg-white h-[150px] w-full p-10 justify-between  flex items-center ">
            <FloatingInput
              className="w-[190px]"
              label="Item Name"
              type="text"
            />
            <FloatingInput
              className="w-[190px]"
              label="Item Code"
              type="text"
            />
            <FloatingInput
              className="w-[190px]"
              label="No. of Label"
              type="text"
            />
            <FloatingInput className="w-[190px]" label="Header" type="text" />
            <FloatingInput className="w-[190px]" label="Line 1" type="text" />
            <FloatingInput className="w-[190px]" label="Line 2" type="text" />
          </div>
          <div className=" bg-white h-[150px] w-[270px] flex flex-col justify-center items-center gap-2">
            <p> Header</p>
            <p> Line1</p>
            <p> Line2</p>
            <Button disabled>Add BarCode</Button>
          </div>
        </div>
        <div className="bg-white border-2 h-[62.8dvh] overflow-y-scroll">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#ccdff0]">
                <TableHead className="">Item Name</TableHead>
                <TableHead>No.of Label</TableHead>
                <TableHead>Header</TableHead>
                <TableHead className="">Line 1</TableHead>
                <TableHead className="">Line 2</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="border-t py-3 flex gap-4 justify-end bg-white ">
          <Button variant={'secondary'} className="flex gap-2">
            <Eye /> Preview
          </Button>
          <Button className="w-40">Generate</Button>
        </div>
      </section>
      <section></section>
    </main>
  )
}

export default BarcodeGenerator
