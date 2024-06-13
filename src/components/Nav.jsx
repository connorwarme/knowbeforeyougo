/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdExpandMore as Expand } from "react-icons/md";
const Nav = ({ closeOverlay }) => {
  // previously passed through menu ref
  const [showResources, setShowResources] = useState(false);
  const [showTopics, setShowTopics] = useState(false);

  const handleResourceClick = () => {
    setShowResources(!showResources);
    setShowTopics(false)
  }
  const handleTopicClick = () => {
    setShowTopics(!showTopics);
    setShowResources(false)
  }
  // thought:
  // wanting to pass menu ref through to this component
  // when user clicks on button, remove the active class and go to corresponding id (e.g. #chapter1)
  const handleNavClick = () => {
    setShowResources(false)
    setShowTopics(false)
    closeOverlay()
  }
  const handleOverlayClick = () => {
    closeOverlay()
    setTimeout(() => {
      // otherwise you start to see the menu transition out
      setShowResources(false)
      setShowTopics(false)
    }, 150)
  }

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
  const chapterLinks = Array.from({ length: 7 }, (_, i) => {
    const uniqueStyle = `${listStyle} ${linkAnimation[i]}`
    return (
      <li key={i} className={uniqueStyle}>
        <Link to={`#chapter${i + 1}`} state={{index: i + 1}} onClick={handleNavClick} className="p-4">Chapter {i + 1}</Link>
      </li>
    )
  })
  const topicLinkStyle = `my-4 transition-all origin-center ${showTopics ? 'block' : 'hidden'}`
  const topics = ['Aging', 'Death', 'Heaven', 'Suffering', 'Trials', 'Scripture']
  const topicLinks = topics.map((topic, i) => {
    const uniqueStyle = `${topicLinkStyle} ${linkAnimation[i]}`
    const lowercase = topic.charAt(0).toLowerCase() + topic.slice(1)
    return (
      <li key={i} className={uniqueStyle}>
        <Link to={`#${lowercase}`} state={{index: i + chapterLinks.length + 1}} onClick={handleNavClick} className="p-4">{topic}</Link>
      </li>
    )
  })

  // expand style, depending on view
  const expandStyle = 'h-6 w-6 transition-all duration-300'
  const expandStyleRotate = 'h-6 w-6 rotate-180 transition-all duration-300'

  return (
    <>
      <div className="z-10 relative px-8 md:px-12 py-4 bg-offwhite min-h-dvh min-w-[200px] md:min-w-[350px] animate-[translateX_350ms_ease-in-out_forwards]">
        <ul className="mt-[30%] *:my-4 h-auto transition-all duration-300 md:text-xl">
          <li><Link to="/" className="" onClick={handleNavClick}>Home</Link></li>
          <li className="relative">
            <div className="flex items-center justify-between">
              <Link to="#resources" className="relative flex items-center" onClick={handleNavClick}>Resources</Link>
              <button onClick={handleResourceClick} className="ml-auto" title="Resource links">
                <Expand className={showResources ? expandStyleRotate : expandStyle} title={showResources ? 'Minimize' : 'Expand'} alt={`${showResources ? 'Minimize' : 'Expand'} the chapter links`} />
              </button>
            </div>
            <ul className={`top-full width-full left-0 z-0 font-semibold text-sm md:text-lg`}>
              {chapterLinks}
            </ul>
          </li>
          <li className="relative">
            <div className="flex items-center justify-between">
              <Link to="#topics" className="relative flex items-center" onClick={handleNavClick}>Topics</Link>
              <button onClick={handleTopicClick} className="ml-auto" title="Resource links">
                <Expand className={showTopics ? expandStyleRotate : expandStyle} title={showTopics ? 'Minimize' : 'Expand'} alt={`${showTopics ? 'Minimize' : 'Expand'} the topic links`} />
              </button>
            </div>
            <ul className={`top-full width-full left-0 z-0 font-semibold text-sm md:text-lg`}>
              {topicLinks}
            </ul>
          </li>
          <li><Link to="#contact" onClick={handleNavClick}>Contact</Link></li>
        </ul>
      </div>
      <div className="nav-overlay" onClick={() => handleOverlayClick()}></div>
    </> 

   );
}
 
export default Nav;