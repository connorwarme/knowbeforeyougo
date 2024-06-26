import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

const ThemeDisplay = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  return ( 
    <div>
      <h1 className="text-3xl font-bold">Current Theme: {theme}</h1>
      <button onClick={() => setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')}>Toggle</button>
    </div>
   );
}
 
export default ThemeDisplay;