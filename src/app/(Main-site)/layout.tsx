'use client'

import { useState, useRef, useEffect } from 'react'
import { AppSidebar } from '@/components/SideBar/app-sidebar'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Plus, X } from 'lucide-react'
import ModalManager from '@/components/_modal/modalManager'
import SaleForm from '@/components/Saleform/SaleForm'
import PurchaseForm from '@/components/PurchaseForm/PurchaseForm'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

interface Tab {
  id: string
  label: string
  type: 'sale' | 'purchase' // New property
  formData: {
    customerName: string
    item: string
    amount: string
  }
  paymentType: 'credit' | 'cash'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [tabs, setTabs] = useState<Tab[]>([])
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const [showCloseAlert, setShowCloseAlert] = useState(false)
  const [tabToClose, setTabToClose] = useState<string | null>(null)
  const [closeAll, setCloseAll] = useState(false)
  const [tabSizes, setTabSizes] = useState<{ [key: string]: number }>({})
  const [isCredit, setIsCredit] = useState(false)

  const customerList = ['Alice', 'Bob', 'Charlie']
  const supplierList = ['Supplier A', 'Supplier B', 'Supplier C'] // Define supplier list

  const handleCustomerNameUpdate = (tabId: string, name: string) => {
    setTabs((prev) =>
      prev.map((tab) =>
        tab.id === tabId
          ? { ...tab, formData: { ...tab.formData, customerName: name } }
          : tab
      )
    )
  }

  const tabContainerRef = useRef<HTMLDivElement>(null)

  const handleAddPurchase = () => {
    const newTabId = `purchase-${Date.now()}`
    const newTab: Tab = {
      id: newTabId,
      label: `Purchase #${
        tabs.filter((tab) => tab.type === 'purchase').length + 1
      }`,
      type: 'purchase', // Set type to purchase
      formData: {
        customerName: '',
        item: '',
        amount: '',
      },
      paymentType: 'cash', // Default payment type
    }
    setTabs((prev) => [...prev, newTab])
    setActiveTab(newTabId)
  }

  const handleAddSale = () => {
    const newTabId = `sale-${Date.now()}`
    const newTab: Tab = {
      id: newTabId,
      label: `Sale #${tabs.filter((tab) => tab.type === 'sale').length + 1}`,
      type: 'sale', // Set type to sale
      formData: {
        customerName: '',
        item: '',
        amount: '',
      },
      paymentType: 'cash',
    }
    setTabs((prev) => [...prev, newTab])
    setActiveTab(newTabId)
  }

  const handleCloseTab = (id: string) => {
    setTabs((prev) => prev.filter((tab) => tab.id !== id))
    if (activeTab === id) {
      const remainingTabs = tabs.filter((tab) => tab.id !== id)
      setActiveTab(remainingTabs.length > 0 ? remainingTabs[0].id : null)
    }
  }

  const handleCloseAllTabs = () => {
    setCloseAll(true)
    setShowCloseAlert(true)
  }

  const handleFormChange = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> // Allow both input and select events
  ) => {
    setTabs((prev) =>
      prev.map((tab) => {
        if (tab.id === id) {
          return {
            ...tab,
            formData: {
              ...tab.formData,
              [e.target.name]: e.target.value, // Access the form element's name and value
            },
          }
        }
        return tab
      })
    )
  }

  const handlePaymentTypeChange = (id: string) => {
    setTabs((prev) =>
      prev.map((tab) => {
        if (tab.id === id) {
          return {
            ...tab,
            paymentType: tab.paymentType === 'cash' ? 'credit' : 'cash',
          }
        }
        return tab
      })
    )
  }

  const handleFormSubmit = (id: string, e: React.FormEvent) => {
    e.preventDefault()
    const tab = tabs.find((t) => t.id === id)
    if (tab) {
      alert(`Sale saved for form ${id}`)
      setTabs((prev) =>
        prev.map((t) => {
          if (t.id === id) {
            return {
              ...t,
              formData: {
                customerName: '',
                item: '',
                amount: '',
              },
            }
          }
          return t
        })
      )
    }
  }

  const handleCloseRequest = (id: string) => {
    setTabToClose(id)
    setCloseAll(false)
    setShowCloseAlert(true)
  }

  const handleConfirmClose = () => {
    if (closeAll) {
      setTabs([])
      setActiveTab(null)
    } else if (tabToClose) {
      handleCloseTab(tabToClose)
    }
    setShowCloseAlert(false)
    setTabToClose(null)
    setCloseAll(false)
  }

  const handleCancelClose = () => {
    setShowCloseAlert(false)
    setTabToClose(null)
    setCloseAll(false)
  }

  // Adjust tab widths when tabs change or window resizes
  useEffect(() => {
    const updateTabWidths = () => {
      if (tabs.length === 0 || !tabContainerRef.current) return

      const container = tabContainerRef.current
      const containerWidth =
        container.parentElement?.clientWidth || container.clientWidth
      const reservedSpace = 50 // Space for close-all button
      const availableWidth = containerWidth - reservedSpace
      const defaultTabWidth = 200
      const totalRequiredWidth = tabs.length * defaultTabWidth + 40 // +40 for the add tab button

      if (totalRequiredWidth > availableWidth) {
        const newWidth = Math.max(80, (availableWidth - 40) / tabs.length) // -40 for the add tab button
        const newTabSizes: { [key: string]: number } = {}
        tabs.forEach((tab) => {
          newTabSizes[tab.id] = newWidth
        })
        setTabSizes(newTabSizes)
      } else {
        if (Object.keys(tabSizes).length > 0) {
          setTabSizes({})
        }
      }
    }

    updateTabWidths()
    window.addEventListener('resize', updateTabWidths)
    return () => window.removeEventListener('resize', updateTabWidths)
  }, [tabs])

  useEffect(() => {
    console.log('Active Tab:', activeTab)
    console.log(
      'Active Tab Type:',
      tabs.find((tab) => tab.id === activeTab)?.type
    )
  }, [activeTab, tabs])

  const isFullScreen = !!activeTab

  return (
    <div className="w-full h-screen flex bg-primary text-black">
      <SidebarProvider>
        <AlertDialog open={showCloseAlert} onOpenChange={setShowCloseAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                {closeAll
                  ? `Changes on all ${tabs.length} tabs will be discarded.`
                  : 'Are you sure you want to close this tab?'}
              </AlertDialogTitle>
              <AlertDialogDescription>
                Any unsaved changes will be lost. You can't undo this action.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleCancelClose}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleConfirmClose}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {!isFullScreen && <AppSidebar />}

        <SidebarInset>
          {!isFullScreen && (
            <header className="border flex h-16 shrink-0 items-center gap-2">
              <div className="flex justify-between w-full items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <div className="flex justify-center gap-2">
                  <button
                    onClick={handleAddSale}
                    className="hover:cursor-pointer shadow-lg gap-2 h-[35px] text-lg py-2 px-4 items-center flex justify-center rounded-3xl bg-[#ffd7dc] text-[#f03d3b] hover:bg-[#ffbab6]"
                  >
                    <Plus />
                    Add Sale
                  </button>
                  <button
                    onClick={handleAddPurchase} // Call the new function
                    className="hover:cursor-pointer shadow-lg gap-2 h-[35px] text-lg py-2 px-4 items-center flex justify-center rounded-3xl bg-[#cce6ff] text-[#3f75e8] hover:bg-[#b5d5f3]"
                  >
                    <Plus />
                    Add Purchase
                  </button>
                </div>
              </div>
            </header>
          )}

          <div
            className={`${
              isFullScreen ? 'w-screen h-screen' : 'h-[calc(100vh-4rem)]'
            } bg-[#cfdbe6] overflow-hidden`}
          >
            <ModalManager />

            {isFullScreen && (
              <div className="flex flex-col">
                {/* Chrome-style Tab Bar */}
                <div className="flex items-end bg-[#fbfbfb]">
                  <div className="flex-1 min-w-0 overflow-x-auto">
                    <div
                      ref={tabContainerRef}
                      className="flex items-end"
                      style={{ width: 'fit-content' }}
                    >
                      {tabs.map((tab, index) => {
                        const isActive = activeTab === tab.id
                        const nextTab = tabs[index + 1]
                        const nextIsInactive =
                          nextTab && activeTab !== nextTab.id
                        const thisIsInactive = !isActive
                        const isFirst = index === 0
                        const isLast = index === tabs.length - 1
                        const activeIndex = tabs.findIndex(
                          (t) => t.id === activeTab
                        )

                        // Determine if this tab should have rounded corners
                        let roundedClasses = ''
                        if (!isActive) {
                          if (isFirst && activeIndex === 1) {
                            roundedClasses = 'rounded-br-lg'
                          } else if (
                            isLast &&
                            activeIndex === tabs.length - 2
                          ) {
                            roundedClasses = 'rounded-bl-lg'
                          } else if (activeIndex === index - 1) {
                            roundedClasses = 'rounded-bl-lg'
                          } else if (activeIndex === index + 1) {
                            roundedClasses = 'rounded-br-lg'
                          } else if (isFirst) {
                            roundedClasses = 'rounded-bl-lg'
                          } else if (isLast) {
                            roundedClasses = 'rounded-br-lg'
                          }
                        }

                        const verticalSeparator =
                          thisIsInactive && nextIsInactive
                            ? 'after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-6 after:w-[2px] after:bg-gray-400'
                            : ''

                        return (
                          <div
                            key={tab.id}
                            data-tab-id={tab.id}
                            style={{
                              width: tabSizes[tab.id]
                                ? `${tabSizes[tab.id]}px`
                                : '200px',
                              minWidth: tabSizes[tab.id]
                                ? `${Math.min(tabSizes[tab.id], 200)}px`
                                : '120px',
                            }}
                            className={`relative flex flex-shrink-0 items-center justify-between px-4 pt-2 pb-1 cursor-pointer border-gray-300 text-xs text-gray-500 font-extralight ${
                              isActive
                                ? 'bg-white font-semibold h-9 concave-corner'
                                : `bg-[#eaeaea] h-9 ${roundedClasses} ${
                                    index > 0 ? 'border-l-0' : ''
                                  } ${verticalSeparator} `
                            }`}
                          >
                            <span
                              className="truncate w-full"
                              onClick={() => setActiveTab(tab.id)}
                            >
                              {tab.label}
                            </span>
                            <X
                              size={15}
                              className="hover:text-red-500 ml-2 flex-shrink-0"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleCloseRequest(tab.id)
                              }}
                            />
                            {/* Tab bottom connector */}
                            {isActive && (
                              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"></div>
                            )}
                          </div>
                        )
                      })}
                      {/* Conditionally Render Add Tab Buttons */}
                      {!activeTab ||
                      tabs.find((tab) => tab.id === activeTab)?.type ===
                        'sale' ? (
                        <button
                          onClick={handleAddSale}
                          className="flex items-center justify-center w-10 h-9 text-white flex-shrink-0"
                          title="Add Sale Tab"
                        >
                          <Plus
                            className="bg-blue-500 rounded-full hover:cursor-pointer text-white"
                            size={16}
                          />
                        </button>
                      ) : (
                        <button
                          onClick={handleAddPurchase}
                          className="flex items-center justify-center w-10 h-9 text-white flex-shrink-0"
                          title="Add Purchase Tab"
                        >
                          <Plus
                            className="bg-green-500 rounded-full hover:cursor-pointer text-white"
                            size={16}
                          />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center h-9 px-2">
                    <button
                      onClick={handleCloseAllTabs}
                      className="px-1 py-1 bg-gray-500 text-white hover:cursor-pointer  rounded-full flex-shrink-0"
                      title="Close All Tabs"
                    >
                      <X className="" size={14} />
                    </button>
                  </div>
                </div>

                {/* Connected Content Strip */}
                {activeTab &&
                  (tabs.find((tab) => tab.id === activeTab)?.type === 'sale' ? (
                    <div
                      className={`flex items-center px-4 py-2 border-l border-r border-b border-gray-300 bg-white space-x-4`}
                    >
                      <h3 className="text-lg font-semibold mr-4">Sale</h3>
                      <div className="w-[1px] h-4 bg-gray-400" />
                      <div className="flex items-center space-x-2">
                        <span
                          className={cn(
                            'text-xs font-semibold transition-colors',
                            tabs.find((tab) => tab.id === activeTab)
                              ?.paymentType === 'credit'
                              ? 'text-black'
                              : 'text-blue-600 font-semibold'
                          )}
                        >
                          Credit
                        </span>

                        <Switch
                          checked={
                            tabs.find((tab) => tab.id === activeTab)
                              ?.paymentType === 'credit'
                          }
                          onCheckedChange={() =>
                            handlePaymentTypeChange(activeTab)
                          }
                        />

                        <span
                          className={cn(
                            'text-xs font-semibold transition-colors',
                            tabs.find((tab) => tab.id === activeTab)
                              ?.paymentType === 'credit'
                              ? 'text-blue-600 font-semibold'
                              : 'text-black'
                          )}
                        >
                          Cash
                        </span>
                      </div>
                    </div>
                  ) : (
                    tabs.find((tab) => tab.id === activeTab)?.type ===
                      'purchase' && (
                      <div
                        className={`flex items-center px-4 py-2 border-l border-r border-b border-gray-300 bg-white space-x-4`}
                      >
                        <h3 className="text-lg font-semibold mr-4">Purchase</h3>
                      </div>
                    )
                  ))}
              </div>
            )}

            <div className="w-full h-full overflow-auto">
              {activeTab &&
                (tabs.find((tab) => tab.id === activeTab)?.type === 'sale' ? (
                  <SaleForm
                    key={activeTab}
                    formId={activeTab}
                    formData={
                      tabs.find((tab) => tab.id === activeTab)?.formData || {
                        customerName: '',
                        item: '',
                        amount: '',
                      }
                    }
                    onChange={(e) => handleFormChange(activeTab, e)}
                    onSubmit={(e) => handleFormSubmit(activeTab, e)}
                    paymentType={
                      tabs.find((tab) => tab.id === activeTab)?.paymentType ||
                      'cash'
                    }
                    onTogglePaymentType={() =>
                      handlePaymentTypeChange(activeTab)
                    }
                    customerList={customerList}
                    updateCustomerName={(name) =>
                      handleCustomerNameUpdate(activeTab, name)
                    }
                  />
                ) : (
                  <PurchaseForm
                    key={activeTab}
                    formId={activeTab}
                    formData={
                      tabs.find((tab) => tab.id === activeTab)?.formData || {
                        customerName: '',
                        item: '',
                        amount: '',
                      }
                    }
                    onChange={(e) => handleFormChange(activeTab, e)}
                    onSubmit={(e) => handleFormSubmit(activeTab, e)}
                    paymentType={
                      tabs.find((tab) => tab.id === activeTab)?.paymentType ||
                      'cash'
                    }
                    onTogglePaymentType={() =>
                      handlePaymentTypeChange(activeTab)
                    }
                    supplierList={supplierList}
                    customerList={customerList}
                    updateCustomerName={(name) =>
                      handleCustomerNameUpdate(activeTab, name)
                    }
                    updateSupplierName={(name) =>
                      handleCustomerNameUpdate(activeTab, name)
                    }
                  />
                ))}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
