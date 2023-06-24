import { createSlice } from "@reduxjs/toolkit";
import { PRODUCT } from "../../product";

const initialState = {
    order : PRODUCT
}

const slice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        addOrders : (state, {payload}) => {
            state.order.map((value) => {
                if (value.id === payload.id){
                    value.count = value.count + 1;
                }
            })
        },
        removeOrders : (state, {payload}) => {
            state.order.map((value) => {
                if(value.id === payload.id){
                    value.count = value.count - 1;
                }
            })
        },
        updateOrders : (state , {payload}) => {
            state.order.map((value) => {
                if(value.id === payload.id){
                    value.count = payload.count;
                }
            })
        },
    }
})

export const {addOrders, removeOrders, updateOrders} = slice.actions;
export default slice.reducer;
export const getAllOrders = state => state.orders.order;