/* eslint-disable react/prop-types */
const Quote = ({ quote }) => {
  return ( 
    <li className="mt-2 mb-4">
      <div className="text-center">
        <p>{quote.text}</p>
        <p className="font-display font-bold text-lg">- {quote.author}</p>
      </div>
    </li>
   );
}
 
export default Quote;