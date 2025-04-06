import { Item } from '../../models/item/item.model'
import { v4 as uuidv4 } from 'uuid'
import { db } from '@/lib/db'
// 🟢 Get All Items
export async function getAllItems(): Promise<Item[]> {
  return await db<Item>('items').select()
}

// 🟢 Get Item by ID
export async function getItemById(id: string): Promise<Item | null> {
  const item = await db<Item>('items').where({ id }).first()
  return item || null
}

// 🟢 Create Item
export async function createItem(data: Partial<Item>): Promise<Item> {
  const newItem: Item = {
    ...data,
    id: uuidv4(),
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  } as Item

  await db<Item>('items').insert(newItem)
  return newItem
}

// 🟢 Update Item
export async function updateItem(
  id: string,
  updates: Partial<Item>
): Promise<boolean> {
  const result = await db<Item>('items')
    .where({ id })
    .update({ ...updates, updatedAt: new Date().toISOString() })
  return result > 0
}

// 🟢 Delete Item
export async function deleteItem(id: string): Promise<boolean> {
  const result = await db<Item>('items').where({ id }).del()
  return result > 0
}
