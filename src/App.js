import "./App.css";
import Navbar from "./components/Navbar.js";
import Login from "./components/Login.js";
import About from "./components/About.js";
import Signup from "./components/Signup.js";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Fetch from "./context/Fetch.js"
function App() {
  
  return (
    <>
    {/* <Fetch/> */}
    <Router>
      <Navbar />
        <Routes>
          <Route element={<Fetch />} path="/"></Route>
          <Route element={<About />} path="/about"></Route>
          <Route element={<Login/>} path="/login"></Route>
          <Route element={<Signup/>} path="/signup"></Route>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
