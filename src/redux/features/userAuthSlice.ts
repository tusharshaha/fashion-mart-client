import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "../../util/types"
const initialState: { value: loginUser } = {
    value: {} as loginUser
}
export const userAuthSlice = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<loginUser>) => {
            state.value = action.payload
        },
        removeUser: (state) => {
            state.value = {} as loginUser
        }
    }
})
export const { addUser, removeUser } = userAuthSlice.actions;
export default userAuthSlice.reducer;