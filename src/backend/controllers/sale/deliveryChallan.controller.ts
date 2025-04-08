import { db } from '@/lib/db'
import { DeliveryChallan } from '@/backend/models/sale/deliveryChallan.model'
import { v4 as uuidv4 } from 'uuid'

// Get all delivery challans
export async function getAllDeliveryChallans(): Promise<DeliveryChallan[]> {
  return await db<DeliveryChallan>('delivery_challans').select()
}

// Get a delivery challan by ID
export async function getDeliveryChallanById(
  id: string
): Promise<DeliveryChallan | null> {
  const challan = await db<DeliveryChallan>('delivery_challans')
    .where({ id })
    .first()
  return challan || null
}

// Create a new delivery challan
export async function createDeliveryChallan(
  data: Partial<DeliveryChallan>
): Promise<DeliveryChallan> {
  const newChallan: DeliveryChallan = {
    ...data,
    id: uuidv4(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  } as DeliveryChallan

  await db<DeliveryChallan>('delivery_challans').insert(newChallan)
  return newChallan
}

// Update an existing delivery challan
export async function updateDeliveryChallan(
  id: string,
  updates: Partial<DeliveryChallan>
): Promise<boolean> {
  const result = await db<DeliveryChallan>('delivery_challans')
    .where({ id })
    .update({ ...updates, updatedAt: new Date().toISOString() })

  return result > 0
}

// Delete a delivery challan
export async function deleteDeliveryChallan(id: string): Promise<boolean> {
  const result = await db<DeliveryChallan>('delivery_challans')
    .where({ id })
    .del()
  return result > 0
}
