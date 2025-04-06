export interface Party {
  id: string

  // 🔹 Basic Info
  name: string
  gstin?: string
  phone?: string
  email?: string

  // 🔹 GST & Address
  gstType: 'Unregistered' | 'Regular' | 'Composition' | 'Consumer' | string
  state?: string
  billingAddress?: string
  shippingAddress?: string
  shippingEnabled?: boolean

  // 🔹 Credit & Balance
  openingBalance?: number
  openingBalanceDate?: string // ISO format
  creditLimitType?: 'none' | 'custom'
  creditLimitValue?: number

  // 🔹 Additional Fields (customizable in settings)
  additionalField1?: string
  additionalField2?: string
  additionalField3?: string
  additionalField4?: string

  // 🔹 Settings-related
  paymentReminderEnabled?: boolean
  paymentReminderDays?: number
  loyaltyPointsEnabled?: boolean

  // 🔹 Audit
  createdAt: string
  updatedAt: string
}
