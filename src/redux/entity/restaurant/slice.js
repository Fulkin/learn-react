import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getRestaurants} from "./get-restaurants.js";
import {
    REQUEST_STATUS_FULFILLED,
    REQUEST_STATUS_IDLE,
    REQUEST_STATUS_PENDING,
    REQUEST_STATUS_REJECTED
} from "../../../components/redux/constants.js";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: entityAdapter.getInitialState({requestStatus: REQUEST_STATUS_IDLE}),
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantsIds: (state) => state.ids,
        selectRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getRestaurants.pending, (state) => {
                state.requestStatus = REQUEST_STATUS_PENDING;
            })
            .addCase(getRestaurants.fulfilled, (state, {payload}) => {
                state.requestStatus = REQUEST_STATUS_FULFILLED;

                entityAdapter.setAll(state, payload);
            })
            .addCase(getRestaurants.rejected, (state) => {
                state.requestStatus = REQUEST_STATUS_REJECTED;
            }),
});

export const {selectRestaurantById, selectRestaurantsIds, selectRequestStatus} = restaurantSlice.selectors;