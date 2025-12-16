import {NavLink} from "react-router";
import styles from "./home-page.module.css";
import {useContext} from "react";
import {ThemeContext} from "../theme-context/index.js";
import classNames from "classnames";


export const HomePage = () => {
    const theme = useContext(ThemeContext);

    return (
        <div>
            <h1 className={styles.title}>Добро пожаловать в ресторанное приложение</h1>
            <p className={styles.description}>
                Выберите ресторан из списка или перейдите к каталогу ресторанов
            </p>

            <div>
                <NavLink
                    to="/restaurants"
                    className={classNames(styles.restaurantsLink, {
                        light: theme === 'light',
                        dark: theme === 'dark',
                    })}
                >
                    → Посмотреть рестораны
                </NavLink>
            </div>
        </div>
    );
};