import { createSlice } from "@reduxjs/toolkit";
const searchFood=createSlice({
    name:"Search",
    initialState:{
      search:"",
    },
    reducers:{
        setSearch:(state,action)=>{
        state.search=action.payload
    }}
})
export const {setSearch} =searchFood.actions;
export default searchFood.reducer;