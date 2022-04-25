import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

interface wishlist {
    id: string,
    img: string,
    name: string,
    curPrice: number,
    stockStatus?: string
}

const initialState: { items: wishlist[] } = {
    items: []
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<wishlist>) => {
            const findOldProduct = state.items.find(ele => ele.id === action.payload.id);
            if (findOldProduct) {
                Swal.fire({
                    icon: "warning",
                    title: "Product already added to wishlist!"
                })
                return state
            } else {
                const newProduct = { ...action.payload, stockStatus: "In Stock" };
                state.items.push(newProduct);
                Swal.fire({
                    icon: "success",
                    title: "Successfully added to wishlist",
                    showConfirmButton: false,
                    timer: 1800
                })
            }
        },
        removeFromWishlist: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(ele => ele.id !== action.payload);
        }
    }
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;