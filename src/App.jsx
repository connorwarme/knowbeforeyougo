import { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Accordion from "./components/Accordion";
import MainText from "./components/MainText";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { ThemeContext } from "./components/Theme/ThemeContext";
import ThemeDisplay from "./components/Theme/ThemeDisplay";

function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element && id === "top") {
          element.scrollIntoView();
        } else if (element) {
          // account for header height
          window.scrollTo(0, element.offsetTop - 100);
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  const [theme, setTheme] = useState('dark')
  return (
    <div className="bg-offwhite text-night bg-slate font-body flex flex-col">
      {/* <Header />
      <Intro />
      <MainText />
      <Accordion />
      <Contact />
      <Footer /> */}
      <ThemeContext.Provider value={{theme, setTheme}}>
        <ThemeDisplay />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
