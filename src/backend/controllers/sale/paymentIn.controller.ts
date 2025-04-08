import { db } from '@/lib/db'
import { PaymentIn } from '@/backend/models/sale/paymentIn.model'
import { v4 as uuidv4 } from 'uuid'

// Get all payment-in entries
export async function getAllPaymentsIn(): Promise<PaymentIn[]> {
  return await db<PaymentIn>('payment_in').select()
}

// Get single payment-in entry by ID
export async function getPaymentInById(id: string): Promise<PaymentIn | null> {
  const payment = await db<PaymentIn>('payment_in').where({ id }).first()
  return payment || null
}

// Create new payment-in entry
export async function createPaymentIn(
  data: Partial<PaymentIn>
): Promise<PaymentIn> {
  const newPayment: PaymentIn = {
    ...data,
    id: uuidv4(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  } as PaymentIn

  await db<PaymentIn>('payment_in').insert(newPayment)
  return newPayment
}

// Update payment-in entry
export async function updatePaymentIn(
  id: string,
  updates: Partial<PaymentIn>
): Promise<boolean> {
  const result = await db<PaymentIn>('payment_in')
    .where({ id })
    .update({ ...updates, updatedAt: new Date().toISOString() })

  return result > 0
}

// Delete payment-in entry
export async function deletePaymentIn(id: string): Promise<boolean> {
  const result = await db<PaymentIn>('payment_in').where({ id }).del()
  return result > 0
}
