import {Counter} from "../counter/counter.jsx";
import {useRangeCounter} from "../counter/use-range-counter.jsx";

export const DishListItem = ({menu}) => {
        const {name, price} = menu;

        const {count, increment, decrement} = useRangeCounter({min: 0, max: 5});

        return (
            <li className="menu-group">
                <span className="menu-item">{name}</span>
                <span className="price-item">{`${price} у.е.`}</span>
                <Counter
                    value={count}
                    increment={increment}
                    decrement={decrement}
                />
            </li>
        );
    }
;