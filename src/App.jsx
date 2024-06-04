// import { useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Accordion from "./components/Accordion";
import MainText from "./components/MainText";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="text-slate-800 bg-offwhite bg-slate font-body">
      <Header />
      <Intro />
      <MainText />
      <Accordion />
      <div className="h-dvh">
        <Nav />
      </div>
      <Footer />
    </div>
  );
}

export default App;
