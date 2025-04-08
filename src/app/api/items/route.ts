// app/api/items/route.ts

import { NextRequest, NextResponse } from 'next/server'
import {
  getAllItems,
  createItem,
} from '@/backend/controllers/item/item.controller'

export async function GET() {
  try {
    const items = await getAllItems()
    return NextResponse.json(items, { status: 200 })
  } catch (error) {
    console.error('GET /api/items error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const newItem = await createItem(body)
    return NextResponse.json(newItem, { status: 201 })
  } catch (error) {
    console.error('POST /api/items error:', error)
    return NextResponse.json(
      { error: 'Failed to create item' },
      { status: 500 }
    )
  }
}
