import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
    name: 'settingsSlice',
    initialState: {

        is_loading: false
    },
    reducers: {

        rdx_set_is_loading: (state, { payload }) => {
            state.is_loading = payload
        },

    }
});


export default settingsSlice.reducer;

export const {   rdx_set_is_loading } = settingsSlice.actions;

