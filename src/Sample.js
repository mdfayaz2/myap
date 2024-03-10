import React from "react";
import Feeds from "./Feeds";
import Posts from "./Posts";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function App15() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Feeds</Link> | <Link to="/posts">Post</Link>
        <Routes>
          
            <Route path="/posts" element={<Posts/>}></Route>
            <Route path="/" index element={<Feeds/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}






// import React from 'react'
// import { FaHome, FaAcquisitionsIncorporated, FaBookmark } from "react-icons/fa"; export default function App14() { return ( <div>
// <p><FaHome/>Home</p>
// <p><FaBookmark />Feeds</p>
// <p>Post</p>
// <p>Album</p>
// <FaAcquisitionsIncorporated />
// </div>
// )}

