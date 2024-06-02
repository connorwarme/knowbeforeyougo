// import { useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Accordion from "./components/Accordion";
import MainText from "./components/MainText";
import Footer from "./components/Footer";

function App() {
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
