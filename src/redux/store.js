import {configureStore} from "@reduxjs/toolkit";
import {restaurantSlice} from "./entity/restaurant/slice.js";
import {dishSlice} from "./entity/dish/slice.js";
import {reviewSlice} from "./entity/review/slice.js";
import {userSlice} from "./entity/user/slice.js";
import {cartSlice} from "./cart/slice.js";
import {requestSlice} from "./entity/request/slice.js";
import {api} from "./services/api/index.js";

export const store = configureStore({
        reducer: {
            [restaurantSlice.name]: restaurantSlice.reducer,
            [dishSlice.name]: dishSlice.reducer,
            [reviewSlice.name]: reviewSlice.reducer,
            [userSlice.name]: userSlice.reducer,
            [cartSlice.name]: cartSlice.reducer,
            [requestSlice.name]: requestSlice.reducer,
            [api.reducerPath]: api.reducer,
        },
        middleware: (getDefaultMiddlewares) =>
            getDefaultMiddlewares().concat(api.middleware)
    }
)