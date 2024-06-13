/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import Content from "./Content";
import { MdExpandMore as Expand } from "react-icons/md";

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

  const cardRef = useRef();
  // to do:
  // would be nice to add transition to the content-container
  // (currently doesn't work)
  const containerStyle = `content-container h-0 transition-all duration-500`
  const containerStyleOpen = `content-container h-fit transition-all duration-500`
  return (
    <>
      <div
        className="card my-8"
        id={card.hash}
        ref={cardRef}
        onClick={() => handleClick(card.id, cardRef.current)}
      >
        <h3 className="font-display flex flex-col transition-all duration-300 lg:gap-2">
          <span className="sm:text-xl lg:text-2xl">{card.title}</span>
          <span className="self-center font-bold sm:text-2xl lg:text-4xl">{card.name}</span>
        </h3>
        <div className={selected === card.id ? containerStyleOpen : containerStyle}>
          { selected === card.id && <Content content={card.content} /> }
        </div>
        <div className="button-container flex justify-center">
          <button>
            {
              selected === card.id 
              ? <Expand className="h-10 w-10 rotate-180 transition-all duration-200" title="Minimize" alt={`Minimize chapter ${card.id} content`} />
              : <Expand className="h-10 w-10 transition-all duration-200" title="Expand" alt={`Expand chapter ${card.id} content`} />
            }
          </button>
        </div>
      </div>
    </>
  );
}
