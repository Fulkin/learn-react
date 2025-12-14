import styles from './layout.module.css';
import {Header} from "../header/header.jsx";
import {Cart} from "../cart/cart.jsx";

export const Layout = ({children}) => {

    return (
        <div>
            <Header title='Restaurants'/>
            <main>{children}</main>
            <Cart/>
            <footer className={styles.footer}>©2025 Restaurants</footer>
        </div>
    );
};