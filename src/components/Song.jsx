/* eslint-disable react/prop-types */
const Song = ({ song }) => {
  return ( 
    <li className="mt-2 mb-4">
    <div className="text-center">
      <p className="font-display font-bold text-lg underline">{song.title}</p>
      <p className="">{song.artist}</p>
    </div>
    <div className="my-2 flex justify-center">
      <iframe className="aspect-video w-96 max-w-[100%]" src={song.embed} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </li>
   );
}
 
export default Song;