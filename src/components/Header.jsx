import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { RxHamburgerMenu } from "react-icons/rx";
import Nav from './Nav';
// idea is that when the page initially loads, there is the original view of header
// as the user scrolls, header transitions (smaller title, hamburger menu, etc. )
// need to figure out performant way to do this

const Header = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const [displayNav, setDisplayNav] = useState(false)

  const menu = useRef()

  // likely need to create a new version for the desktop view
  const handleClick = () => {
    // menu.current.classList.add('nav-active')
    setDisplayNav(true)
  }
  const handleOverlay = () => {
    // need to add a delay to allow the menu to transition out
    // also, it wouldn't work without the setTimeout :/
    setDisplayNav(false) 
    setTimeout(() => {
      // menu.current.classList.remove('nav-active')
      console.log(displayNav)
    }, 150)
    console.log('handleOverlay clicked')
  }
  const overlayStyle = 'fixed -top-[1px] right-0 w-0 h-[1px] bg-black/65 blur-sm opacity-0 invisible transition-all duration-300'
  const overlayActiveStyle = 'fixed h-dvh w-dvw top-0 right-0 bg-black/65 blur-sm opacity-1 z-10 visible transition-all duration-300'
  return (
    <>
      <header className="font-bold font-display">
        <div ref={ref} id='top' className={''}></div>
        <div className='fixed top-0 left-0 w-dvw'>
          <div className={`flex items-center p-4 transition-all h-[84px] ${inView ? 'bg-transparent' : 'bg-deep'}`}>
            <div className={`spacer transition-all ${inView ? 'grow' : 'width-0'}`}></div>
            <a href="#top" className='flex justify-center items-center'>
              <h1 className={`font-extrabold transition-all duration-300 ${inView ? 'text-3xl' : 'text-xl translate-x-0'}`}>Departing Life</h1>
            </a>
            <div className="spacer grow"></div>
            <div className={`p-1 rounded-sm h-fit relative hover:cursor-pointer hover:shadow-md active:shadow-none active:left-[1px] active:top-[2px] ${inView ? 'hidden' : 'block'} md-2 z-20`} onClick={() => handleClick()} ref={menu}>
              <RxHamburgerMenu className='h-8 w-8 lg:hidden' />
              <div className={`${displayNav ? overlayActiveStyle : overlayStyle}`} onClick={() => handleOverlay()}></div>
              <Nav display={displayNav} setDisplay={() => handleOverlay()} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
