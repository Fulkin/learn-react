import styles from './layout.module.css';
import {Header} from "../header/header.jsx";
import {CartContainer} from "../cart/card-container.jsx";
import {Outlet} from "react-router";

export const Layout = () => {
    return (
        <div>
            <Header title='Restaurants'/>
            <main>
                <CartContainer/>
                <Outlet/>
            </main>
            <footer className={styles.footer}>©2025 Restaurants</footer>
        </div>
    );
};