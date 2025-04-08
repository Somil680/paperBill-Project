import { NextRequest, NextResponse } from 'next/server'
import {
  getSaleOrderById,
  updateSaleOrder,
  deleteSaleOrder,
} from '@/backend/controllers/sale/saleOrder.controller'

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const order = await getSaleOrderById(params.id)
    return order
      ? NextResponse.json(order)
      : NextResponse.json({ error: 'Sale order not found' }, { status: 404 })
  } catch (error) {
    console.error('GET /api/sale/order/[id] error:', error)
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
    const success = await updateSaleOrder(params.id, data)
    return success
      ? NextResponse.json({ message: 'Sale order updated' })
      : NextResponse.json({ error: 'Sale order not found' }, { status: 404 })
  } catch (error) {
    console.error('PUT /api/sale/order/[id] error:', error)
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
    const success = await deleteSaleOrder(params.id)
    return success
      ? NextResponse.json({ message: 'Sale order deleted' })
      : NextResponse.json({ error: 'Sale order not found' }, { status: 404 })
  } catch (error) {
    console.error('DELETE /api/sale/order/[id] error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
