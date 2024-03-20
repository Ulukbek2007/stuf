import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct=createAsyncThunk('product/getProduct',
async()=>{
    const {data}=await axios.get('https://api.escuelajs.co/api/v1/products')
    return data
}
)
const productSlice=createSlice({
    name:'product',
    initialState:{
        productsData:null,
        isLoading:false,
        error:''
    },
    extraReducers:(builder)=>{
builder.addCase(getProduct.pending,(state)=> {
    state.isLoading = true;
})
.addCase(getProduct.fulfilled,(state,action)=>{
    state.isLoading=false,
    state.productsData=action.payload
})
.addCase(getProduct.rejected,(state,action)=>{
    state.error=action.error
    state.isLoading=false
})
    }
})
export default productSlice.reducer