import { useState } from "react";
const Nav = () => {
  const [showResources, setShowResources] = useState(false);
  
  const handleResourceClick = (e) => {
    console.log(e.target)
    setShowResources(!showResources);
  }
  // learn how to implement submenu

  const listStyle = `m-4 transition-all origin-center ${showResources ? 'block' : 'hidden'}`
  // tried to create an array of list (li) items,
  // but couldn't get the animation to work. Don't know why. 
  // something about when those are created vs when css is built ?
  // Array.from({ length: 7 }, (_, i) => (
  //   <li key={i} className={`${listStyle} animate-[translateX_${(i + 1) * 100}ms_ease-in-out_forwards]`}>
  //     <a href={`#chapter${i + 1}`} className="p-4">Chapter {i + 1}</a>
  //   </li>
  // ))
  
  return ( 
    <nav>
      <ul>
        <li><a href="#home" className="">Home</a></li>
        <li className="relative">
          <a href="#resources">Resources {showResources}</a>
          <span onClick={handleResourceClick}>{showResources ? '^^^' : '|||'}</span>
          <ul className={`absolute top-full width-full left-0 z-0`}>
            <li className={`${listStyle} animate-[translateX_150ms_ease-in-out_forwards]`}>
              <a href="#chapter1" className="p-4">Chapter 1</a>
            </li>
            <li className={`${listStyle} animate-[translateX_150ms_ease-in-out_forwards]`}>
              <a href="#chapter2" className="p-4">Chapter 2</a>
            </li>
            <li className={`${listStyle} animate-[translateX_250ms_ease-in-out_forwards]`}>
              <a href="#chapter3" className="p-4">Chapter 3</a>
            </li>
            <li className={`${listStyle} animate-[translateX_350ms_ease-in-out_forwards]`}>
              <a href="#chapter4" className="p-4">Chapter 4</a>
            </li>
            <li className={`${listStyle} animate-[translateX_650ms_ease-in-out_forwards]`}>
              <a href="#chapter5" className="p-4">Chapter 5</a>
            </li>
            <li className={`${listStyle} animate-[translateX_750ms_ease-in-out_forwards]`}>
              <a href="#chapter6" className="p-4">Chapter 6</a>
            </li>
            <li className={`${listStyle} animate-[translateX_850ms_ease-in-out_forwards]`}>
              <a href="#chapter7" className="p-4">Chapter 7</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
   );
}
 
export default Nav;