import {createSlice} from "@reduxjs/toolkit";
import {
    REQUEST_STATUS_FULFILLED,
    REQUEST_STATUS_PENDING,
    REQUEST_STATUS_REJECTED
} from "../../../components/redux/constants.js";

export const requestSlice = createSlice({
    name: "request",
    initialState: {},
    selectors: {
        selectRequestStatus: (state, requestId) => state[requestId],
    },
    extraReducers: (builder) =>
        builder
            .addMatcher(
                ({type}) => type.endsWith(REQUEST_STATUS_PENDING),
                (state, {meta}) => {
                    state[meta.requestId] = REQUEST_STATUS_PENDING;
                }
            )
            .addMatcher(
                ({type}) => type.endsWith(REQUEST_STATUS_FULFILLED),
                (state, {meta}) => {
                    state[meta.requestId] = REQUEST_STATUS_FULFILLED;
                }
            )
            .addMatcher(
                ({type}) => type.endsWith(REQUEST_STATUS_REJECTED),
                (state, {meta}) => {
                    state[meta.requestId] = REQUEST_STATUS_REJECTED;
                }
            ),
});

export const {selectRequestStatus} = requestSlice.selectors;