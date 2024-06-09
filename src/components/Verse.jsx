/* eslint-disable react/prop-types */
const Verse = ({ verse }) => {
  return ( 
    <li className="">
      <p>{verse.text}</p>
      <div className="flex justify-end font-display">
        <p className="mr-2">{verse.location}</p>
        <p>{verse.version}</p>
      </div>
    </li>
   );
}
 
export default Verse;