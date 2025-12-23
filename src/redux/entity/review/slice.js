import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getReviewsRestaurantById} from "./get-reviews-by-restaurant-id.js";
import {
    REQUEST_STATUS_FULFILLED,
    REQUEST_STATUS_PENDING,
    REQUEST_STATUS_REJECTED
} from "../../../components/redux/constants.js";

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
                state.requestStatus = REQUEST_STATUS_PENDING;
            })
            .addCase(getReviewsRestaurantById.fulfilled, (state, {payload}) => {
                state.requestStatus = REQUEST_STATUS_FULFILLED;

                entityAdapter.setAll(state, payload);
            })
            .addCase(getReviewsRestaurantById.rejected, (state) => {
                state.requestStatus = REQUEST_STATUS_REJECTED;
            }),
});

export const {selectReviewById, selectReviewsIds} = reviewSlice.selectors;
