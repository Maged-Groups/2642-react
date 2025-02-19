import { createSlice } from "@reduxjs/toolkit";

// react router dom

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        stat_loggedin: false,
        stat_user: null
    },
    reducers: {
        rdx_login: (state, { payload }) => {
            state.stat_loggedin = true;
            state.stat_user = payload;
        },
        rdx_logout: (state, { payload }) => {
            state.stat_loggedin = false;
            state.stat_user = null;

            // Clear all stored data about the user
            sessionStorage.clear();
            localStorage.clear();

            // Navigate to home page
            
            // console.log('payload', payload)
            payload('/');
        },
    }
});


export default userSlice.reducer;

export const { rdx_login, rdx_logout } = userSlice.actions;