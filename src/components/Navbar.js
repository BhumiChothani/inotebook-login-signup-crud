import React, {useEffect} from 'react'
import {Link, useLocation} from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
 // const navigate = useNavigate();
  useEffect(() => {
   // console.log(location.pathname);
  }, [location]);

  const handleLogOut = ()=>{
   // navigate('/login');
  }

 return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">inotebook</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link className={`nav-link ${location.pathname==='/'?"active":""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className={`nav-link ${location.pathname==='/about'?"active":""}`} to="/about">About</Link>
            </li> 
        </ul>
        {!localStorage.getItem('token')?<div className="container-fluid d-flex justify-content-end">
          <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
          <Link className="btn btn-primary mx-1" to="/signup" role="button">Sign Up</Link>
        </div>:<button className="btn btn-primary" onClick={handleLogOut} >LogOut</button>}
      </div>
            
    </div>
  </nav>
 )
}
