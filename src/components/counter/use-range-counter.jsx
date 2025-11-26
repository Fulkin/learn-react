import {useState} from "react";

export const useRangeCounter = ({min, max}) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        let number = count + 1;
        setCount(number > max ? max : number);
    };
    const decrement = () => {
        let number = count - 1;
        setCount(number < min ? min : number);
    };
    return {
        count, increment, decrement
    };
}