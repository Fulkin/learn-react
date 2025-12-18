import classNames from "classnames";
import styles from "./restaurant.module.css";
import {NavLink} from "react-router";
import {ThemeContext} from "../theme-context/index.js";
import {useContext} from "react";

export const RestaurantTabLink = ({path, title}) => {
    const theme = useContext(ThemeContext);

    return (
        <NavLink
            to={path}
            className={({isActive}) =>
                classNames(styles.root, styles.headings, {
                    [styles.active]: isActive,
                    light: theme === 'light',
                    dark: theme === 'dark',

                })
            }
        >
            {title}
        </NavLink>
    )
}