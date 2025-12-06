import styles from './layout.module.css';
import {Header} from "../header/header.jsx";

export const Layout = ({title, children}) => {

    return (
        <>
            <Header title={title}/>
            <main>{children}</main>
            <footer className={styles.footer}>©2025 Restaurants</footer>
        </>
    );
};