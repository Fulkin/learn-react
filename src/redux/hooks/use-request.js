import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectRequestStatus} from "../entity/request/slice.js";

export const useRequest = (thunk, params) => {
    const [request, setRequest] = useState();
    const requestStatus = useSelector((state) =>
        selectRequestStatus(state, request?.requestId)
    );

    const dispatch = useDispatch();

    useEffect(() => {
        const request = dispatch(thunk(params));

        setRequest(request);

        return () => {
            request.abort();
            setRequest(null);
        };
    }, [dispatch, params, thunk]);

    return {
        isLoading: requestStatus === 'pending' || requestStatus === 'idle',
        isError: requestStatus === "rejected",
    };
};