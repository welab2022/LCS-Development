import React from 'react'
import {  useSelector  } from 'react-redux';
import { Link } from "react-router-dom";
const Navbar = () => {
    
    const currentUser = useSelector(state=>state.auth.currentUser);
  
    const handleToggle =()=>{
        document.getElementById('toggle').classList.toggle('show')
    }
    const handleMenu = ()=>{
        document.getElementById('main').classList.toggle('active');
        document.getElementById('menu').classList.toggle('active');
      
    }
    const togleMyaccount = ()=>{
      document.getElementById('account-menu').classList.toggle('active-display');
    }
    const handleLogout = ()=>{
      localStorage.clear();
      window.location.replace("/login");
    }
  return (
    <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                  <button className="btn btn-outline-success" onClick={handleMenu}>Menu</button>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" onClick={handleToggle}>
                      
                      <li className="nav-item dropdown" >
                        <div className=" dropdown-toggle" >
                         -----
                        </div>
                        <ul id='toggle' className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a className="dropdown-item" href="#">Students</a></li>
                          <li><a className="dropdown-item" href="#">Courses</a></li>
                         
                        </ul>
                      </li>
                      
                    </ul>
                    <form className="d-flex  me-auto w-50" role="search">
                        
                      <input className="form-control w-50" type="search" placeholder="Search for Enrollments, Courses, Students, etc" aria-label="Search"/>
                      <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div className="navbar-nav me-3 mb-2 mb-lg-0 mr-lg-3">
                        
                    </div>
                    <div className="position-relative" style={{cursor: 'pointer'}} >
                      <div onClick={togleMyaccount} className="navbar-nav d-flex flex-row" id="account">
                            <img className="rounded-circle" src="https://avatars.githubusercontent.com/u/84139131?v=4" alt="" height="40px" width="40px"/>
                            <div  >
                            <p className="my-auto ms-3 "  style={{fontWeight: "bold"}}>{currentUser?currentUser.name:'Learning Center System'}</p>
                            <p className="my-auto ms-3 ">{currentUser?currentUser.email:'lcs@gmail.com'}</p>
                            </div>                       
                      </div>
                      <div id="account-menu" className="list-group list-group-flush my-account-dropdown">
                      <Link style={{ textDecoration: 'none' }} to="/myaccount"><span className="list-group-item p-3 my-account-dropdown-item">My account</span></Link>
                        <span className="list-group-item p-3 my-account-dropdown-item" onClick={handleLogout}>Sign out</span>
                      </div>
                    </div>
                      
                    
                  </div>
                </div>
            </nav>
  )
}

export default Navbar