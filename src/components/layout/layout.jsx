import styles from './layout.module.css';
import {ToggleThemeButton} from "../toggle-theme-button/toggle-theme-button.jsx";

export const Layout = ({title, children}) => {

    return (
        <>
            <header className={styles.header}>{title}</header>
            <ToggleThemeButton/>
            <main>{children}</main>
            <footer className={styles.footer}>©2025 Restaurants</footer>
        </>
    );
};