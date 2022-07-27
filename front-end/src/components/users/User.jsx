import React from 'react'
import Users from './User.css'

const User = ({item}) => {
  return (
    <tr>
        <td>{item.name}</td>
        <td>{item.role}</td>
        <td>{item.desc}</td>
        <td>{item.enable}</td>
        <td>{item.lastAccess}</td>
        <div className='delete'>
        <button className="delete-btn" type='submit'><span>x</span></button>
        </div>
    </tr>
    
  )
}

export default User