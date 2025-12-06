import styles from "./counter.module.css";
import {Button} from "../button/button.jsx";

export const Counter = ({value, increment, decrement}) => {

    return (
        <div className={styles.container}>
            <Button title='+' onClick={increment} type='counter'/>
            <span className={styles.counter}>{value}</span>
            <Button title='-' onClick={decrement} type='counter'/>
        </div>
    );
}