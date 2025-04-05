/*
'use client'
import React from 'react'
import FloatingInput from '@/components/ui/floating-input'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { format } from 'date-fns'
import { CalendarIcon, Terminal } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import { Check, ChevronsUpDown } from 'lucide-react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

import { Switch } from '@/components/ui/switch'

const frameworks = [
  {
    value: 'unregistered/consumers',
    label: 'Unregistered/Consumers',
  },
  {
    value: 'registered business-regular',
    label: 'Registered Business-regular',
  },
  {
    value: 'registered business-composition',
    label: 'Registered Business-composition',
  },
]

const framework1 = [
  {
    value: 'MadhyaPradesh',
    label: 'madhyapradesh',
  },
  {
    value: 'Rajasthan',
    label: 'rajasthan',
  },
  {
    value: 'Gujrat',
    label: 'gujrat',
  },
  {
    value: 'Tamilnadu',
    label: 'tamilnadu',
  },
]

const PartyModal = () => {
  const [open, setOpen] = React.useState(false);
  const [isAirplaneMode, setIsAirplaneMode] = React.useState(false);
  
  const [value, setValue] = React.useState('');
  const [date, setDate] = React.useState<Date>();
  const [openFramework, setOpenFramework] = React.useState(false);
  const [openState, setOpenState] = React.useState(false);
  const [frameworkValue, setFrameworkValue] = React.useState('');
  const [stateValue, setStateValue] = React.useState('');
  const [email, setEmail] = React.useState('Entermail@gmail.com');
 
  
  

  return (
    <div className="flex flex-col space-y-6 p-6">
      <h1 className="text-2xl font-bold text-black">Add Party</h1>
  
    
      <div className="flex flex-wrap gap-4 justify-between">
        <FloatingInput id="partyName" label="Party Name * " className="w-[32%]" />
        <FloatingInput id="gstin" label="GSTIN " className="w-[32%]" />
        <FloatingInput id="phone" label="Phone Number" className="w-[32%]" />
      </div>
  
    
      <div className="w-full">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full flex justify-around bg-muted p-2 rounded-md">
            <TabsTrigger value="account">GST & Address</TabsTrigger>
            <TabsTrigger value="password">Credit Balance</TabsTrigger>
            <TabsTrigger value="Additional">Additional Field</TabsTrigger>
          </TabsList>
  
         
          <div className="mt-6 min-h-[400px]">
            <TabsContent value="account">
            
              <Card>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 
                  <div>
                    <Label>GST Type</Label>
                
                  </div>
  
                 
                  <div>
                    <Label>State</Label>
              
                  </div>
  
                  
                  <div>
                    <Label>Email</Label>
                    <Input defaultValue="Entermail@gmail.com" />
                  </div>
  
                  <div>
                    <Label>Address</Label>
                    <Textarea placeholder="Enter full address..." />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
  
            <TabsContent value="password">
              <Card>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <FloatingInput label="Opening Balance" className="w-[45%]" />
  
                    <div className="w-[45%]">
                      <Label>Opening Date</Label>
                    
                    </div>
                  </div>
  
                  <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Credit Limit</AlertTitle>
                  </Alert>
  
                  <div className="flex justify-start items-center gap-4 mt-2">
                    <Label>No Limit</Label>
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Custom Limit</Label>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
  
            <TabsContent value="Additional">
              <Card>
                <CardContent className="space-y-4">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="flex items-center gap-4">
                      <Checkbox id={`field${num}`} />
                      <FloatingInput label={`Additional field ${num} Name`} />
                    </div>
                  ))}
  
                  <div className="mt-4">
                    <Label>Reminder Date</Label>
                  
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
  
 
      <div className="flex justify-end mt-6">
        <Button type="submit" className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700">
          Save
        </Button>
      </div>
    </div>
  )
  
}

export default PartyModal
*/

'use client'
import React from 'react'
import FloatingInput from '@/components/ui/floating-input'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { format } from 'date-fns'
import { CalendarIcon, Terminal, X } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { Alert, AlertTitle } from '@/components/ui/alert'

import { Check, ChevronsUpDown } from 'lucide-react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

import { Switch } from '@/components/ui/switch'

const frameworks = [
  {
    value: 'unregistered/consumers',
    label: 'Unregistered/Consumers',
  },
  {
    value: 'registered business-regular',
    label: 'Registered Business-regular',
  },
  {
    value: 'registered business-composition',
    label: 'Registered Business-composition',
  },
]

const framework1 = [
  {
    value: 'MadhyaPradesh',
    label: 'madhyapradesh',
  },
  {
    value: 'Rajasthan',
    label: 'rajasthan',
  },
  {
    value: 'Gujrat',
    label: 'gujrat',
  },
  {
    value: 'Tamilnadu',
    label: 'tamilnadu',
  },
]

const PartyModal = () => {
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState('');
  const [date, setDate] = React.useState<Date>();
  const [openFramework, setOpenFramework] = React.useState(false);
  const [openState, setOpenState] = React.useState(false);
  const [frameworkValue, setFrameworkValue] = React.useState('');
  const [stateValue, setStateValue] = React.useState('');

  if (!open) return null;

  return (
    <div className="relative bg-white shadow-lg rounded-md p-6 max-w-5xl mx-auto">
      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 text-gray-600 hover:text-black"
      >
        <X className="w-6 h-6" />
      </button>

      <h1 className="text-2xl font-bold text-black mb-6">Add Party</h1>

      {/* Input Fields */}
      <div className="flex flex-wrap gap-4 justify-between mb-6">
        <FloatingInput id="partyName" label="Party Name * " className="w-[32%]" />
        <FloatingInput id="gstin" label="GSTIN " className="w-[32%]" />
        <FloatingInput id="phone" label="Phone Number" className="w-[32%]" />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full flex justify-around bg-muted p-2 rounded-md">
          <TabsTrigger value="account">GST & Address</TabsTrigger>
          <TabsTrigger value="password">Credit Balance</TabsTrigger>
          <TabsTrigger value="Additional">Additional Field</TabsTrigger>
        </TabsList>

        <div className="mt-6 min-h-[400px]">
          <TabsContent value="account">
            <Card>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* GST Type */}
                <div>
                  <Label>GST Type</Label>
                  <Popover open={openFramework} onOpenChange={setOpenFramework}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full justify-between"
                      >
                        {value
                          ? frameworks.find((f) => f.value === value)?.label
                          : 'Select GST Type'}
                        <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder="Search GST Type..." />
                        <CommandList>
                          <CommandEmpty>No GST type found.</CommandEmpty>
                          <CommandGroup>
                            {frameworks.map((f) => (
                              <CommandItem
                                key={f.value}
                                onSelect={() => {
                                  setValue(f.value)
                                  setOpenFramework(false)
                                }}
                              >
                                {f.label}
                                <Check className={cn('ml-auto', value === f.value ? 'opacity-100' : 'opacity-0')} />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>

                {/* State */}
                <div>
                  <Label>State</Label>
                  <Popover open={openState} onOpenChange={setOpenState}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full justify-between"
                      >
                        {stateValue
                          ? framework1.find((s) => s.value === stateValue)?.label
                          : 'Select State'}
                        <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder="Search state..." />
                        <CommandList>
                          <CommandEmpty>No state found.</CommandEmpty>
                          <CommandGroup>
                            {framework1.map((s) => (
                              <CommandItem
                                key={s.value}
                                onSelect={() => {
                                  setStateValue(s.value)
                                  setOpenState(false)
                                }}
                              >
                                {s.label}
                                <Check className={cn('ml-auto', stateValue === s.value ? 'opacity-100' : 'opacity-0')} />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Email */}
                <div>
                  <Label>Email</Label>
                  <Input defaultValue="Entermail@gmail.com" />
                </div>

                {/* Address */}
                <div>
                  <Label>Address</Label>
                  <Textarea placeholder="Enter full address..." />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="password">
            <Card>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <FloatingInput label="Opening Balance" className="w-[45%]" />
                  <div className="w-[45%]">
                    <Label>Opening Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full justify-start text-left font-normal',
                            !date && 'text-muted-foreground'
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, 'PPP') : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <Alert>
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Credit Limit</AlertTitle>
                </Alert>

                <div className="flex items-center gap-4 mt-2">
                  <Label>No Limit</Label>
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Custom Limit</Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="Additional">
            <Card>
              <CardContent className="space-y-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="flex items-center gap-4">
                    <Checkbox id={`field${num}`} />
                    <FloatingInput label={`Additional field ${num} Name`} />
                  </div>
                ))}

                <div className="mt-4">
                  <Label>Reminder Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          !date && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>

      {/* Save Button */}
      <div className="flex justify-end mt-6">
        <Button type="submit" className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700">
          Save
        </Button>
      </div>
    </div>
  )
}

export default PartyModal
