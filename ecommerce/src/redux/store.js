import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './slices/categorySlice'
import productSlice from './slices/productSlice'

export const store = configureStore({
  reducer: {
    categories:categorySlice,
    products:productSlice
  },
})