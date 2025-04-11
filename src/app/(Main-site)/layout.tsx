
'use client'
import { useState } from 'react'
import { AppSidebar } from '@/components/SideBar/app-sidebar'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Plus } from 'lucide-react'
import ModalManager from '@/components/_modal/modalManager'
import TabManager from '@/components/TabManager/TabManager'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [showTabManager, setShowTabManager] = useState(false)
  const [tabType, setTabType] = useState<'sale' | 'purchase'>('sale')

  const handleAddSale = () => {
    setTabType('sale')
    setShowTabManager(true)
  }

  const handleAddPurchase = () => {
    setTabType('purchase')
    setShowTabManager(true)
  }

  const handleCloseTabManager = () => {
    setShowTabManager(false)
  }

  return (
    <div className="w-full flex bg-primary text-black">
      <SidebarProvider>
        {!showTabManager && <AppSidebar />}
        <SidebarInset>
          {!showTabManager && (
            <header className="border flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex justify-between w-full items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <div className="flex justify-center gap-2">
                  <button
                    onClick={handleAddSale}
                    className="shadow-lg gap-2 h-[35px] text-lg py-2 px-4 items-center flex justify-center rounded-3xl bg-[#ffd7dc] text-[#f03d3b] hover:bg-[#ffbab6] hover:cursor-pointer"
                  >
                    <Plus />
                    Add Sale
                  </button>
                  <button
                    onClick={handleAddPurchase}
                    className="shadow-lg gap-2 h-[35px] text-lg py-2 px-4 items-center flex justify-center rounded-3xl bg-[#cce6ff] text-[#3f75e8] hover:bg-[#b5d5f3] hover:cursor-pointer"
                  >
                    <Plus />
                    Add Purchase
                  </button>
                </div>
              </div>
            </header>
          )}
          <div className={`${showTabManager ? 'w-screen h-screen' : 'h-[calc(100vh-4rem)]'} bg-[#cfdbe6]`}>
            <ModalManager />
            {showTabManager ? (
              <TabManager initialTabType={tabType} onClose={handleCloseTabManager} />
            ) : (
              children
            )}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}