import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectDishById} from "./slice.js";

export const getDishById = createAsyncThunk(
    "dish/getDishById",
    async (dishId, {rejectWithValue}) => {
        const response = await fetch(
            `http://localhost:3001/api/dish/${dishId}`
        );

        const result = await response.json();

        if (!result.length) {
            rejectWithValue("No dish found.");
        }

        return result;
    },
    {
        condition: (dishId, {getState}) => {
            return !selectDishById(getState(), dishId);
        }
    }
);