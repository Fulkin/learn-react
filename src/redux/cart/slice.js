import {createSelector, createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {},
    reducers: {
        addToCart: (state, action) => {
            const {payload} = action;

            state[payload] = (state[payload] || 0) + 1;
        },
        deleteFromCart: (state, {payload}) => {
            if (!state[payload]) {
                return state;
            }

            state[payload] -= 1;

            if (state[payload] === 0) {
                delete state[payload];
            }
        },
    },
    selectors: {
        selectAmountById: (state, id) => {
            return state[id];
        },
    }
});

const selectCartSlice = state => state[cartSlice.name];
export const selectCartItemsIds = createSelector(
    [selectCartSlice],
    (cartSlice) => Object.keys(cartSlice)
);

export const {selectAmountById} = cartSlice.selectors;
export const {addToCart, deleteFromCart} = cartSlice.actions;