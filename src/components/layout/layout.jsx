export const Layout = ({children}) => {

    return (
        <>
            <header className="header">Navigation</header>
            <main>{children}</main>
            <footer className="menu">©2025 Restaurants</footer>
        </>
    );
};