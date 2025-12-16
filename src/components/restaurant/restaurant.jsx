import styles from "./restaurant.module.css";
import {NavLink} from "react-router";
import classNames from "classnames";
import {useContext} from "react";
import {ThemeContext} from "../theme-context/index.js";

export const Restaurant = ({name}) => {

    const theme = useContext(ThemeContext);

    return (
        <div>
            <h2 className={styles.headerTitle}>Ресторан {name}</h2>
            <div className={styles.menuGroup}>
                <NavLink
                    to={`menu`}
                    className={({isActive}) =>
                        classNames(styles.root, styles.headings, {
                            [styles.active]: isActive,
                            light: theme === 'light',
                            dark: theme === 'dark',

                        })
                    }
                >
                    Меню
                </NavLink>
                <NavLink
                    to={`reviews`}
                    className={({isActive}) =>
                        classNames(styles.root, styles.headings, {
                            [styles.active]: isActive,
                            light: theme === 'light',
                            dark: theme === 'dark',
                        })
                    }
                >
                    Отзывы
                </NavLink>
            </div>
        </div>
    );
}