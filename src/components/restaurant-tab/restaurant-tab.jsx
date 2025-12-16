import {selectRestaurantById} from "../../redux/entity/restaurant/slice.js";
import {useSelector} from "react-redux";
import {NavLink} from "react-router";

import styles from "./restaurant-tab.module.css";
import classNames from "classnames";
import {useContext} from "react";
import {ThemeContext} from "../theme-context/index.js";

export const RestaurantTabContainer = ({id}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));
    const theme = useContext(ThemeContext);

    if (!restaurant) {
        return null;
    }

    return (
        <NavLink
            to={`/restaurants/${id}`}
            className={({isActive}) =>
                classNames(styles.root, styles.headerTitle, {
                    [styles.active]: isActive,
                    light: theme === 'light',
                    dark: theme === 'dark',

                })
            }
        >
            {restaurant.name}
        </NavLink>
    )
};