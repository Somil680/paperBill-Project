import { NextRequest, NextResponse } from 'next/server'
import {
  getCreditNoteById,
  updateCreditNote,
  deleteCreditNote,
} from '@/backend/controllers/sale/creditNote.controller'

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const note = await getCreditNoteById(params.id)
    return note
      ? NextResponse.json(note)
      : NextResponse.json({ error: 'Credit note not found' }, { status: 404 })
  } catch (error) {
    console.error('GET /api/sale/credit-note/[id] error:', error)
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
    const success = await updateCreditNote(params.id, data)
    return success
      ? NextResponse.json({ message: 'Credit note updated' })
      : NextResponse.json({ error: 'Credit note not found' }, { status: 404 })
  } catch (error) {
    console.error('PUT /api/sale/credit-note/[id] error:', error)
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
    const success = await deleteCreditNote(params.id)
    return success
      ? NextResponse.json({ message: 'Credit note deleted' })
      : NextResponse.json({ error: 'Credit note not found' }, { status: 404 })
  } catch (error) {
    console.error('DELETE /api/sale/credit-note/[id] error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
