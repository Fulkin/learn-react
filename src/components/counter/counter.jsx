import {useRangeCounter} from "./use-range-counter.jsx";

export const Counter = () => {

    const {count, increment, decrement} = useRangeCounter({min: 0, max: 5});

    return (
        <>
            <button className="button-sign" onClick={decrement}>-</button>
            <span className="counter">{count}</span>
            <button className="button-sign" onClick={increment}>+</button>
        </>
    );
}