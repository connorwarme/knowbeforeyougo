import { useState } from "react";
const Nav = () => {
  const [showResources, setShowResources] = useState(false);
  
  const handleResourceClick = (e) => {
    console.log(e.target)
    setShowResources(!showResources);
  }
  // learn how to implement submenu

  const listStyle = `m-4 transition-all origin-center ${showResources ? 'block' : 'hidden'}`
  return ( 
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li className="relative">
          <a href="#resources">Resources {showResources}</a>
          <span onClick={handleResourceClick}>{showResources ? '^^^' : '|||'}</span>
          <ul className={`absolute top-full width-full left-0 z-0`}>
            {
              Array.from({ length: 7 }, (_, i) => (
                <li key={i} className={`${listStyle} animate-[translateX_${(i + 1) * 100}ms_ease-in-out_forwards]`}>
                  <a href={`#chapter${i + 1}`} className="p-4">Chapter {i + 1}</a>
                </li>
              ))
            }
          </ul>
        </li>
      </ul>
    </nav>
   );
}
 
export default Nav;