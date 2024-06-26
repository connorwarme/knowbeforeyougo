import { useTheme } from "./ThemeContext";

const ThemeDisplay = () => {
  const {dark, toggleDark} = useTheme()
  console.log('theme display', dark)
  return ( 
    <div>
      <h1 className="text-3xl font-bold">Current Theme: {dark ? 'true' : 'false'}</h1>
      <button onClick={() => toggleDark()}>Toggle</button>
    </div>
   );
}
 
export default ThemeDisplay;