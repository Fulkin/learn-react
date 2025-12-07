import {useState} from "react";
import {UserContext, EnterUserContext} from "./index.js";

export const ActionsProvider = ({setUser, children}) => {
    return <EnterUserContext value={setUser}>{children}</EnterUserContext>
}

export const ValueProvider = ({user, children}) => {
    return <UserContext value={user}>{children}</UserContext>
}

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState();

    return (
        <ActionsProvider setUser={setUser}>
            <ValueProvider user={user}>
                {children}
            </ValueProvider>
        </ActionsProvider>
    );
}