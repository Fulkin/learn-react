import {useContext} from "react";
import {EnterUserContext, UserContext} from "../user-context/index.js";

export const useAuthUser = () => {
    const setUser = useContext(EnterUserContext);
    const user = useContext(UserContext);

    const handleLogin = () => {
        const userData = {name: 'Иван Иванов'}; // из ответа сервера
        setUser(userData);
    };

    const handleLogout = () => {
        setUser(null);
    };

    return {user, handleLogin, handleLogout};
}