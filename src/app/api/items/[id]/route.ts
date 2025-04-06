// app/api/items/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server'
import {
  getItemById,
  updateItem,
  deleteItem,
} from '@/backend/controllers/item/item.controller'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const item = await getItemById(params.id)
    return item
      ? NextResponse.json(item, { status: 200 })
      : NextResponse.json({ error: 'Item not found' }, { status: 404 })
  } catch (error) {
    console.error('GET /api/items/[id] error:', error)
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
    const body = await req.json()
    const success = await updateItem(params.id, body)
    return success
      ? NextResponse.json({ message: 'Item updated' }, { status: 200 })
      : NextResponse.json({ error: 'Item not found' }, { status: 404 })
  } catch (error) {
    console.error('PUT /api/items/[id] error:', error)
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
    const success = await deleteItem(params.id)
    return success
      ? NextResponse.json({ message: 'Item deleted' }, { status: 200 })
      : NextResponse.json({ error: 'Item not found' }, { status: 404 })
  } catch (error) {
    console.error('DELETE /api/items/[id] error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
