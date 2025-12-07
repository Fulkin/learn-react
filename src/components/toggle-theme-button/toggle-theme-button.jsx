import {Button} from "../button/button.jsx";
import {useContext} from "react";
import {ToggleThemeContext} from "../theme-context/index.js";

export const ToggleThemeButton = (props) => {
    const setTheme = useContext(ToggleThemeContext);

    return <Button title='Toggle theme' onClick={
        () => setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
    }/>

}