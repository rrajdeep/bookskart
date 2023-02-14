// import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = [];
let initialState = {
    basket: [],
    orders: [],
    search: [],
    total: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action) {
            state.basket.push(action.payload);
            // state.basket = [...action.payload];
        },

        remove(state, action) {
            // return state.basket.filter(item => item.id !== action.payload);
            return { ...state, "basket": state.basket.filter(item => item.id !== action.payload) };

        },

        increase(state, action) {
            state.total = state.total + action.payload;
        },

        decrease(state, action) {
            state.total = state.total - action.payload;
        },

        resetTotal(state, action) {
            state.total = 0;
        },

        addToOrders(state, action) {
            state.orders.push(action.payload);
        },

        increaseQty(state, action) {
            // state.basket.initial_qty = action.payload;
            let objIndex = state.basket.findIndex((obj) => obj.id === action.payload);
            state.basket[objIndex].qty += 1;
        },

        decreaseQty(state, action) {
            // decrease quantity here
            let objIndex = state.basket.findIndex((obj) => obj.id === action.payload);
            state.basket[objIndex].qty -= 1;
        },

        emptyCart(state, action) {
            state.basket = [];
            state.total = 0;
        },

        addToSearch(state, action) {
            state.search = [...action.payload];
        }
    },
})

export const { add, remove, increase, decrease, resetTotal, addToOrders, increaseQty, decreaseQty, emptyCart, addToSearch } = cartSlice.actions;

export default cartSlice.reducer;
