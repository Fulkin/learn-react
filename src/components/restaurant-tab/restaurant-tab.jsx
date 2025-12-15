import {selectRestaurantById} from "../../redux/entity/restaurant/slice.js";
import {useSelector} from "react-redux";
import {NavLink} from "react-router";

import styles from "./restaurant-tab.module.css";
import classNames from "classnames";

export const RestaurantTabContainer = ({id}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    return (
        <NavLink
            to={`/restaurants/${id}`}
            className={({isActive}) =>
                classNames(styles.root, {[styles.active]: isActive})
            }
        >
            {restaurant.name}
        </NavLink>
    )
};