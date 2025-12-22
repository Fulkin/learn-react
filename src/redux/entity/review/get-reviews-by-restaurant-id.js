import {createAsyncThunk} from "@reduxjs/toolkit";

export const getReviewsRestaurantById = createAsyncThunk(
    "review/getReviewsRestaurantById",
    async (restaurantId, {rejectWithValue}) => {
        const response = await fetch(
            `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
        );

        const result = await response.json();

        if (!result.length) {
            rejectWithValue("No review found.");
        }

        return result;
    }
);