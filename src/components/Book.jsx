/* eslint-disable react/prop-types */
const Book = ({ book }) => {
  return (
    <li className="mt-2 mb-4 lg:mb-8">
      <div className="text-center lg:m-4">
        <p className="">
          <a
            href={book.url}
            className="font-display font-bold text-lg underline lg:text-3xl"
            target="_blank"
            rel="noreferrer"
          >
            {book.title}
          </a>
          {book.tagline ? ":" : ""}
        </p>
        <p className="lg:text-2xl lg:mt-2">{book.tagline}</p>
      </div>
      <p className="text-center mx-auto my-2 lg:text-xl">By {book.author}</p>
    </li>
  );
};

export default Book;
