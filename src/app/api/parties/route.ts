// app/api/parties/route.ts

import { NextRequest, NextResponse } from 'next/server'
import {
  getAllParties,
  createParty,
} from '@/backend/controllers/party/party.controller'

export async function GET() {
  try {
    const parties = await getAllParties()
    return NextResponse.json(parties, { status: 200 })
  } catch (error) {
    console.error('GET /api/parties error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const newParty = await createParty(data)
    return NextResponse.json(newParty, { status: 201 })
  } catch (error) {
    console.error('POST /api/parties error:', error)
    return NextResponse.json(
      { error: 'Failed to create party' },
      { status: 500 }
    )
  }
}
