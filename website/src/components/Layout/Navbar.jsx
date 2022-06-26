import React from 'react'
import { useState } from 'react'
import {  useSelector  } from 'react-redux';
const Navbar = () => {
    
  // const currentUser = useSelector(state=>state.auth.currentUser);
     const username = localStorage.getItem("username");
    const handleToggle =()=>{
        document.getElementById('toggle').classList.toggle('show')
    }
    const handleMenu = ()=>{
        document.getElementById('main').classList.toggle('active');
        document.getElementById('menu').classList.toggle('active');
      
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
                    <div className="navbar-nav d-flex flex-row" id="account">
                          <img className="rounded-circle" src="https://avatars.githubusercontent.com/u/84139131?v=4" alt="" height="40px" width="40px"/>
                          <span className="my-auto ms-3 ">{username?username:'lcs'}</span>
                          <button className='logout btn btn-outline-success' onClick={handleLogout}>Logout</button>
                      </div>
                      
                    
                  </div>
                </div>
            </nav>
  )
}

export default Navbar