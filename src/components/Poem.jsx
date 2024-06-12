/* eslint-disable react/prop-types */
const Poem = ({ poem }) => {
  return ( 
    <li className="mt-2 mb-4">
      <div className="text-center">
        <p className="font-display font-bold text-lg underline">{poem.title}</p>
        <p className="">{poem.author}</p>
      </div>
      <div className="my-2">
        {
          poem.verses.map((verse, index) => {
            return (
              <div key={index} className="flex my-2">
                <p className="whitespace-pre-line">{`${verse}`}</p>
              </div>
            )
          })
        }
      </div>
    </li>
   );
}
 
export default Poem;