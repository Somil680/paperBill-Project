import { db } from '@/lib/db'
import { SaleOrder } from '@/backend/models/sale/saleOrder.model'
import { v4 as uuidv4 } from 'uuid'

// Get all sale orders
export async function getAllSaleOrders(): Promise<SaleOrder[]> {
  return await db<SaleOrder>('sale_orders').select()
}

// Get a single sale order by ID
export async function getSaleOrderById(id: string): Promise<SaleOrder | null> {
  const order = await db<SaleOrder>('sale_orders').where({ id }).first()
  return order || null
}

// Create a new sale order
export async function createSaleOrder(
  data: Partial<SaleOrder>
): Promise<SaleOrder> {
  const newOrder: SaleOrder = {
    ...data,
    id: uuidv4(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  } as SaleOrder

  await db<SaleOrder>('sale_orders').insert(newOrder)
  return newOrder
}

// Update a sale order
export async function updateSaleOrder(
  id: string,
  updates: Partial<SaleOrder>
): Promise<boolean> {
  const result = await db<SaleOrder>('sale_orders')
    .where({ id })
    .update({ ...updates, updatedAt: new Date().toISOString() })

  return result > 0
}

// Delete a sale order
export async function deleteSaleOrder(id: string): Promise<boolean> {
  const result = await db<SaleOrder>('sale_orders').where({ id }).del()
  return result > 0
}
