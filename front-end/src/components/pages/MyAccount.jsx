import React, { useState } from 'react'
import Menu from '../Layout/Menu'
import './myAccount.css'
import { Link } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';

const MyAccount = () => {
  let navigate = useNavigate();
  const [tab, setTab] = useState(true);
  // const currentUser = useSelector(state=>state.auth.currentUser);
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("username");
  const handleMenu = ()=>{
    document.getElementById('main').classList.toggle('active');
    document.getElementById('menu').classList.toggle('active');
  
    }
    const togleMyaccount = ()=>{
      document.getElementById('account-menu').classList.toggle('active-display');
    }
    const handleLogout = ()=>{
      localStorage.clear();
      return navigate("/login");
    }
    const profileHandle =()=>{
      setTab(true)
    }
    const activeHandle =()=>{
      setTab(false)
    }
    
  return (
    <div className='mainpage'>
    <Menu></Menu>
    <div id='main' className='main'>
      <nav className="navbar navbar-expand-sm bg-light ">
                  <div className="container-fluid d-flex justify-content-between">
                    <button className="btn btn-outline-success" onClick={handleMenu}>Menu</button>
                    <div className="position-relative " style={{cursor: 'pointer'}} >
                      <div onClick={togleMyaccount} className="navbar-nav d-flex flex-row" id="account">
                            <img className="rounded-circle" src="https://avatars.githubusercontent.com/u/84139131?v=4" alt="" height="40px" width="40px"/>
                            <div  >
                            <p className="my-auto ms-3 "  style={{fontWeight: "bold"}}>{username?username:'Learning Center System'}</p>
                            <p className="my-auto ms-3 ">{email?email:'lcs@gmail.com'}</p>
                            </div>                      
                      </div>
                      <div id="account-menu" className="list-group list-group-flush my-account-dropdown">
                      <Link style={{ textDecoration: 'none' }} to="/myaccount"><span className="list-group-item p-3 my-account-dropdown-item">My account</span></Link>
                        <span className="list-group-item p-3 my-account-dropdown-item" onClick={handleLogout}>Sign out</span>
                      </div>
                    </div>
                  </div>
      </nav>
      <div className="my-account">
        <div className='avatar-box d-flex flex-row'>
          <img className="rounded-circle" src="https://avatars.githubusercontent.com/u/84139131?v=4" alt="" height="150px" width="150px"/>
          <div className='name-box'>
            <h2 className="my-auto  ">{username?username:'Learning Center System'}</h2>
            <span>Member since 2022</span>
          </div>

        </div>
      <div className="account-content">
        <span className='account-tab' style={tab?{fontWeight: "bold"}:{}} onClick={profileHandle}>Profile</span>
        <span className='account-tab'style={!tab?{fontWeight: "bold"}:{}} onClick={activeHandle}>Active</span>
        <hr />
        {tab?<div className="profile">
              <table className='table'>
                        <tbody>
                        <tr>
                              <td><b>Name</b></td>
                              <td>Uy Vu Phan</td>
                              <td><td className="btn btn-outline-success p-0">Change</td></td>
                          </tr> 
                          <tr>
                              <td><b>Email</b></td>
                              <td>abc@gmail.com</td>
                              
                          </tr>
                          <tr>
                              <td><b>Password</b></td>
                              <td>**************</td>
                              <td><td className="btn btn-outline-success p-0">Reset password</td></td>
                          </tr>   
                        </tbody>
                    </table>
            </div>:
          <div className="active"></div>
          }
          </div>
      </div>
      
    </div>
    
  </div>
  )
}

export default MyAccount