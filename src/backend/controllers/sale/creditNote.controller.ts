import { db } from '@/lib/db'
import { CreditNote } from '@/backend/models/sale/creditNote.model'
import { v4 as uuidv4 } from 'uuid'

// Get all credit notes
export async function getAllCreditNotes(): Promise<CreditNote[]> {
  return await db<CreditNote>('credit_notes').select()
}

// Get single credit note by ID
export async function getCreditNoteById(
  id: string
): Promise<CreditNote | null> {
  const note = await db<CreditNote>('credit_notes').where({ id }).first()
  return note || null
}

// Create new credit note
export async function createCreditNote(
  data: Partial<CreditNote>
): Promise<CreditNote> {
  const newNote: CreditNote = {
    ...data,
    id: uuidv4(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  } as CreditNote

  await db<CreditNote>('credit_notes').insert(newNote)
  return newNote
}

// Update credit note
export async function updateCreditNote(
  id: string,
  updates: Partial<CreditNote>
): Promise<boolean> {
  const result = await db<CreditNote>('credit_notes')
    .where({ id })
    .update({ ...updates, updatedAt: new Date().toISOString() })

  return result > 0
}

// Delete credit note
export async function deleteCreditNote(id: string): Promise<boolean> {
  const result = await db<CreditNote>('credit_notes').where({ id }).del()
  return result > 0
}
