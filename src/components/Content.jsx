/* eslint-disable react/prop-types */
import Verse from "./Verse";
import Book from "./Book";
import Song from "./Song";

const Content = ({ content }) => {
  return ( 
    <div className="cardContent">
      {
        content.verses && (
          <ul className="list-none border-b-2 border-deep mb-4 last-of-type:border-b-0">
            <h3 className="font-display font-semibold text-lg my-2">Verses</h3>
            {
              content.verses.map((verse, index) => (
                <Verse key={index} verse={verse} />
              ))
            }
          </ul>
        )
      }
      {
        content.books && (
          <ul className="list-none border-b-2 border-deep mb-4 last-of-type:border-b-0">
            <h3 className="font-display font-semibold text-lg my-2">Books</h3>
            {
              content.books.map((book, index) => (
                <Book key={index} book={book} />
              ))
            }
          </ul>
        )
      }
      {
        content.songs && (
          <ul className="list-none border-b-2 border-deep mb-4 last-of-type:border-b-0">
            <h3 className="font-display font-semibold text-lg my-2">Songs</h3>
            {
              content.songs.map((song, index) => (
                <Song key={index} song={song} />
              ))
            }
          </ul>
        )
      }
    </div>
   );
}
 
export default Content;