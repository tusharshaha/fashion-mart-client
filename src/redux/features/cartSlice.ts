import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cart {
    id: string,
    img: string,
    name: string,
    curPrice: number,
    subTotal?: number,
    qty: number
}
interface init {
    items: cart[],
    totalCount: number,
    totalAmount: number
}
const initialState: init = {
    items: [],
    totalCount: 0,
    totalAmount: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<cart>) => {
            const findOldProduct = state.items.find(ele => ele.id === action.payload.id);
            if (!findOldProduct) {
                state.items.push(action.payload);
            } else {
                state.items.forEach(ele => {
                    if (ele.id === action.payload.id) {
                        ele.qty += action.payload.qty;
                    }
                })
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(ele => ele.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
            state.totalCount = 0
        },
        getTotal: (state) => {
            const {totalPrice, totalQty} = state.items.reduce((cartTotal, cartItem) => {
                const { curPrice, qty } = cartItem;
                cartTotal.totalPrice = curPrice * qty;
                cartTotal.totalQty += qty;
                return cartTotal
            }, { totalPrice: 0, totalQty: 0 });
            state.totalAmount = totalPrice;
            state.totalCount = totalQty;
        }
    }
})

export const { addToCart, removeFromCart, clearCart, getTotal } = cartSlice.actions;
export default cartSlice.reducer;