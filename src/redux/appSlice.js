import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'appSlice',
    initialState: {
        theme: 'light',
        lang: 'en',
        country: 'Eg',
        show_modal: null, // null|string
    },
    reducers: {
        rdx_set_theme: function (state) {
            //
        },
        rdx_set_lang: (state) => {
            // 
        },
        rdx_set_country: (state) => {
            // 
        },
        rdx_reset_app: (state) => {
            // 
        },
        rdx_show_modal: (state, { payload }) => {
            state.show_modal = payload
        },


    }
});


export default appSlice.reducer;

export const { rdx_show_modal } = appSlice.actions;

