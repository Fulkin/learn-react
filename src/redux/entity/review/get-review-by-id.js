import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectReviewById} from "./slice.js";

export const getReviewById = createAsyncThunk(
    "review/getReviewById",
    async (reviewId, {rejectWithValue}) => {
        const response = await fetch(
            `http://localhost:3001/api/review/${reviewId}`
        );

        const result = await response.json();

        if (!result.length) {
            rejectWithValue("No review found.");
        }

        return result;
    },
    {
        condition: (reviewId, {getState}) => {
            return !selectReviewById(getState(), reviewId);
        }
    }
);