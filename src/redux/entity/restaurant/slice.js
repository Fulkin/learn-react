import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getRestaurants} from "./get-restaurants.js";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: entityAdapter.getInitialState({requestStatus: "idle"}),
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantsIds: (state) => state.ids,
        selectRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getRestaurants.pending, (state) => {
                state.requestStatus = "pending";
            })
            .addCase(getRestaurants.fulfilled, (state, {payload}) => {
                state.requestStatus = "fulfilled";

                entityAdapter.setAll(state, payload);
            })
            .addCase(getRestaurants.rejected, (state) => {
                state.requestStatus = "rejected";
            }),
});

export const {selectRestaurantById, selectRestaurantsIds, selectRequestStatus} = restaurantSlice.selectors;