import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export interface IButtonProps {
    click: () => void;
    children: JSX.Element;
}

export const Button = ({ click, children }:IButtonProps) => {
    const themes = useContext(ThemeContext);
    
    return(
        <>
        <button style={{ 
            background: themes.backgroundColor,
            color: themes.fontColor }} onClick={click}>{children}</button>
        </>
    )
}