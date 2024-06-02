import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { RxHamburgerMenu } from "react-icons/rx";
// idea is that when the page initially loads, there is the original view of header
// as the user scrolls, header transitions (smaller title, hamburger menu, etc. )
// need to figure out performant way to do this

const Header = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });


  return (
    <>
      <header className="font-bold font-display">
        <div ref={ref}></div>
        <div className='fixed top-0 left-0 w-dvw h-10'>
          <div className={`flex p-6 ${inView ? 'bg-transparent' : 'bg-offwhite'}`}>
            <div className={ inView ? 'spacer grow transition-all duration-500' : 'spacer width-0 transition-all duration-500'}></div>
            <h1 className={ inView ? 'text-3xl font-extrabold transition-all duration-500' : 'text-xl -translate-x-0'}>Departing Life</h1>
            <div className="spacer grow"></div>
            <div className={ inView ? 'hidden' : 'block'}>DL</div>
          </div>
        </div>

      </header>
    </>
  );
};

export default Header;
