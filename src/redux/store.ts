import { configureStore } from '@reduxjs/toolkit'

import itemReducer from './features/item/item.reducer'
import partyReducer from './features/parties/parties.reducer'
import saleOrderReducer from './features/sale/saleOrder.reducer'
import paymentInReducer from './features/sale/paymentIn.reducer'
import deliveryChallanReducer from './features/sale/deliveryChallan.reducer'
import creditNoteReducer from './features/sale/creditNote.reducer'
import quotation from './features/sale/quotation.reducer'
import modalReducer from './slices/modal'
export const makeStore = () => {
  return configureStore({
    reducer: {
      modal: modalReducer,

      item: itemReducer,
      party: partyReducer,
      saleOrder: saleOrderReducer,
      paymentIn: paymentInReducer,
      deliveryChallan: deliveryChallanReducer,
      creditNote: creditNoteReducer,
      quotation: quotation,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
