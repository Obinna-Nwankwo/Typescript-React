import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


function Box(){

    const theme = useContext(ThemeContext);
    return (
        <div style={{background: theme.primary.main, color: theme.primary.text}}>Theme colors</div>
    )
}

export default Box;