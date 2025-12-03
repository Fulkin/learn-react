import styles from './layout.module.css';

export const Layout = ({children}) => {

    return (
        <>
            <header className={styles.header}>Navigation</header>
            <main>{children}</main>
            <footer className={styles.footer}>©2025 Restaurants</footer>
        </>
    );
};