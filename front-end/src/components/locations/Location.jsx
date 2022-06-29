import React from 'react'

const Location = ({item}) => {
  return (
    <tr>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.class}</td>
        <td>{item.status}</td>
        <td>{item.lastView}</td>   
        <td className="btn btn-outline-success p-0">Delete</td>
    </tr>
  )
}

export default Location