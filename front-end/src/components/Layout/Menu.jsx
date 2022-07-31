import { Link } from "react-router-dom";
import React from 'react';
import './menu.css';

const Menu = () => {
  return (
    <div id="menu" className="menu">
            <div className="sidebar-header">
              <div className="sidebar-logo-container">
              <h2>  <i class="fas fa-users"></i> LCS </h2>
            </div>
            <div className="sidebar-body">
              <ul className="navigation-list" >                 
                <li className="navigation-list-item">
                  <a className="navigation-link" href='/locations'>
                    <div className="row">
                      <div className="col-2">
                        <i class="fas fa-location-arrow"></i> 
                          </div>
                            <div className="col-9">
                              Locations
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className="navigation-list-item">
                  <a className="navigation-link" href='/enrollments'>
                    <div className="row">
                      <div className="col-2">
                        <i class="fas fa-file-signature"></i>
                          </div>
                            <div className="col-9">
                              Enrollments
                                </div>
                              </div>
                            </a>
                          </li>
                <li className="navigation-list-item">
                  <a className="navigation-link" href='/courses'>
                    <div className="row">
                      <div className="col-2">
                        <i class="fas fa-chalkboard"></i> 
                          </div>
                            <div className="col-9">
                              Courses
                                </div>
                              </div>
                            </a>
                          </li>
                <li className="navigation-list-item">
                  <a className="navigation-link" href='/students'>
                    <div className="row">
                      <div className="col-2">
                        <i class="fas fa-user-graduate"></i> 
                          </div>
                            <div className="col-9">
                              Students
                                </div>
                              </div>
                            </a>
                          </li>
                <li className="navigation-list-item">
                  <a className="navigation-link" href='/kitas'>
                    <div className="row">
                      <div className="col-2">
                      <i class="fas fa-certificate"></i> 
                          </div>
                            <div className="col-9">
                              Kitas
                                </div>
                              </div>
                            </a>
                          </li>
               <li className="navigation-list-item">
                  <a className="navigation-link" href='/equipments'>
                    <div className="row">
                      <div className="col-2">
                        <i class="fas fa-tools"></i> 
                          </div>
                            <div className="col-9">
                              Equipments
                                </div>
                              </div>
                            </a>
                          </li>
                <li className="navigation-list-item">
                  <a className="navigation-link" href='/classes'>
                    <div className="row">
                      <div className="col-2">
                      <i class="fas fa-chalkboard-teacher"></i> 
                          </div>
                            <div className="col-9">
                              Classes
                                </div>
                              </div>
                            </a>
                          </li>  
                <li className="navigation-list-item">
                  <a className="navigation-link" href='/users'>
                    <div className="row">
                      <div className="col-2">
                        <i class="fas fa-user-edit"></i>
                          </div>
                            <div className="col-9">
                              Users
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>  
                      <hr></hr>
                    </div>
                  </div>
                </div>
  )
}

export default Menu