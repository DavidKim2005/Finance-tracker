import { createSlice } from "@reduxjs/toolkit";
import { ApiCategory } from "../types";
import { fetchCategories } from "./categoriesThunks";

interface CategoriesState {
    data: ApiCategory[];
    loading: boolean;
}

const initialState: CategoriesState = {
    data: [],
    loading: false
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.loading = true
        }).addCase(fetchCategories.fulfilled, (state, action) => {
            state.loading = false,
            state.data = Object.values(action.payload)
        }).addCase(fetchCategories.rejected, (state) => {
            state.loading = false
        });
    },
});

export const categoriesReducer = categoriesSlice.reducer;