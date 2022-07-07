import React from 'react'
import Menu from './Menu'
import Navbar from './Navbar'
import "./mainpage.css"
const MainPage = ({children}) => {
  return (
    <div className='mainpage'>
      <Menu></Menu>
      <div id='main' className='main'>
        <Navbar/>
        <div className="p-5">
          {children}
        </div>
        
      </div>
      
    </div>
  )
}
export default MainPage