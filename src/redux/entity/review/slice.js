import {normalizedReviews} from "../../../../materials/normalized-mock.js";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    ids: normalizedReviews.map(({id}) => id),
    entities: normalizedReviews.reduce((acc, review) => {
        acc[review.id] = review;

        return acc;
    }, {}),
};

export const reviewSlice = createSlice({
    name: "review",
    initialState,
    selectors: {
        selectReviewById: (state, id) => state.entities[id],
        selectReviewsIds: (state) => state.ids,
    }
});

export const {selectReviewById, selectReviewsIds} = reviewSlice.selectors;
