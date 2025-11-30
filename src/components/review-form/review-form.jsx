import {useReducer} from "react";

const INITIAL_FORM = {
    name: "",
    text: "",
    rating: "",
}

const UPDATE_NAME_ACTION = 'UPDATE_NAME_ACTION';
const UPDATE_TEXT_ACTION = 'UPDATE_TEXT_ACTION';
const UPDATE_RATING_ACTION = 'UPDATE_RATING_ACTION';
const CLEAR_ACTION = 'CLEAR_ACTION';

const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case UPDATE_NAME_ACTION:
            return {...state, name: payload};
        case UPDATE_TEXT_ACTION:
            return {...state, text: payload};
        case UPDATE_RATING_ACTION:
            return {...state, rating: payload};
        case CLEAR_ACTION:
            return INITIAL_FORM;
        default:
            return state;
    }
}


export const ReviewFrom = () => {
    const [form, dispatch] = useReducer(reducer, INITIAL_FORM);
    const {name, text, rating} = form;


    return (
        <form>
            <div className="form-group">
                <label className="form-title-item">Name</label>
                <input
                    className="form-input-item"
                    value={name}
                    onChange={(e) => {
                        dispatch({payload: e.target.value, type: UPDATE_NAME_ACTION})
                    }}
                />
            </div>
            <div className="form-group">
                <label className="form-title-item">Text</label>
                <input
                    className="form-input-item"
                    value={text}
                    onChange={(e) => {
                        dispatch({payload: e.target.value, type: UPDATE_TEXT_ACTION})
                    }}
                />
            </div>
            <div className="form-group">
                <label className="form-title-item">Rating</label>
                <input
                    className="form-input-item"
                    type="number" min="1" max="5" required
                    value={rating}
                    onChange={(e) => {
                        dispatch({payload: e.target.value, type: UPDATE_RATING_ACTION})
                    }}

                />
            </div>
            <button
                className="button-clear"
                type="button"
                onClick={(e) => {
                    dispatch({payload: e.target.value, type: CLEAR_ACTION})
                }}>
                Clear
            </button>
        </form>
    )
}