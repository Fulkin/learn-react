import styles from "./counter.module.css";

export const Counter = ({value, increment, decrement}) => {

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={increment}>+</button>
            <span className={styles.counter}>{value}</span>
            <button className={styles.button} onClick={decrement}>-</button>
        </div>
    );
}