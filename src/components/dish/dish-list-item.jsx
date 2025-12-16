import {Counter} from "../counter/counter.jsx";
import {useRangeCounter} from "../counter/use-range-counter.jsx";

import styles from "./dish.module.css";
import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/entity/dish/slice.js";
import {NavLink} from "react-router";

export const DishListItem = ({dishId}) => {
        const dish = useSelector((state) =>
            selectDishById(state, dishId)
        );
        const {name, price} = dish;
        const id = dishId;

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