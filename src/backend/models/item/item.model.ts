export interface Item {
  id: string // UUID or auto-increment
  name: string
  hsnCode?: string
  itemType: 'Product' | 'Service'
  category?: string
  code?: string
  unit: string
  imageUrl?: string

  // Pricing
  salePrice: number
  salePriceTaxInclusive: boolean
  saleDiscount?: number
  saleDiscountType?: 'percentage' | 'amount'
  wholesalePrice?: number

  purchasePrice: number
  purchasePriceTaxInclusive: boolean

  // Tax
  taxRate?: number // GST %

  // Stock (if applicable)
  // trackInventory: boolean
  primaryQuantity?: number
  secondaryQuantity?: number
  openingStockValue?: number
  openingStockDate?: string // ISO string
  lowStockLimit?: number
  location?: string

  // Advanced Settings
  enableBatchTracking?: boolean
  batchNumber?: string
  expiryDate?: string
  mfgDate?: string
  modelNumber?: string
  size?: string
  serialNumber?: string

  // MRP (optional)
  mrp?: number

  // Flags
  isActive: boolean
  allowNegativeStock?: boolean
  isFavorite?: boolean

  // Custom fields
  customFields?: Record<string, string>

  // Audit fields
  createdAt: string
  updatedAt: string
}
