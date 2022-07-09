import { Link } from "react-router-dom";
import React from 'react';
import './menu.css';

const Menu = () => {
  return (
    <div id="menu" className=" bg-white menu">
            <div className="sidebar-heading border-bottom bg-light">
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/"><h2>LCS</h2></Link>
            </div>
            <div className="list-group  ">
                <Link style={{ textDecoration: 'none' }} to="/locations"><b className="list-group-item p-3"> Locations</b> </Link>
                <Link style={{ textDecoration: 'none' }} to="/enrollments"><b className="list-group-item p-3" > Enrollments</b></Link>
                <Link style={{ textDecoration: 'none' }} to="/users"><b className="list-group-item p-3">Courses</b></Link>
                <Link style={{ textDecoration: 'none' }} to="/users"><b className="list-group-item p-3" >Students</b></Link>
                <Link style={{ textDecoration: 'none' }} to="/users"><b className="list-group-item p-3" >Timetables</b></Link>
                <Link style={{ textDecoration: 'none' }} to="/users"><b className="list-group-item p-3">Timesheets</b></Link>
                <Link style={{ textDecoration: 'none' }} to="/users"><b className="list-group-item p-3" >Kitas</b></Link>
                <Link style={{ textDecoration: 'none' }} to="/users"><b className="list-group-item p-3">Equipments</b></Link>
                <Link style={{ textDecoration: 'none' }} to="/users"><b className="list-group-item p-3">Classes</b></Link>
                <Link style={{ textDecoration: 'none' }} to="/users"><b className="list-group-item p-3">Users</b></Link> 
             
            </div>
        </div>
  )
}

export default Menu