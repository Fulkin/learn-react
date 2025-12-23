import {useContext} from "react";
import {EnterUserContext, UserContext} from "../user-context/index.js";

export const useAuthUser = () => {
    const setUser = useContext(EnterUserContext);
    const user = useContext(UserContext);

    const handleLogin = () => {
        const userData = {
            id: "a304959a-76c0-4b34-954a-b38dbf310360",
            name: 'Antony',
            isAuth: true,
        };
        setUser(userData);
    };

    const handleLogout = () => {
        setUser(null);
    };

    return {user, handleLogin, handleLogout};
}