/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";

export default function Card({ card, selected, updateSelected, handleClick }) {
  const location = useLocation();
  // idea:
  // if user clicks on link in nav, scroll to and open the corresponding card
  // use Link? with state
  // then useLocation to get the state
  // and update the parent component's state accordingly...
  
  // if location.state is not null, update the parent component's state
  (location.state && location.state.index !== null) ? 
    setTimeout(() => {
      if (location.state.index === card.id) {
        updateSelected(location.state.index)
        location.state.index = null;
      }
      return;
    }, 500) : 
    null;
  return (
    <>
      <div
        className="card"
        id={`chapter${card.id}`}
        onClick={() => handleClick(card.id)}
      >
        <h3>
          {card.title}
          <span>&rarr;</span>
          {card.name}
        </h3>
        {selected === card.id ? <p>{card.description}</p> : null}
      </div>
    </>
  );
}
