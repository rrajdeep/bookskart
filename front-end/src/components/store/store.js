import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const store = configureStore({
    reducer: {  //this is the reducer exported from cartSlice the default export
        cart: cartReducer,
    },
})

export default store;
