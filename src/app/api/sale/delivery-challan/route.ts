import { NextRequest, NextResponse } from 'next/server'
import {
  getAllDeliveryChallans,
  createDeliveryChallan,
} from '@/backend/controllers/sale/deliveryChallan.controller'

export async function GET(_: NextRequest) {
  try {
    const challans = await getAllDeliveryChallans()
    return NextResponse.json(challans, { status: 200 })
  } catch (error) {
    console.error('GET /api/sale/delivery-challan error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const newChallan = await createDeliveryChallan(data)
    return NextResponse.json(newChallan, { status: 201 })
  } catch (error) {
    console.error('POST /api/sale/delivery-challan error:', error)
    return NextResponse.json(
      { error: 'Failed to create delivery challan' },
      { status: 500 }
    )
  }
}
