/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "./Card";
import { chapters } from "../data/data";
import { topics } from "../data/topicalData";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const cardArray = chapters;
  const topicsArray = topics;

  const handleClick = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  
  return (
    <section aria-label="Additional content to supplement book, organized by chapter" className="py-6 px-4">
      <h2 className="font-display font-bold text-xl mx-auto w-fit border-deep border-b-2 my-6" id="resources">Additional Resources</h2>
      {cardArray.map((card, index) => (
        <Card
          key={index}
          card={card}
          handleClick={handleClick}
          selected={selected}
          updateSelected={setSelected}
          index={index}
        />
      ))}
      <h2 className="font-display font-bold text-xl mx-auto w-fit border-deep border-b-2 my-6" id="topical-resources">Topical Resources</h2>
      {/* id values need to continue count started in chapters data */}
      {topicsArray.map((topic, index) => (
        <Card
          key={index}
          card={topic}
          handleClick={handleClick}
          selected={selected}
          updateSelected={setSelected}
          index={topic.id}
        />
      ))}
    </section>
  );
}
