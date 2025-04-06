import { NextRequest, NextResponse } from 'next/server'
import {
  getAllPaymentsIn,
  createPaymentIn,
} from '@/backend/controllers/sale/paymentIn.controller'

export async function GET(_: NextRequest) {
  try {
    const payments = await getAllPaymentsIn()
    return NextResponse.json(payments, { status: 200 })
  } catch (error) {
    console.error('GET /api/sale/payment-in error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const newPayment = await createPaymentIn(data)
    return NextResponse.json(newPayment, { status: 201 })
  } catch (error) {
    console.error('POST /api/sale/payment-in error:', error)
    return NextResponse.json(
      { error: 'Failed to create payment' },
      { status: 500 }
    )
  }
}
