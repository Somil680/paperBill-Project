import { db } from '@/lib/db'
import { Party } from '@/backend/models/party/party.item'
import { v4 as uuidv4 } from 'uuid'

// 🟢 Get all parties
export async function getAllParties(): Promise<Party[]> {
  return await db<Party>('parties').select()
}

// 🟢 Get a single party by ID
export async function getPartyById(id: string): Promise<Party | null> {
  const party = await db<Party>('parties').where({ id }).first()
  return party || null
}

// 🟢 Create a new party
export async function createParty(data: Partial<Party>): Promise<Party> {
  const newParty: Party = {
    ...data,
    id: uuidv4(),
    shippingEnabled: data.shippingEnabled ?? false,
    paymentReminderEnabled: data.paymentReminderEnabled ?? false,
    loyaltyPointsEnabled: data.loyaltyPointsEnabled ?? false,
    creditLimitType: data.creditLimitType || 'none',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  } as Party

  await db<Party>('parties').insert(newParty)
  return newParty
}

// 🟢 Update party
export async function updateParty(
  id: string,
  updates: Partial<Party>
): Promise<boolean> {
  const result = await db<Party>('parties')
    .where({ id })
    .update({ ...updates, updatedAt: new Date().toISOString() })
  return result > 0
}

// 🟢 Delete party
export async function deleteParty(id: string): Promise<boolean> {
  const result = await db<Party>('parties').where({ id }).del()
  return result > 0
}
