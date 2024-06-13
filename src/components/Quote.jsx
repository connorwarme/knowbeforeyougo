/* eslint-disable react/prop-types */
const Quote = ({ quote }) => {
  return ( 
    <li className="mt-2 mb-4 lg:m-4 lg:mb-8">
      <div className="text-center">
        <p>{quote.text}</p>
        <p className="font-display font-bold text-lg lg:text-xl">- {quote.author}</p>
      </div>
    </li>
   );
}
 
export default Quote;