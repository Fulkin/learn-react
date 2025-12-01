export const Counter = ({value, increment, decrement}) => {

    return (
        <>
            <button className="button-sign" onClick={increment}>+</button>
            <span className="counter">{value}</span>
            <button className="button-sign" onClick={decrement}>-</button>
        </>
    );
}