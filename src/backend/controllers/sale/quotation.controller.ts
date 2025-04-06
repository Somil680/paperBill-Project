import { db } from '@/lib/db'
import { Quotation } from '@/backend/models/sale/quotation.model'
import { v4 as uuidv4 } from 'uuid'

// Get all quotations
export async function getAllQuotations(): Promise<Quotation[]> {
  return await db<Quotation>('quotations').select()
}

// Get single quotation by ID
export async function getQuotationById(id: string): Promise<Quotation | null> {
  const quotation = await db<Quotation>('quotations').where({ id }).first()
  return quotation || null
}

// Create new quotation
export async function createQuotation(
  data: Partial<Quotation>
): Promise<Quotation> {
  const newQuotation: Quotation = {
    ...data,
    id: uuidv4(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  } as Quotation

  await db<Quotation>('quotations').insert(newQuotation)
  return newQuotation
}

// Update quotation
export async function updateQuotation(
  id: string,
  updates: Partial<Quotation>
): Promise<boolean> {
  const result = await db<Quotation>('quotations')
    .where({ id })
    .update({ ...updates, updatedAt: new Date().toISOString() })
  return result > 0
}

// Delete quotation
export async function deleteQuotation(id: string): Promise<boolean> {
  const result = await db<Quotation>('quotations').where({ id }).del()
  return result > 0
}
