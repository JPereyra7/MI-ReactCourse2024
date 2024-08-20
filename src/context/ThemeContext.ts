import { createContext } from "react";
//Contexts : themes!
export interface ITheme {
    name: string;
    backgroundColor: string;
    fontColor: string;
}

export interface IThemes {
    dark: ITheme;
    light: ITheme;
}

export const themes: IThemes = {
    dark: {
        name: "Dark",
        backgroundColor: "black",
        fontColor: "white",
    },
    light: {
        name: "Light",
        backgroundColor: "white",
        fontColor: "black",
    },
};
export const ThemeContext = createContext<ITheme>(themes.dark);