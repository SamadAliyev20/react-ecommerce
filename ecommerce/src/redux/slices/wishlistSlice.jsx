import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let wishlist = localStorage.getItem("wishlist");
  if (wishlist) return JSON.parse(localStorage.getItem("wishlist"));
  else return [];
};
const storeInLocalStorage = (data) => {
  localStorage.setItem("wishlist", JSON.stringify(data));
};

const initialState = {
  wishlists: fetchFromLocalStorage(),
  count: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const isItemWishlist = state.wishlists.find(
        (item) => item.id === action.payload.id
      );
      if (isItemWishlist) {
        const tempWishlist = state.wishlists.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            return {
              ...item,
              quantity: tempQty
            };
          } else {
            return item;
          }
        });
        state.wishlists = tempWishlist;
        storeInLocalStorage(state.wishlists);
      } else {
        state.wishlists.push(action.payload);
        storeInLocalStorage(state.wishlists);
      }
    },
    removeFromWishlist: (state, action) => {
      const tempWishlist = state.wishlists.filter((item) => item.id !== action.payload);
      state.wishlists = tempWishlist;
      storeInLocalStorage(state.wishlists);
    },
    clearWishlist: (state) => {
      state.wishlists = [];
      storeInLocalStorage(state.wishlists);
    },
    getWishlistCount: (state) => {
      state.count = state.wishlists.length;
    },
  },
});

export const {addToWishlist,clearWishlist,getWishlistCount,removeFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;