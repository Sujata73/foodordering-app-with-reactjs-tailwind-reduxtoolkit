import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CategorySlice from "./slices/CategorySlice";
import searchFood from './slices/searchSlice'
const store = configureStore({
  reducer: {
    cart: CartSlice, 
    category: CategorySlice,
    Search:searchFood,
  },
});

export default store;
