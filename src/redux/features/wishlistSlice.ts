import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { wishlistType } from "../../utils/types";

const initialState: { items: wishlistType[] } = {
    items: []
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<wishlistType>) => {
            const findOldProduct = state.items.find(ele => ele.id === action.payload.id);
            if (findOldProduct) {
                Swal.fire({
                    icon: "warning",
                    title: "This item already added to wishlist!"
                })
                return state
            } else {
                state.items.push(action.payload);
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