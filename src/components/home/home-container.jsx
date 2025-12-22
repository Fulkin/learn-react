import {useContext} from "react";
import {ThemeContext} from "../theme-context/index.js";
import styles from "./home-page.module.css";
import {NavLink} from "react-router";
import classNames from "classnames";

export const HomeContainer = () => {

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
}