import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from './slice/movieSlice'

export const store = configureStore({
    reducer: {
        orders: ordersReducer, 
    }
})