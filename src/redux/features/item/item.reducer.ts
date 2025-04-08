import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Item } from '@/backend/models/item/item.model'

interface ItemState {
  items: Item[]
  loading: boolean
  error: string | null
}

const initialState: ItemState = {
  items: [],
  loading: false,
  error: null,
}

// ✅ Async Thunks

export const fetchAllItems = createAsyncThunk('items/fetchAll', async () => {
  const res = await axios.get<Item[]>('/api/items')
  return res.data
})

export const createNewItem = createAsyncThunk(
  'items/create',
  async (itemData: Partial<Item>) => {
    const res = await axios.post<Item>('/api/items', itemData)
    return res.data
  }
)

export const updateItemById = createAsyncThunk(
  'items/update',
  async ({ id, data }: { id: string; data: Partial<Item> }) => {
    await axios.put(`/api/items/${id}`, data)
    return { id, data }
  }
)

export const deleteItemById = createAsyncThunk(
  'items/delete',
  async (id: string) => {
    await axios.delete(`/api/items/${id}`)
    return id
  }
)

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // FETCH
      .addCase(fetchAllItems.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        fetchAllItems.fulfilled,
        (state, action: PayloadAction<Item[]>) => {
          state.loading = false
          state.items = action.payload
        }
      )
      .addCase(fetchAllItems.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch items'
      })

      // CREATE
      .addCase(
        createNewItem.fulfilled,
        (state, action: PayloadAction<Item>) => {
          state.items.push(action.payload)
        }
      )

      // UPDATE
      .addCase(updateItemById.fulfilled, (state, action) => {
        const index = state.items.findIndex((i) => i.id === action.payload.id)
        if (index !== -1) {
          state.items[index] = {
            ...state.items[index],
            ...action.payload.data,
          }
        }
      })

      // DELETE
      .addCase(
        deleteItemById.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.items = state.items.filter((item) => item.id !== action.payload)
        }
      )
  },
})

export default itemSlice.reducer
