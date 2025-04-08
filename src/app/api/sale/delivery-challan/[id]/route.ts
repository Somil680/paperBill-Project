import { NextRequest, NextResponse } from 'next/server'
import {
  getDeliveryChallanById,
  updateDeliveryChallan,
  deleteDeliveryChallan,
} from '@/backend/controllers/sale/deliveryChallan.controller'

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const challan = await getDeliveryChallanById(params.id)
    return challan
      ? NextResponse.json(challan)
      : NextResponse.json(
          { error: 'Delivery challan not found' },
          { status: 404 }
        )
  } catch (error) {
    console.error('GET /api/sale/delivery-challan/[id] error:', error)
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
    const success = await updateDeliveryChallan(params.id, data)
    return success
      ? NextResponse.json({ message: 'Delivery challan updated' })
      : NextResponse.json(
          { error: 'Delivery challan not found' },
          { status: 404 }
        )
  } catch (error) {
    console.error('PUT /api/sale/delivery-challan/[id] error:', error)
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
    const success = await deleteDeliveryChallan(params.id)
    return success
      ? NextResponse.json({ message: 'Delivery challan deleted' })
      : NextResponse.json(
          { error: 'Delivery challan not found' },
          { status: 404 }
        )
  } catch (error) {
    console.error('DELETE /api/sale/delivery-challan/[id] error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
