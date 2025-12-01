import {Counter} from "../counter/counter.jsx";
import {useForm} from "./use-form.jsx";

export const ReviewFrom = () => {
    const {form, setName, setText, incrementRating, decrementRating, clear} = useForm();
    const {name, text, rating} = form;


    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
                <label className="form-title-item">Name</label>
                <input
                    className="form-input-item"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
            </div>
            <div className="form-group">
                <label className="form-title-item">Text</label>
                <input
                    className="form-input-item"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                />
            </div>
            <div className="form-group">
                <label className="form-title-item">Rating</label>
                <Counter
                    value={rating}
                    increment={incrementRating}
                    decrement={decrementRating}
                />
            </div>
            <button
                className="button-clear"
                type="button"
                onClick={clear}>
                Clear
            </button>
        </form>
    )
}