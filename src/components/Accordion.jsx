/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "./Card";
import { chapters } from "../data/data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const cardArray = chapters;

  const handleClick = (index) => {
    console.log(index)
    console.log(selected)
    if (selected === index) {
      return setSelected(null);
    }
    updateSelected(index);
  };
  const updateSelected = (index) => {
    setSelected(index);
  };
  return (
    <section aria-label="Additional content to supplement book, organized by chapter" className="py-6 pl-4">
      <h2 className="font-display font-bold text-xl" id="resources">Additional Resources</h2>
      {cardArray.map((card, index) => (
        <Card
          key={index}
          card={card}
          handleClick={handleClick}
          selected={selected}
          updateSelected={updateSelected}
          index={index}
        />
      ))}
    </section>
  );
}
