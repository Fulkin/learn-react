import {useReducer} from "react";

const INITIAL_FORM = {
    text: "",
    rating: 1,
}

const UPDATE_TEXT_ACTION = 'UPDATE_TEXT_ACTION';
const INCREMENT_RATING_ACTION = 'INCREMENT_RATING_ACTION';
const DECREMENT_RATING_ACTION = 'DECREMENT_RATING_ACTION';
const CLEAR_ACTION = 'CLEAR_ACTION';

const MAX_VALUES = 5;
const MIN_VALUES = 1;

const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case UPDATE_TEXT_ACTION:
            return {...state, text: payload};
        case INCREMENT_RATING_ACTION:
            return {...state, rating: Math.min(state.rating + 1, MAX_VALUES)};
        case DECREMENT_RATING_ACTION:
            return {...state, rating: Math.max(state.rating - 1, MIN_VALUES)};
        case CLEAR_ACTION:
            return INITIAL_FORM;
        default:
            return state;
    }
}

export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

    const setText = (text) => {
        dispatch({payload: text, type: UPDATE_TEXT_ACTION})
    }

    const incrementRating = () => {
        dispatch({type: INCREMENT_RATING_ACTION})
    }

    const decrementRating = () => {
        dispatch({type: DECREMENT_RATING_ACTION})
    }

    const clear = () => {
        dispatch({type: CLEAR_ACTION})
    }

    return {
        form,
        setText,
        incrementRating,
        decrementRating,
        clear,
    }
}