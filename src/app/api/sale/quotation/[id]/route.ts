// app/api/sale/quotation/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server'
import {
  getQuotationById,
  updateQuotation,
  deleteQuotation,
} from '@/backend/controllers/sale/quotation.controller'

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const quotation = await getQuotationById(params.id)
    return quotation
      ? NextResponse.json(quotation)
      : NextResponse.json({ error: 'Quotation not found' }, { status: 404 })
  } catch (error) {
    console.error('GET /api/sale/quotation/[id] error:', error)
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
    const success = await updateQuotation(params.id, data)
    return success
      ? NextResponse.json({ message: 'Quotation updated' })
      : NextResponse.json({ error: 'Quotation not found' }, { status: 404 })
  } catch (error) {
    console.error('PUT /api/sale/quotation/[id] error:', error)
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
    const success = await deleteQuotation(params.id)
    return success
      ? NextResponse.json({ message: 'Quotation deleted' })
      : NextResponse.json({ error: 'Quotation not found' }, { status: 404 })
  } catch (error) {
    console.error('DELETE /api/sale/quotation/[id] error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
