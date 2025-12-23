import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectRestaurantById} from "./slice.js";

export const getRestaurantById = createAsyncThunk(
    "restaurant/getRestaurantById",
    async (restaurantId, {rejectWithValue}) => {
        const response = await fetch(
            `http://localhost:3001/api/restaurant/${restaurantId}`
        );

        const result = await response.json();

        if (!result.length) {
            rejectWithValue("No restaurants found.");
        }

        return result;
    },
    {
        condition: (restaurantId, {getState}) => {
            return !selectRestaurantById(getState(), restaurantId);
        }
    }
);