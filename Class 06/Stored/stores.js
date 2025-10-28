import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./CartSlice"

export const Store = configureStore({
    reducer:{
        cartslice:CardReducer
    }
})