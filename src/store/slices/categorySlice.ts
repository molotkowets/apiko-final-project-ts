import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        getCategoriesStore(state, action) {
            state.categories = action.payload.categories;
        },
    },
});

export const { getCategoriesStore } = categoriesSlice.actions;

export default categoriesSlice.reducer;
