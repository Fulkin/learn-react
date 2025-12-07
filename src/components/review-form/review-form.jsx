import {Counter} from "../counter/counter.jsx";
import {useForm} from "./use-form.jsx";

import styles from "./form.module.css";
import {Button} from "../button/button.jsx";
import {useContext} from "react";
import {UserContext} from "../user-context/index.js";

export const ReviewFrom = () => {
    const {form, setName, setText, incrementRating, decrementRating, clear} = useForm();
    const {name, text, rating} = form;

    const user = useContext(UserContext);


    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.group}>
                <label className={styles.title}>Name</label>
                {user ? (<div>{user.name}</div>)
                    :
                    (<input
                        className={styles.input}
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />)
                }
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
            <Button
                title="Clear"
                onClick={clear}
            />
        </form>
    )
}