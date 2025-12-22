import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectUsersIds} from "./slice.js";

export const getUsers = createAsyncThunk(
    "user/getUsers",
    async (params, {rejectWithValue}) => {
        const response = await fetch("http://localhost:3001/api/users/");

        const result = await response.json();

        if (!result.length) {
            rejectWithValue("No users found.");
        }

        return result;
    },
    {
        condition: (_, {getState}) => {
            return !selectUsersIds(getState())?.length;
        }
    }
);