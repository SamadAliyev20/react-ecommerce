import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './slices/categorySlice'
import productSlice from './slices/productSlice'
import cardSlice from './slices/cardSlice'
import wishlistSlice from './slices/wishlistSlice'

export const store = configureStore({
  reducer: {
    categories:categorySlice,
    products:productSlice,
    carts:cardSlice,
    wishlists:wishlistSlice
  },
})