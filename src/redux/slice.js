import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    general: {
        name: "",
        email: "",
        adrs: "",
        tel: ""
    },
    login: {
        hasLogin: false,
    }
}; 

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setGeneralAccountInfo: (state, action) => {
            state.general = action.payload;
        },
        login: (state) => {
            state.login.hasLogin = true;
        },
        logout: (state) => {
            state.login.hasLogin = false;
        }
    },
});

export const selectGeneral = (state) => state.account.general;
export const selectHasLogin = (state) => state.account.login.hasLogin;

export const { setGeneralAccountInfo, login, logout } = accountSlice.actions;

export default accountSlice.reducer;