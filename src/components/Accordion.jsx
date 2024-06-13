/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "./Card";
import { chapters } from "../data/data";
import { topics } from "../data/topicalData";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const cardArray = chapters;
  const topicsArray = topics;

  const handleClick = (index, ref) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
    // needed timeout to consistently work
    // don't know why
    setTimeout(() => window.scrollTo(0, ref.offsetTop - 100), 150);  
  };
  
  return (
    <section aria-label="Additional content to supplement book, organized by chapter" className="py-6 px-4 sm:p-12 md:grid md:justify-center md:text-lg">
      <div className="md:max-w-[768px]">
        <h2 className="font-display font-bold text-xl sm:text-3xl lg:text-5xl mx-auto w-fit border-deep border-b-2 my-6 sm:border-b-4 lg:my-8" id="resources">Additional Resources</h2>
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
        <h2 className="font-display font-bold text-xl sm:text-3xl lg:text-5xl mx-auto w-fit border-deep border-b-2 my-6 sm:border-b-4 sm:my-20 lg:my-20" id="topical-resources">Topical Resources</h2>
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
      </div>
    </section>
  );
}
