/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
const Nav = ({ closeOverlay }) => {
  // previously passed through menu ref
  const [showResources, setShowResources] = useState(false);

  const handleResourceClick = (e) => {
    console.log(e.target)
    setShowResources(!showResources);
  }
  // learn how to implement submenu

  const listStyle = `my-4 transition-all origin-center ${showResources ? 'block' : 'hidden'}`
  // tried to create an array of list (li) items,
  // but couldn't get the animation to work. Don't know why. 
  // something about when those are created vs when css is built ?
  // Array.from({ length: 7 }, (_, i) => (
  //   <li key={i} className={`${listStyle} animate-[translateX_${(i + 1) * 100}ms_ease-in-out_forwards]`}>
  //     <a href={`#chapter${i + 1}`} className="p-4">Chapter {i + 1}</a>
  //   </li>
  // ))

  const ref = null
  // thought:
  // wanting to pass menu ref through to this component
  // when user clicks on button, remove the active class and go to corresponding id (e.g. #chapter1)
  const handleNavClick = () => {
    setShowResources(false)
    closeOverlay(ref)
    console.log('remove nav-active class too')
  }

  return (
    <>
      <div className="z-10 relative px-8 py-4 bg-white min-h-dvh min-w-[175px]">
        <ul>
          <li><a href="#home" className="">Home</a></li>
          <li className="relative">
            <a href="#resources">Resources {showResources}</a>
            <span onClick={handleResourceClick}>{showResources ? '^^^' : '|||'}</span>
            <ul className={`absolute top-full width-full left-0 z-0`}>
              <button onClick={handleNavClick}>
                <a href="#chapter1">Chapter 11</a>
              </button>
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
      </div>
      <div className="nav-overlay" onClick={() => closeOverlay(ref)}></div>
    </> 

   );
}
 
export default Nav;