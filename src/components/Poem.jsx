/* eslint-disable react/prop-types */
const Poem = ({ poem }) => {
  return ( 
    <li className="mt-2 mb-4 lg:m-4 lg:mb-8">
      <div className="text-center">
        <p className="font-display font-bold text-lg underline lg:text-3xl lg:mb-2">{poem.title}</p>
        <p className="lg:text-xl">{poem.author}</p>
      </div>
      <div className="my-2 grid justify-center items-center">
        {
          poem.verses.map((verse, index) => {
            return (
              <div key={index} className="flex my-2 w-fit">
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