import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../product";

const initialState = {
    order : PRODUCTS,
    view : true,
    totalAmount: 0
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
        updateView : (state) => {
            state.view = false
        },
    }
})

export const {addOrders, removeOrders, updateOrders, updateView } = slice.actions;
export default slice.reducer;
export const getAllOrders = state => state.orders.order;
export const getView = state => state.orders.view;