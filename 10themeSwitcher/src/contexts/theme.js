import { useContext,createContext } from "react";

export const ThemeContext=createContext({ //giving default values
    themeMode:'light',  // current theme 
    darkTheme:()=>{},
    lightTheme:()=>{}
})    

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){ //Custom Hook
    return useContext(ThemeContext) 
}

// createContext() → global box banaya

// Provider → data supply kar raha hai

// useContext() → data nikal raha hai

// useTheme() → easy shortcut banaya

