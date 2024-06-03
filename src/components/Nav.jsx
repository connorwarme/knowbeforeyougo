const Nav = () => {
  const handleResourceClick = (e) => {

  }
  // learn how to implement submenu
  return ( 
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#resources">Resources</a></li>
        <ul>
          <li><a href="#chapter1">Chapter 1</a></li>
          <li><a href="#chapter2">Chapter 2</a></li>
          <li><a href="#chapter3">Chapter 3</a></li>
          <li><a href="#chapter4">Chapter 4</a></li>
          <li><a href="#chapter5">Chapter 5</a></li>
          <li><a href="#chapter6">Chapter 6</a></li>
          <li><a href="#chapter7">Chapter 7</a></li>
        </ul>
      </ul>
    </nav>
   );
}
 
export default Nav;