import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";

export const fetchCategories = createAsyncThunk(
    'finance/fetchCategories',
    async () => {
        const response = await axiosApi.get('/finance/categories.json');
        return response.data
    }
);