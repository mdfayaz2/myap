import React from 'react'

const Header = () => { const myStyle = { color: "red",
backgroundColor: "Blue", padding: "12px", fontFamily: "Sans-Serif"
};
return (
<>
<h1 style={myStyle}>Hello World!</h1>
<p>Heading</p>
</>
); }
//  function Header() {
//   return (
//     <>
//     <div></div>
//     </>
//   )
// }
export default Header;