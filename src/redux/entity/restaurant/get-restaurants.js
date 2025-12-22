import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectRestaurantsIds} from "./slice.js";

export const getRestaurants = createAsyncThunk(
    "restaurant/getRestaurants",
    async (params, {rejectWithValue}) => {
        const response = await fetch("http://localhost:3001/api/restaurants");

        const result = await response.json();

        if (!result.length) {
            rejectWithValue("No restaurants found.");
        }

        return result;
    },
    {
        condition: (_, {getState}) => {
            return !selectRestaurantsIds(getState())?.length;
        }
    }
);