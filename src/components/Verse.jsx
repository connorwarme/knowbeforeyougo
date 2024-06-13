/* eslint-disable react/prop-types */
const Verse = ({ verse }) => {
  return (
    <li className="mt-2 mb-4 lg:m-4 lg:mb-8">
      <p>&emsp; {verse.text}</p>
      <div className="flex justify-end font-display sm:mr-4 sm:mt-2 lg:text-2xl">
        <p className="mr-2">{verse.location}</p>
        <p>{verse.version}</p>
      </div>
    </li>
  );
};

export default Verse;
