import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { RxHamburgerMenu } from "react-icons/rx";
import Nav from "./Nav";
// idea is that when the page initially loads, there is the original view of header
// as the user scrolls, header transitions (smaller title, hamburger menu, etc. )
// need to figure out performant way to do this

const Header = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const navRef = useRef();

  // likely need to create a new version for the desktop view
  const handleClick = () => {
    navRef.current.classList.add("nav-active");
  };
  const handleOverlay = () => {
    // need to add a delay to allow the menu to transition out
    // also, it wouldn't work without the setTimeout :/
    setTimeout(() => {
      navRef.current.classList.remove("nav-active");
    }, 150);
  };
  const closeOverlay = () => {
    // thinking:
    // this is the funcation that gets passed to the Nav component
    // when the user clicks on a link, the overlay should close
    handleOverlay();
  };
  const overlayStyle =
    "fixed -top-[1px] right-0 w-0 h-[1px] bg-black/65 blur-sm opacity-0 invisible transition-all duration-300";
  const overlayActiveStyle =
    "fixed h-dvh w-dvw top-0 right-0 bg-black/65 blur-sm opacity-1 z-10 visible transition-all duration-300";

  // header div style, depending on view
  const headerBgColor =
    "flex items-center p-4 transition-all h-[84px] bg-transparent sm:h-[100px]";
  const headerBgColorDeep =
    "flex items-center p-4 transition-all h-[84px] bg-deep sm:h-[100px] sm:px-6 md:px-8 lg:px-20";
  // spacer style, depending on view
  const spacerStyleNarrow = "spacer transition-all width-0";
  const spacerStyleWide = "spacer transition-all grow";
  // title style, depending on view
  const titleStyleNarrow =
    "font-extrabold transition-all duration-300 text-xl sm:text-2xl translate-x-0 md:text-4xl";
  const titleStyleWide =
    "font-extrabold transition-all duration-300 text-3xl sm:text-4xl md:text-6xl";
  // hamburger menu style, depending on view
  const hamburgerStyleHidden =
    "p-1 rounded-sm h-fit relative hover:cursor-pointer hover:shadow-md active:shadow-none active:left-[1px] active:top-[2px] hidden md-2 z-20";
  const hamburgerStyleVisible =
    "p-1 rounded-sm lg:rounded-md h-fit relative hover:cursor-pointer hover:shadow-md active:shadow-none active:left-[1px] active:top-[2px] block md-2 z-20";

  return (
    <>
      <header className="font-bold font-display relative z-10">
        <div id="top" ref={ref}></div>
        <div className="fixed top-0 left-0 w-dvw">
          <div className={inView ? headerBgColor : headerBgColorDeep}>
            <div className={inView ? spacerStyleWide : spacerStyleNarrow}></div>
            <a href="#top" className="flex justify-center items-center">
              <h1 className={inView ? titleStyleWide : titleStyleNarrow}>
                Departing Life
              </h1>
            </a>
            <div className="spacer grow"></div>
            <button
              className={inView ? hamburgerStyleHidden : hamburgerStyleVisible}
              onClick={() => handleClick()}
              alt="Navigation menu"
            >
              <RxHamburgerMenu className="h-8 w-8 md:h-12 md:w-12" />
            </button>
          </div>
        </div>
        <nav ref={navRef} className="z-20">
          <Nav closeOverlay={closeOverlay} />
        </nav>
      </header>
    </>
  );
};

export default Header;
