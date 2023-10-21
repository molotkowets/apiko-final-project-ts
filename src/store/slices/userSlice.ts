import { createSlice } from "@reduxjs/toolkit";
// import { type } from "os";
// interface IInitial {
//     token: string | null;
//     account: {
//         id: number | null;
//         fullName: string | null;
//         createdAt: string | null;
//         updatedAt: string | null;
//         email: string | null;
//         phone: string | null;
//         country: string | null;
//         city: string | null;
//         address: string | null;
//     };
// }

const initialState = {
    isAuth: false,
    token: null,
    account: {
        id: null,
        fullName: null,
        createdAt: null,
        updatedAt: null,
        email: null,
        phone: null,
        country: null,
        city: null,
        address: null,
    },
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logIn(state, action) {
            state.token = action.payload.token;
            state.account = action.payload.account;
        },
        LogOut(state) {
            state.token = null;
            state.account = {
                id: null,
                fullName: null,
                createdAt: null,
                updatedAt: null,
                email: null,
                phone: null,
                country: null,
                city: null,
                address: null,
            };
        },
    },
});

export const { logIn, LogOut } = userSlice.actions;

export default userSlice.reducer;
