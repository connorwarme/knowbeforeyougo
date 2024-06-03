import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { RxHamburgerMenu } from "react-icons/rx";
// idea is that when the page initially loads, there is the original view of header
// as the user scrolls, header transitions (smaller title, hamburger menu, etc. )
// need to figure out performant way to do this

const Header = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const menu = useRef()

  // likely need to create a new version for the desktop view
  const handleClick = () => {
    menu.current.classList.add('nav-active')
  }
  const handleOverlay = () => {
    // need to add a delay to allow the menu to transition out
    // also, it wouldn't work without the setTimeout :/
    setTimeout(() => {
      menu.current.classList.remove('nav-active')
    }, 150)
  }
  return (
    <>
      <header className="font-bold font-display">
        <div ref={ref} id='top'></div>
        <div className='fixed top-0 left-0 w-dvw'>
          <div className={`flex items-center p-4 transition-all h-[84px] ${inView ? 'bg-transparent' : 'bg-deep'}`}>
            <div className={`spacer transition-all ${inView ? 'grow' : 'width-0'}`}></div>
            <a href="#top" className='flex justify-center items-center'>
              <h1 className={`font-extrabold transition-all duration-300 ${inView ? 'text-3xl' : 'text-xl translate-x-0'}`}>Departing Life</h1>
            </a>
            <div className="spacer grow"></div>
            <div className={`p-1 rounded-sm h-fit relative hover:cursor-pointer hover:shadow-md active:shadow-none active:left-[1px] active:top-[2px] ${inView ? 'hidden' : 'block'} md-2 z-20`} onClick={() => handleClick()} ref={menu}>
              <RxHamburgerMenu className='h-8 w-8 lg:hidden' />
              <div className='nav-overlay' onClick={() => handleOverlay()}></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
