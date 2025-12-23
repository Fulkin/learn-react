import {Counter} from "../counter/counter.jsx";

import styles from "./dish.module.css";
import {NavLink} from "react-router";
import {useRangeCounter} from "../counter/use-range-counter.jsx";

export const DishListItem = ({id, name, price}) => {
        const {value, increment, decrement} = useRangeCounter({id});

        return (
            <li className={styles.group}>
                <NavLink
                    to={`/dish/${id}`}
                    className={styles.menu}
                >
                    {name}
                </NavLink>
                <span className={styles.price}>{`${price} у.е.`}</span>
                <Counter
                    value={value}
                    increment={increment}
                    decrement={decrement}
                />
            </li>
        );
    }
;