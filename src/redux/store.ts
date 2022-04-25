import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from "./features/userAuthSlice";
import cartReducer from "./features/cartSlice";
import wishlistReducer from "./features/wishlistSlice";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';

// combine all reducer with root reducer
const rootReducer = combineReducers({
    authUser: userReducer,
    cart: cartReducer,
    wishlist: wishlistReducer
})
// configure redux persist
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
// create redux store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;