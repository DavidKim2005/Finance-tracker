import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";

export const fetchTransactions = createAsyncThunk(
    'finance/fetchTransactions',
    async () => {
        const response = await axiosApi.get('/finance/transactions.json');
        return response.data
    }
);