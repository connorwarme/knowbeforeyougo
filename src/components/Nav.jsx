import { useState } from "react";
const Nav = () => {
  const [showResources, setShowResources] = useState(false);
  
  const handleResourceClick = (e) => {
    setShowResources(!showResources);
  }
  // learn how to implement submenu

  const listStyle = `transition-all origin-center ${showResources ? 'block' : 'hidden'}`
  return ( 
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li className="relative">
          <a href="#resources">Resources {showResources}</a>
          <span onClick={handleResourceClick}>{showResources ? '^^^' : '|||'}</span>
          <ul className={`absolute top-full width-full left-0 z-0`}>
            <li className={`${listStyle} animate-[translateX_100ms_ease-in-out_forwards]`}><a href="#chapter1" className="p-2">Chapter 1</a></li>
            <li className={`${listStyle} animate-[translateX_200ms_ease-in-out_forwards]`}><a href="#chapter2">Chapter 2</a></li>
            <li className={`${listStyle} animate-[translateX_300ms_ease-in-out_forwards]`}><a href="#chapter3">Chapter 3</a></li>
            <li className={`${listStyle} animate-[translateX_400ms_ease-in-out_forwards]`}><a href="#chapter4">Chapter 4</a></li>
            <li className={`${listStyle} animate-[translateX_500ms_ease-in-out_forwards]`}><a href="#chapter5">Chapter 5</a></li>
            <li className={`${listStyle} animate-[translateX_600ms_ease-in-out_forwards]`}><a href="#chapter6">Chapter 6</a></li>
            <li className={`${listStyle} animate-[translateX_700ms_ease-in-out_forwards]`}><a href="#chapter7">Chapter 7</a></li>
          </ul>
        </li>
      </ul>
    </nav>
   );
}
 
export default Nav;