import {Counter} from "../counter/counter.jsx";
import {useRangeCounter} from "../counter/use-range-counter.jsx";

import styles from "./dish.module.css";
import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/entity/dish/slice.js";
import {NavLink} from "react-router";
import {useRequest} from "../../redux/hooks/use-request.js";
import {getDishById} from "../../redux/entity/dish/get-dish-by-id.js";

export const DishListItem = ({dishId}) => {
        const dish = useSelector((state) =>
            selectDishById(state, dishId)
        );
        const {isLoading, isError} = useRequest(getDishById, dishId);
        const id = dishId;
        const {value, increment, decrement} = useRangeCounter({id});

        if (isLoading) {
            return "loading...";
        }

        if (isError || !dish) {
            return "Error";
        }

        const {name, price} = dish;

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