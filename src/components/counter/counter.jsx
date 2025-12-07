import styles from "./counter.module.css";
import {Button} from "../button/button.jsx";
import {useContext} from "react";
import {UserContext} from "../user-context/index.js";

export const Counter = ({value, increment, decrement}) => {

    const user = useContext(UserContext);

    if (!user) {
        return null;
    }

    return (
        <div className={styles.container}>
            <Button title='+' onClick={increment} type='counter'/>
            <span className={styles.counter}>{value}</span>
            <Button title='-' onClick={decrement} type='counter'/>
        </div>
    );
}