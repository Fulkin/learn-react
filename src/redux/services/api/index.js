import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/query";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/api"}),
    tagTypes: ["Review"],
    endpoints: (builder) => ({
        getRestaurants: builder.query({
            query: () => "/restaurants"
        }),
        getRestaurantById: builder.query({
            query: (restaurantId) => `/restaurant/${restaurantId}`
        }),
        getDishesByRestaurantId: builder.query({
            query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`
        }),
        getDishesById: builder.query({
            query: (dishId) => `/dish/${dishId}`
        }),
        getReviewsByRestaurantId: builder.query({
            query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
            providesTags: () => [{type: "Review", id: "ALL"}],
        }),
        getReviewById: builder.query({
            query: (reviewId) => `/review/${reviewId}`
        }),
        getUsers: builder.query({
            query: () => "/users/"
        }),
        addReview: builder.mutation({
            query: ({restaurantId, review}) => ({
                url: `/review/${restaurantId}`,
                method: "POST",
                body: review,
            }),
            invalidatesTags: () => [{type: "Review", id: "ALL"}],
        })
    }),
});

export const {
    useGetRestaurantsQuery,
    useGetRestaurantByIdQuery,
    useGetDishesByRestaurantIdQuery,
    useGetDishesByIdQuery,
    useGetReviewsByRestaurantIdQuery,
    useGetReviewByIdQuery,
    useGetUsersQuery,
    useAddReviewMutation,
} = api;