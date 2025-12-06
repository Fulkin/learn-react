import styles from "./header.module.css";
import {ToggleThemeButton} from "../toggle-theme-button/toggle-theme-button.jsx";
import {useContext} from "react";
import {EnterUserContext, UserContext} from "../user-context/index.js";
import {Button} from "../button/button.jsx";

export const Header = ({title}) => {
    const setUser = useContext(EnterUserContext);
    const user = useContext(UserContext);

    const handleLogin = () => {
        const userData = {name: 'Иван Иванов'}; // из ответа сервера
        setUser(userData);
    };

    const handleLogout = () => {
        setUser(null);
    };


    return (
        <header>
            <h1 className={styles.title}>{title}</h1>

            <div className={styles.container}>
                <ToggleThemeButton/>
                <div>
                    {user ? (
                        <div className={styles.container}>
                            <div className={styles.userInfo}>Привет, {user.name}!</div>
                            <Button title='Exit' onClick={handleLogout}/>
                        </div>
                    ) : (
                        <Button title='Enter' onClick={handleLogin}/>
                    )}
                </div>
            </div>
        </header>
    )
}