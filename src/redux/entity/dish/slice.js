import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getDishesByRestaurantId} from "./get-dishes-by-restaurant-id.js";
import {getDishById} from "./get-dish-by-id.js";

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
                state.requestStatus = "pending";
            })
            .addCase(getDishesByRestaurantId.fulfilled, (state, {payload}) => {
                state.requestStatus = "fulfilled";

                entityAdapter.setAll(state, payload);
            })
            .addCase(getDishesByRestaurantId.rejected, (state) => {
                state.requestStatus = "rejected";
            })
            .addCase(getDishById.pending, (state) => {
                state.requestStatus = "pending";
            })
            .addCase(getDishById.fulfilled, (state, {payload}) => {
                state.requestStatus = "fulfilled";

                entityAdapter.setAll(state, payload);
            })
            .addCase(getDishById.rejected, (state) => {
                state.requestStatus = "rejected";
            })
    ,
});

export const {selectDishById, selectDishesIds} = dishSlice.selectors;