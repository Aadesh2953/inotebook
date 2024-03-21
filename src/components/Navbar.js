import {  Link,useLocation } from "react-router-dom";
import {React} from 'react'
import { useNavigate } from "react-router-dom";
export default function Navbar()
{
  const navigate=useNavigate()
 const location=useLocation()
 const logout=()=>
 {
    localStorage.removeItem('token')
    navigate('/login')
 }
  // useEffect(()=>
  // {
  //   // console.log(location)
  // },[location])
    return(
        <>
    <nav className="navbar navbar-dark navbar-expand-lg  bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
        </li>
        <li className="nav-item">
        {!localStorage.getItem('token')?<form>
        <li className="nav-item">
          <div>
        <Link to="/login"  className={`nav-link ${location.pathname==="/login"?"active":""}`}>Login</Link>
        </div>
        </li>
        <li className="nav-item">
          <div>
        <Link to="/signup"  className={`nav-link ${location.pathname==="/signup"?"active":""}`}>signup</Link> 
        </div>
        </li>
        </form>:<button className="btn btn-primary" onClick={logout}>Logout</button>
        }
        
        </li>
         
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
    </nav>
  </>
  );
}