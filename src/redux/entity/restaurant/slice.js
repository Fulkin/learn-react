import {createSlice} from "@reduxjs/toolkit";
import {normalizedRestaurants} from "../../../../materials/normalized-mock.js";

const initialState = {
    ids: normalizedRestaurants.map(({id}) => id),
    entities: normalizedRestaurants.reduce((acc, restaurant) => {
        acc[restaurant.id] = restaurant;

        return acc;
    }, {}),
};

export const restaurantSlice = createSlice({
    name: "restaurant",
    initialState,
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantsIds: (state) => state.ids,
    }
});

export const {selectRestaurantById, selectRestaurantsIds} = restaurantSlice.selectors;