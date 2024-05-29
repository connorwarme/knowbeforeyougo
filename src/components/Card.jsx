/* eslint-disable react/prop-types */

export default function Card({ card }) {
  return (
    <>
      <div className="card">
        <h3>{card.title}</h3>
      </div>
    </>
  )
}
