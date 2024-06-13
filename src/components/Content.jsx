/* eslint-disable react/prop-types */
import Verse from "./Verse";
import Book from "./Book";
import Song from "./Song";
import Poem from "./Poem";
import Quote from "./Quote";

const Content = ({ content }) => {
  const listStyle = 'list-none border-b-2 border-deep mb-4 last-of-type:border-b-0'
  const titleStyle = 'font-display font-semibold text-lg my-2 sm:text-xl'
  return ( 
    <div className="cardContent">
      {
        content.verses && (
          <ul className={listStyle}>
            <h3 className={titleStyle}>Verses</h3>
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
          <ul className={listStyle}>
            <h3 className={titleStyle}>Books</h3>
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
          <ul className={listStyle}>
            <h3 className={titleStyle}>Songs</h3>
            {
              content.songs.map((song, index) => (
                <Song key={index} song={song} />
              ))
            }
          </ul>
        )
      }
      {
        content.poems && (
          <ul className={listStyle}>
            <h3 className={titleStyle}>{content.poems.length > 1 ? 'Poems' : 'Poem'}</h3>
            {
              content.poems.map((poem, index) => (
                <Poem key={index} poem={poem} />
              ))
            }
          </ul>
        )
      }
      {
        content.quotes && (
          <ul className={listStyle}>
            <h3 className={titleStyle}>{content.quotes.length > 1 ? 'Quotes' : 'Quote'}</h3>
            {
              content.quotes.map((quote, index) => (
                <Quote key={index} quote={quote} />
              ))
            }
          </ul>
        )
      }
    </div>
   );
}
 
export default Content;