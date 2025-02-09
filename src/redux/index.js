import { configureStore } from '@reduxjs/toolkit'

// Reducers
import appSlice from './appSlice';
import userSlice from './userSlice';
import cartSlice from './cartSlice'
import settingsSlice from './settingsSlice'


export default configureStore({
    reducer: {
        appSlice,
        userSlice,
        cartSlice,
        settingsSlice

    }
});