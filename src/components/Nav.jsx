/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Nav = ({ closeOverlay }) => {
  // previously passed through menu ref
  const [showResources, setShowResources] = useState(false);

  const handleResourceClick = (e) => {
    console.log(e.target)
    setShowResources(!showResources);
  }
  // thought:
  // wanting to pass menu ref through to this component
  // when user clicks on button, remove the active class and go to corresponding id (e.g. #chapter1)
  const handleNavClick = () => {
    setShowResources(false)
    closeOverlay()
  }

  // learn how to implement submenu

  // not sure this is best practice for tailwind
  const listStyle = `my-4 transition-all origin-center ${showResources ? 'block' : 'hidden'}`
  const linkAnimation = {
    0: 'animate-[translateX_150ms_ease-in-out_forwards]',
    1: 'animate-[translateX_250ms_ease-in-out_forwards]',
    2: 'animate-[translateX_350ms_ease-in-out_forwards]',
    3: 'animate-[translateX_450ms_ease-in-out_forwards]',
    4: 'animate-[translateX_550ms_ease-in-out_forwards]',
    5: 'animate-[translateX_650ms_ease-in-out_forwards]',
    6: 'animate-[translateX_750ms_ease-in-out_forwards]',
  }
  const links = Array.from({ length: 7 }, (_, i) => {
    const uniqueStyle = `${listStyle} ${linkAnimation[i]}`
    return (
      <li key={i} className={uniqueStyle}>
        <Link to={`#chapter${i + 1}`} state={{index: i + 1}} onClick={handleNavClick} className="p-4">Chapter {i + 1}</Link>
      </li>
    )
  })

  return (
    <>
      <div className="z-10 relative px-8 py-4 bg-white min-h-dvh min-w-[175px]">
        <ul>
          <li><a href="#home" className="">Home</a></li>
          <li className="relative">
            <Link to="#resources">Resources {showResources}</Link>
            <span onClick={handleResourceClick}>{showResources ? '^^^' : '|||'}</span>
            <ul className={`absolute top-full width-full left-0 z-0`}>
              {links}
            </ul>
          </li>
        </ul>
      </div>
      <div className="nav-overlay" onClick={() => closeOverlay()}></div>
    </> 

   );
}
 
export default Nav;