import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectRequestStatus} from "../entity/request/slice.js";
import {
    REQUEST_STATUS_IDLE,
    REQUEST_STATUS_PENDING,
    REQUEST_STATUS_REJECTED
} from "../../components/redux/constants.js";

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
        requestStatus,
        isLoading: requestStatus === REQUEST_STATUS_PENDING || requestStatus === REQUEST_STATUS_IDLE,
        isError: requestStatus === REQUEST_STATUS_REJECTED,
    };
};