import {createSlice} from "@reduxjs/toolkit";
import {normalizedDishes} from "../../../../materials/normalized-mock.js";

const initialState = {
    ids: normalizedDishes.map(({id}) => id),
    entities: normalizedDishes.reduce((acc, dish) => {
        acc[dish.id] = dish;

        return acc;
    }, {}),
};

export const dishSlice = createSlice({
    name: "dish",
    initialState,
    selectors: {
        selectDishById: (state, id) => state.entities[id],
        selectDishesIds: (state) => state.ids,
    }
});

export const {selectDishById, selectDishesIds} = dishSlice.selectors;