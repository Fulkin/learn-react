import styles from './layout.module.css';
import {Header} from "../header/header.jsx";
import {CartContainer} from "../cart/card-container.jsx";
import {Outlet} from "react-router";

export const Layout = ({children}) => {
    return (
        <div>
            <Header title='Restaurants'/>
            <main>
                <Outlet/>
            </main>
            <CartContainer/>
            <footer className={styles.footer}>©2025 Restaurants</footer>
        </div>
    );
};