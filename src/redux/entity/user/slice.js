import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getUsers} from "./get-users.js";

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
    name: "user",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectUserById: (state, id) => state.entities[id],
        selectUsersIds: (state) => state.ids,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getUsers.pending, (state) => {
                state.requestStatus = "pending";
            })
            .addCase(getUsers.fulfilled, (state, {payload}) => {
                state.requestStatus = "fulfilled";

                entityAdapter.setAll(state, payload);
            })
            .addCase(getUsers.rejected, (state) => {
                state.requestStatus = "rejected";
            }),
});

export const {selectUserById, selectUsersIds} = userSlice.selectors;