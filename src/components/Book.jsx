/* eslint-disable react/prop-types */
const Book = ({ book }) => {
  return ( 
    <li className="mt-2 mb-4">
      <div className="text-center">
        <p className=""><a href={book.url} className="font-display font-bold text-lg underline" target="_blank" rel="noreferrer">{book.title}</a>{book.tagline ? ':' : ''}</p>
        <p className="">{book.tagline}</p>
      </div>
      <p className="text-center mx-auto my-2">By {book.author}</p>
    </li>
   );
}
 
export default Book;