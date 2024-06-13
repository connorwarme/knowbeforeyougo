/* eslint-disable react/prop-types */
const Song = ({ song }) => {
  return ( 
    <li className="mt-2 mb-4 sm:mb-8">
    <div className="text-center">
      <p className="font-display font-bold text-lg underline sm:m-2 lg:text-3xl">{song.title}</p>
      <p className="lg:text-xl">{song.artist}</p>
    </div>
    <div className="my-2 flex justify-center sm:my-4">
      <iframe className="aspect-video w-11/12 max-w-[100%]" src={song.embed} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </li>
   );
}
 
export default Song;