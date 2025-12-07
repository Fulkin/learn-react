import styles from "./header.module.css";
import {ToggleThemeButton} from "../toggle-theme-button/toggle-theme-button.jsx";
import {Button} from "../button/button.jsx";
import {useAuthUser} from "../auth-user/use-auth-user.jsx";

export const Header = ({title}) => {
    const {user, handleLogin, handleLogout} = useAuthUser();

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