/* eslint-disable react/prop-types */
const Poem = ({ poem }) => {
  return ( 
    <li className="mt-2 mb-4">
      <div className="text-center">
        <p className="font-display font-bold text-lg underline">{poem.title}</p>
        <p className="">{poem.author}</p>
      </div>
      <div>
        {
          poem.verses.map((verse, index) => {
            <p key={index}>{verse}</p>
          })
        }
      </div>
    </li>
   );
}
 
export default Poem;