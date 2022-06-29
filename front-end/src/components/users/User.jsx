import React from 'react'

const User = ({item}) => {
  return (
    <tr>
        <td>{item.name}</td>
        <td>{item.role}</td>
        <td>{item.desc}</td>
        <td>{item.enable}</td>
        <td>{item.lastAccess}</td>
        <td class="btn btn-outline-success p-0">Delete</td>
    </tr>
    
  )
}

export default User