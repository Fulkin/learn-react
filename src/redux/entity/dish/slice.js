import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getDishesByRestaurantId} from "./get-dishes-by-restaurant-id.js";
import {getDishById} from "./get-dish-by-id.js";
import {
    REQUEST_STATUS_FULFILLED,
    REQUEST_STATUS_PENDING,
    REQUEST_STATUS_REJECTED
} from "../../../components/redux/constants.js";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: "dish",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectDishById: (state, id) => state.entities[id],
        selectDishesIds: (state) => state.ids,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getDishesByRestaurantId.pending, (state) => {
                state.requestStatus = REQUEST_STATUS_PENDING;
            })
            .addCase(getDishesByRestaurantId.fulfilled, (state, {payload}) => {
                state.requestStatus = REQUEST_STATUS_FULFILLED;

                entityAdapter.setAll(state, payload);
            })
            .addCase(getDishesByRestaurantId.rejected, (state) => {
                state.requestStatus = REQUEST_STATUS_REJECTED;
            })
            .addCase(getDishById.pending, (state) => {
                state.requestStatus = REQUEST_STATUS_PENDING;
            })
            .addCase(getDishById.fulfilled, (state, {payload}) => {
                state.requestStatus = REQUEST_STATUS_FULFILLED;

                entityAdapter.setAll(state, payload);
            })
            .addCase(getDishById.rejected, (state) => {
                state.requestStatus = REQUEST_STATUS_REJECTED;
            })
    ,
});

export const {selectDishById, selectDishesIds} = dishSlice.selectors;