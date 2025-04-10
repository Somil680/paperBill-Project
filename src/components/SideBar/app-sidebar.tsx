import * as React from 'react'
import {
  AudioWaveform,
  ShoppingCart,
  Command,
  GalleryVerticalEnd,
  ReceiptIndianRupee,
  Landmark,
  Wrench,
  RefreshCw
} from 'lucide-react'

import { NavMain } from '@/components/SideBar/nav-main'
// import { NavProjects } from "@/components/nav-projects"
import { NavUser } from '@/components/SideBar/nav-user'
import { TeamSwitcher } from '@/components/SideBar/team-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: 'https://avatars.githubusercontent.com/u/1024025?v=4',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Sales',
      url: '/sale',
      icon: ReceiptIndianRupee,
      isActive: true,
      items: [
        {
          title: 'Sale Invoices',
          url: '/sale/sale_bill',
        },
        {
          title: 'Estimate/ Quotation',
          url: '/sale/estimate',
        },
        {
          title: 'Sale Return/ Cr. Note',
          url: '/sale/sale_return',
        },
      ],
    },
    {
      title: 'Purchase',
      url: '/purchase',
      icon: ShoppingCart,
      items: [
        {
          title: 'Purchase Bill',
          url: '/purchase/purchase_bill',
        },
        {
          title: 'Payment Out',
          url: '/purchase/payment_out',
        },
        {
          title: 'Purchase Return/ Dr. Note',
          url: '/purchase/purchase_return',
        },
      ],
    },
    {
      title: 'Cash & Bank',
      url: '',
      icon: Landmark,
      items: [
        {
          title: 'Bank Account',
          url: '/cash-&-bank/bank-account',
        },
        {
          title: 'Hand in Cash',
          url: '/cash-&-bank/cash-in-hand',
        },
        {
          title: 'Cheque',
          url: '',
        },
        {
          title: 'Loan',
          url: '',
        },
      ],
    },
    {
      title: 'Utilities',
      url: '',
      icon: Wrench,
      items: [
        {
          title: 'Import Item',
          url: '/Utilities/import-item',
        },
        {
          title: 'Export Item',
          url: '/Utilities/export-item',
        },
        {
          title: 'BarCode Generator',
          url: '/Utilities/barcode_generator',
        },
      ],
    },
    {
      title: 'Sync, Share & Backup',
      url: '',
      icon: RefreshCw,
      items: [
        {
          title: 'sync-&-share',
          url: '/sync-&-share/sync&share',
        },
        {
          title: 'Backup to Drive',
          url: '/sync-&-share/backup-to-drive',
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
