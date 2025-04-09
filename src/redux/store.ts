import { configureStore } from '@reduxjs/toolkit'

import itemReducer from './features/item/item.reducer'
import partyReducer from './features/parties/parties.reducer'
import saleOrderReducer from './features/sale/saleOrder.reducer'
import paymentInReducer from './features/sale/paymentIn.reducer'
import deliveryChallanReducer from './features/sale/deliveryChallan.reducer'
import creditNoteReducer from './features/sale/creditNote.reducer'
import quotation from './features/sale/quotation.reducer'

// ✅ Import modal reducer
import modalReducer from './slices/modal' // <-- update path as per your project

export const makeStore = () => {
  return configureStore({
    reducer: {
      item: itemReducer,
      party: partyReducer,
      saleOrder: saleOrderReducer,
      paymentIn: paymentInReducer,
      deliveryChallan: deliveryChallanReducer,
      creditNote: creditNoteReducer,
      quotation: quotation,

      // Add modal here
      modal: modalReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
