/* eslint-disable react/prop-types */
const Song = ({ song }) => {
  return ( 
    <li className="mt-2 mb-4">
    <div className="text-center">
      <p className="font-display font-bold text-lg underline">{song.title}</p>
      <p className="">{song.artist}</p>
    </div>
    <div>
      <iframe className="aspect-video" src={song.embed} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </li>
   );
}
 
export default Song;