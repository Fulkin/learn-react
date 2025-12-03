import {Counter} from "../counter/counter.jsx";
import {useRangeCounter} from "../counter/use-range-counter.jsx";

import styles from "./dish.module.css";

export const DishListItem = ({menu}) => {
        const {name, price} = menu;

        const {count, increment, decrement} = useRangeCounter({min: 0, max: 5});

        return (
            <li className={styles.group}>
                <span className={styles.menu}>{name}</span>
                <span className={styles.price}>{`${price} у.е.`}</span>
                <Counter
                    value={count}
                    increment={increment}
                    decrement={decrement}
                />
            </li>
        );
    }
;