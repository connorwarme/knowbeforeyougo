import { createContext, useContext } from "react";

export const ThemeContext = createContext(false);

export const useTheme = () => {
  console.log('fire useTheme')
  return useContext(ThemeContext);
}