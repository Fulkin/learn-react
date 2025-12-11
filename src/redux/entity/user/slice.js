import {createSlice} from "@reduxjs/toolkit";
import {normalizedUsers} from "../../../../materials/normalized-mock.js";

const initialState = {
    ids: normalizedUsers.map(({id}) => id),
    entities: normalizedUsers.reduce((acc, user) => {
        acc[user.id] = user;

        return acc;
    }, {}),
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    selectors: {
        selectUserById: (state, id) => state.entities[id],
        selectUsersIds: (state) => state.ids,
    }
});

export const {selectUserById, selectUsersIds} = userSlice.selectors;