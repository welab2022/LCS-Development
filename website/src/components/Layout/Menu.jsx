import { Link } from "react-router-dom";
import React from 'react';
import './menu.css';

const Menu = () => {
  return (
    <div id="menu" className=" bg-white menu">
            <div className="sidebar-heading border-bottom bg-light">
              <h2>LCS</h2>
            </div>
            <div className="list-group list-group-flush">
                <a href='/locations'className="list-group-item list-group-item-action list-group-item-light p-3" >
                  
                  <b>Locations</b>
                </a>
                <a href='enrollments' className="list-group-item list-group-item-action list-group-item-light p-3" >
                  
                  <b>Enrollments</b></a>
                <a className="list-group-item list-group-item-action list-group-item-light p-3">
                                    <b>Courses</b></a>
                <a  className="list-group-item list-group-item-action list-group-item-light p-3" >
                  
                  <b>Students</b></a>
                <a  className="list-group-item list-group-item-action list-group-item-light p-3" >
                  
                  <b>Timetables</b></a>
                <a  className="list-group-item list-group-item-action list-group-item-light p-3" ><b>Kitas</b></a>
                <a  className="list-group-item list-group-item-action list-group-item-light p-3"><b>Timesheets</b></a>
                <a  className="list-group-item list-group-item-action list-group-item-light p-3"><b>Equipments</b></a>
                <a  className="list-group-item list-group-item-action list-group-item-light p-3"><b>Classes</b></a>
               <Link to="users"><b  className="list-group-item list-group-item-action list-group-item-light p-3">Users</b></Link> 
             
            </div>
        </div>
  )
}

export default Menu