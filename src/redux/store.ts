import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from "./Slices/userAuthSlice";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

// combine all reducer with root reducer 
const rootReducer = combineReducers({
    authUser: userReducer,
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
    reducer: {
        root: persistedReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;