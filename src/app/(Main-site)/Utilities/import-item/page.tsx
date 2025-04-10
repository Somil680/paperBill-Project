import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import React from 'react'
import Image from 'next/image'
import excel from '@/assets/excel.png'
import barcode from '@/assets/barcode.png'
const ImportItem = () => {
  return (
    <main className="h-full w-full flex flex-col ">
      <section className=" w-full h-14  bg-white flex items-center justify-between p-3 gap-3">
        <p className="flex items-center gap-2 text-xl font-semibold ">
          Import Items
        </p>
      </section>
      <section className="bg-[#fbfbfb] m-1 h-[87dvh] p-3 flex flex-col justify-between">
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-2xl font-semibold ">Select Import Method</p>
          <div className="flex gap-4">
            <RadioGroup defaultValue="option-one " className="flex ">
              <Label htmlFor="option-one">
                <Card className="size-80 bg-[#fbfbfb] gap-0  focus-within:border-blue-600 focus-within:size-96 focus-within:ring-1 focus-within:ring-blue-600 ">
                  <CardHeader>
                    <CardTitle className="flex justify-end">
                      <RadioGroupItem value="option-one" id="option-one" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center gap-3">
                    <Image
                      src={barcode}
                      alt="Description of the image"
                      width={150}
                      height={1500}
                    />
                    <p className="text-lg">Import From Barcode</p>
                    <p className="text-sm text-gray-500 font-normal text-center">
                      Import item details by scanning barcodes. Vyapar uses a
                      library of 100 Mn+ standard barcodes to fetch all details
                      of your items in seconds.
                    </p>
                  </CardContent>
                </Card>
              </Label>

              <Label htmlFor="option-two">
                <Card className="size-80 bg-[#fbfbfb] gap-0   focus-within:border-blue-600 focus-within:size-96  focus-within:ring-1 focus-within:ring-blue-600">
                  <CardHeader>
                    <CardTitle className="flex justify-end">
                      <RadioGroupItem value="option-two" id="option-two" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center gap-3">
                    <Image
                      src={excel}
                      alt="Description of the image"
                      width={150}
                      height={1500}
                    />
                    <p className="text-lg">Import From Excel</p>
                    <p className="text-sm text-gray-500 font-normal text-center">
                      Import item data from excel files in your system
                    </p>
                  </CardContent>
                </Card>
              </Label>
            </RadioGroup>
          </div>
        </div>
        <div className="border-t px-3 pt-3 flex gap-4 justify-end ">
          <Button
            color="red"
            variant={'destructive'}
            className="w-32 rounded-full"
          >
            {' '}
            Continue
          </Button>
        </div>
      </section>
    </main>
  )
}

export default ImportItem
