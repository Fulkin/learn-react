import {useState} from "react";
import {ThemeContext, ToggleThemeContext} from "./index.js";

export const ActionsProvider = ({setTheme, children}) => {
    return <ToggleThemeContext value={setTheme}>{children}</ToggleThemeContext>
}

export const ValueProvider = ({theme, children}) => {
    return <ThemeContext value={theme}>{children}</ThemeContext>
}

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    return (
        <ActionsProvider setTheme={setTheme}>
            <ValueProvider theme={theme}>
                {children}
            </ValueProvider>
        </ActionsProvider>
    );
}