import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/dataSlice";

const store=configureStore({
    reducer:{
         product:productSlice
    }
   
})
export default store;