import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getReviewsRestaurantById} from "./get-reviews-by-restaurant-id.js";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
    name: "review",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectReviewById: (state, id) => state.entities[id],
        selectReviewsIds: (state) => state.ids,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getReviewsRestaurantById.pending, (state) => {
                state.requestStatus = "pending";
            })
            .addCase(getReviewsRestaurantById.fulfilled, (state, {payload}) => {
                state.requestStatus = "fulfilled";

                entityAdapter.setAll(state, payload);
            })
            .addCase(getReviewsRestaurantById.rejected, (state) => {
                state.requestStatus = "rejected";
            }),
});

export const {selectReviewById, selectReviewsIds} = reviewSlice.selectors;
