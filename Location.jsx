import React from 'react'
import './Location.css';

const Location = ({item}) => {
  return (
    <tr>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.class}</td>
        <td>{item.status}</td>
        <td>{item.lastView}</td>  
        <div className='delete'>
        <button className="delete-btn" type='submit'><span>x</span></button>
        </div> 
    </tr>
  )
}

export default Location