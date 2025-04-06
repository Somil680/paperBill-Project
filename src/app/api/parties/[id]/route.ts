// app/api/parties/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server'
import {
  getPartyById,
  updateParty,
  deleteParty,
} from '@/backend/controllers/party/party.controller'

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const party = await getPartyById(params.id)
    return party
      ? NextResponse.json(party, { status: 200 })
      : NextResponse.json({ error: 'Party not found' }, { status: 404 })
  } catch (error) {
    console.error('GET /api/parties/[id] error:', error)
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
    const success = await updateParty(params.id, data)
    return success
      ? NextResponse.json({ message: 'Party updated' }, { status: 200 })
      : NextResponse.json({ error: 'Party not found' }, { status: 404 })
  } catch (error) {
    console.error('PUT /api/parties/[id] error:', error)
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
    const success = await deleteParty(params.id)
    return success
      ? NextResponse.json({ message: 'Party deleted' }, { status: 200 })
      : NextResponse.json({ error: 'Party not found' }, { status: 404 })
  } catch (error) {
    console.error('DELETE /api/parties/[id] error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
