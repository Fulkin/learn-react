import {Button} from "../button/button.jsx";
import {useContext} from "react";
import {ThemeContext} from "../theme-context/theme-context.js";

export const ToggleThemeButton = (props) => {
    const {setTheme} = useContext(ThemeContext);

    return <Button title='Toggle theme' onClick={
        () => setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
    }/>

}