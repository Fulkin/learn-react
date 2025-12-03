import {Counter} from "../counter/counter.jsx";
import {useForm} from "./use-form.jsx";

import styles from "./form.module.css";

export const ReviewFrom = () => {
    const {form, setName, setText, incrementRating, decrementRating, clear} = useForm();
    const {name, text, rating} = form;


    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.group}>
                <label className={styles.title}>Name</label>
                <input
                    className={styles.input}
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
            </div>
            <div className={styles.group}>
                <label className={styles.title}>Text</label>
                <input
                    className={styles.input}
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                />
            </div>
            <div className={styles.group}>
                <label className={styles.title}>Rating</label>
                <Counter
                    value={rating}
                    increment={incrementRating}
                    decrement={decrementRating}
                />
            </div>
            <button
                className={styles.buttonClear}
                type="button"
                onClick={clear}
            >
                Clear
            </button>
        </form>
    )
}