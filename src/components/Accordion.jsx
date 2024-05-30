/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "./Card";
import { chapters } from "../data/data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const cardArray = chapters;

  const handleClick = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  return (
    <>
      {cardArray.map((card, index) => (
        <Card
          key={index}
          card={card}
          handleClick={handleClick}
          selected={selected}
          index={index}
        />
      ))}
    </>
  );
}
