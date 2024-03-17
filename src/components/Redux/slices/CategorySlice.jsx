import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    sujata: "All",
  },
  reducers: {
    setCategory: (state, action) => {
      state.sujata = action.payload;
    },
  },
});

export const {setCategory} = CategorySlice.actions;
export default CategorySlice.reducer;