/* eslint-disable react/prop-types */

export default function Card({ card, selected, handleClick }) {
  return (
    <>
      <div className="card" onClick={() => handleClick(card.id)}>
        <h3>
          {card.title}
          <span>&rarr;</span>
          {card.name}
        </h3>
        {selected === card.id ? <p>{card.content}</p> : null}
      </div>
    </>
  );
}
