import {useState} from "react";
import {ThemeContext} from "./theme-context.js";

export const theme = "light";

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    return <ThemeContext value={{theme, setTheme}}>{children}</ThemeContext>;
}