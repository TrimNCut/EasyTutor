import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";

export default function App() {
  return(
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
    </>
  )
};
