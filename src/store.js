import { configureStore } from '@reduxjs/toolkit'
//import { setupListeners } from '@reduxjs/toolkit/query'
import fetchBookData from './features/book/apiSlice.js'
export const store = configureStore({
  reducer: {
    book:fetchBookData
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
