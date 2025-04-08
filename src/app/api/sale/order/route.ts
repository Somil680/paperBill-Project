import { NextRequest, NextResponse } from 'next/server'
import {
  getAllSaleOrders,
  createSaleOrder,
} from '@/backend/controllers/sale/saleOrder.controller'

export async function GET(_: NextRequest) {
  try {
    const orders = await getAllSaleOrders()
    return NextResponse.json(orders, { status: 200 })
  } catch (error) {
    console.error('GET /api/sale/order error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const newOrder = await createSaleOrder(data)
    return NextResponse.json(newOrder, { status: 201 })
  } catch (error) {
    console.error('POST /api/sale/order error:', error)
    return NextResponse.json(
      { error: 'Failed to create sale order' },
      { status: 500 }
    )
  }
}
