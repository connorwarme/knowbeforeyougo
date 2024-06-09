/* eslint-disable react/prop-types */
import Verse from "./Verse";
const Content = ({ content }) => {
  return ( 
    <div className="cardContent">
      {
        content.verses && (
          <ul className="list-none">
            <h3 className="font-display font-semibold text-lg">Verses</h3>
            {
              content.verses.map((verse, index) => (
                <Verse key={index} verse={verse} />
              ))
            }
          </ul>
        )
      }
    </div>
   );
}
 
export default Content;