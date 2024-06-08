import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Accordion from "./components/Accordion";
import MainText from "./components/MainText";
import Footer from "./components/Footer";

function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change


  return (
    <div className="text-slate-800 bg-offwhite bg-slate font-body">
      <Header />
      <Intro />
      <MainText />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
