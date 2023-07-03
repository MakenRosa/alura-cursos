import { lightBackground, lightContent, lightBackgroundText, darkBackground, darkContent, darkBackgroundText } from "./variables";

export const lightTheme = {
    body: lightBackground,
    inside: lightContent,
    text: lightBackgroundText,
    filter: "invert(0%)"
}

export const darkTheme = {
    body: darkBackground,
    inside: darkContent,
    text: darkBackgroundText,
    filter: "invert(100%)"
}