import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    suju: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.suju.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.suju = state.suju.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
       
        );
      
      } else {
        state.suju.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {

      state.suju = state.suju.filter(item => item.id !== action.payload.id);
    },
    incrementQty:(state,action)=>{
      state.suju=state.suju.map((item)=>item.id===action.payload.id ?{...item, qty:item.qty+1}:item)
    },
    decrementQty:(state,action)=>{
      state.suju=state.suju.map((item)=>item.id===action.payload.id ?{...item, qty: item.qty-1}:item)
    }
  },
});

export const { addToCart, removeFromCart, incrementQty,decrementQty } = CartSlice.actions;
export default CartSlice.reducer;
