import { NextRequest, NextResponse } from 'next/server'
import {
  getAllCreditNotes,
  createCreditNote,
} from '@/backend/controllers/sale/creditNote.controller'

export async function GET(_: NextRequest) {
  try {
    const notes = await getAllCreditNotes()
    return NextResponse.json(notes, { status: 200 })
  } catch (error) {
    console.error('GET /api/sale/credit-note error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const newNote = await createCreditNote(data)
    return NextResponse.json(newNote, { status: 201 })
  } catch (error) {
    console.error('POST /api/sale/credit-note error:', error)
    return NextResponse.json(
      { error: 'Failed to create credit note' },
      { status: 500 }
    )
  }
}
