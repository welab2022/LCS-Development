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
        {children}
      </div>
    </div>
  )
}
export default MainPage