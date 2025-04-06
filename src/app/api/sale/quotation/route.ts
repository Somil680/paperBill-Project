// app/api/sale/quotation/route.ts

import { NextRequest, NextResponse } from 'next/server'
import {
  getAllQuotations,
  createQuotation,
} from '@/backend/controllers/sale/quotation.controller'

export async function GET(_: NextRequest) {
  try {
    const quotations = await getAllQuotations()
    return NextResponse.json(quotations, { status: 200 })
  } catch (error) {
    console.error('GET /api/sale/quotation error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const quotation = await createQuotation(data)
    return NextResponse.json(quotation, { status: 201 })
  } catch (error) {
    console.error('POST /api/sale/quotation error:', error)
    return NextResponse.json(
      { error: 'Failed to create quotation' },
      { status: 500 }
    )
  }
}
