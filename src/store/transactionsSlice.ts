import { createSlice } from "@reduxjs/toolkit";
import { ApiTransaction } from "../types";
import { fetchTransactions } from "./transactionsThunks";

interface TransactionsState {
    data: ApiTransaction[];
    loading: boolean;
}

const initialState: TransactionsState = {
    data: [],
    loading: false
};

const transactionsSlice = createSlice({
    name: 'finance',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchTransactions.pending, (state) => {
            state.loading = true
        }).addCase(fetchTransactions.fulfilled, (state, action) => {
            state.loading = false,
            state.data = Object.values(action.payload)
        }).addCase(fetchTransactions.rejected, (state) => {
            state.loading = false
        });
    },
})

export const transactionsReducer = transactionsSlice.reducer;