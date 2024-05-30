// import { useState } from "react";
import Intro from "./components/Intro";
import Accordion from "./components/Accordion";
import MainText from "./components/MainText";

function App() {
  return (
    <div className="text-slate-800 bg-offwhite bg-slate">
      <Intro />
      <MainText />
      <Accordion />
    </div>
  );
}

export default App;
