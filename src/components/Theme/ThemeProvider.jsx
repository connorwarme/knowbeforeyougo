import { ThemeContext } from "./ThemeContext";
import { useState } from "react";

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false)
  console.log('dark', dark)
  const toggleDark = () => {
    setDark(prevTheme => !prevTheme)
  }
  return ( 
    <ThemeContext.Provider value={{dark, toggleDark}}>
      {children}
    </ThemeContext.Provider>
   );
}
 
export default ThemeProvider; 