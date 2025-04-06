import { NextRequest, NextResponse } from 'next/server'
import {
  getPaymentInById,
  updatePaymentIn,
  deletePaymentIn,
} from '@/backend/controllers/sale/paymentIn.controller'

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const payment = await getPaymentInById(params.id)
    return payment
      ? NextResponse.json(payment)
      : NextResponse.json({ error: 'Payment not found' }, { status: 404 })
  } catch (error) {
    console.error('GET /api/sale/payment-in/[id] error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await req.json()
    const success = await updatePaymentIn(params.id, data)
    return success
      ? NextResponse.json({ message: 'Payment updated' })
      : NextResponse.json({ error: 'Payment not found' }, { status: 404 })
  } catch (error) {
    console.error('PUT /api/sale/payment-in/[id] error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const success = await deletePaymentIn(params.id)
    return success
      ? NextResponse.json({ message: 'Payment deleted' })
      : NextResponse.json({ error: 'Payment not found' }, { status: 404 })
  } catch (error) {
    console.error('DELETE /api/sale/payment-in/[id] error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
