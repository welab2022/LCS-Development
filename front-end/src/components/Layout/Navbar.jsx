import React from 'react'
import { useState } from 'react';
import {  useSelector  } from 'react-redux';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    
    const currentUser = useSelector(state=>state.auth.currentUser);
    const username = localStorage.getItem("username");
    const handleToggle =()=>{
        document.getElementById('toggle').classList.toggle('show')
    }
    const handleMain = ()=>{
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
    <div className='navbar-expand-lg md-3'>
    <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <div className='button'>
                  <button className="btn active" onClick={handleMain} ><i class="fas fa-bars"></i></button>
                    </div>
                  <div className="collapse navbar-collapse" >
                    <ul className="navbar-menu" onClick={handleToggle} id='menu'>
                      
                      <li className="nav-item dropdown" >
                        <div className=" dropdown-toggle" >
                            --------
                        </div>
                        <ul id='toggle' className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a className="dropdown-item" href="#">Students</a></li>
                          <li><a className="dropdown-item" href="#">Courses</a></li>
                         
                        </ul>
                      </li>
                      
                    </ul>
                    <div className='search-container lg-3'>
                      <form action='#' method='get' className='search-bar'>
                        <input type="text" placeholder="Search for Enrollments, Courses, Students, etc" />
                        <button className="btn" type="submit"><i class="fas fa-search"></i></button>
                    </form></div>
                    <div className="navbar-nav me-3 mb-2 mb-lg-0 mr-lg-3">
                        
                    </div>
                      <div onClick={togleMyaccount} className="navbar-nav d-flex flex-row" id="account">
                        <li className='bell'><i class="fas fa-bell"></i></li>
                          <div className='dropdown'>
                            <img className="rounded-circle" style={{cursor: 'pointer'}} src="https://avatars.githubusercontent.com/u/84139131?v=4" alt="" height="55px" width="55px"/>
                            <div className='dropdown-content' >
                              <Link to="/myaccount"><a href='#' onClick={togleMyaccount}> My Account</a></Link>
                              <a href='#' onClick={handleLogout}>Create a Team</a>
                              <a href='#' onClick={handleLogout}>Log out</a>
                            </div> </div>
                            <div>
                            <p className="my-auto ms-3 "  style={{fontWeight: "bold", textAlign:"center"}}>{currentUser?currentUser.name:'Learning Center System'}</p>
                            <p className="my-auto ms-3 " style={{textAlign:"center"}}>{currentUser?currentUser.email:'LCS@gmail.com'}</p>
                            </div>                   
                      </div>
                    </div>
                   </div>
</nav>
</div>     
  )
}
export default Navbar
