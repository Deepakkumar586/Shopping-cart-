import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../redux/slices/CartSlice";

export const store = configureStore({
    reducer: {
        cart: CartSlice
    }
});