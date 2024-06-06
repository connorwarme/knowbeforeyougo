/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
const Nav = ({ display, setDisplay }) => {
  // previously passed through menu ref
  const [showResources, setShowResources] = useState(false);
  const [displayNav, setDisplayNav] = useState(null)

  useEffect(() => {
    console.log('display changed', display)
    setDisplayNav(display)
  }, [display])
  
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

  // thought:
  // wanting to pass menu ref through to this component
  // when user clicks on button, remove the active class and go to corresponding id (e.g. #chapter1)
  const handleNavClick = () => {
    setShowResources(false)
    // menu.current.classList.remove('nav-active')
    setDisplay(false)
    console.log('remove nav-active class too')
    delay()
  }
  const delay = () => {
    setTimeout(() => {
      console.log(display)
    }, 500)
  }

  return ( 
    <nav className={`z-20 ${displayNav ? 'block' : 'hidden'}`}>
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
    </nav>
   );
}
 
export default Nav;