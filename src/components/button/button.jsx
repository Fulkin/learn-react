import {useContext} from "react";
import classNames from "classnames";
import styles from "./button.module.css";
import {ThemeContext} from "../theme-context/theme-context.js";

export const Button = ({
                           title,
                           onClick,
                           disabled,
                           type,
                       }) => {
    const {theme} = useContext(ThemeContext);

    return (
        <button
            className={classNames(styles.button, {
                [styles.light]: theme === "light",
                [styles.dark]: theme === "dark",
                [styles.tab]: type === "tab",
                [styles.counter]: type === "counter",
            })}
            onClick={onClick}
            disabled={disabled}
        >
            {title}
        </button>
    )
}