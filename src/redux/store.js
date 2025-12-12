import {configureStore} from "@reduxjs/toolkit";
import {restaurantSlice} from "./entity/restaurant/slice.js";
import {dishSlice} from "./entity/dish/slice.js";
import {reviewSlice} from "./entity/review/slice.js";
import {userSlice} from "./entity/user/slice.js";
import {cartSlice} from "./cart/slice.js";

export const store = configureStore({
        reducer: {
            [restaurantSlice.name]: restaurantSlice.reducer,
            [dishSlice.name]: dishSlice.reducer,
            [reviewSlice.name]: reviewSlice.reducer,
            [userSlice.name]: userSlice.reducer,
            [cartSlice.name]: cartSlice.reducer,
        },
    }
)