import React from 'react'
import { Link } from "react-router-dom";

const Student = ({item}) => {
  return (
    <tr>
        <td>{item.ID}</td>
        <td>{item.Name}</td>
        <td>{item.BirdDate}</td>
        <td>{item.Gender}</td>
        <td>{item.Email}</td>   
        <td>{item.PhoneNumber}</td>   
        <td>{item.Note}</td>   
        <td className="btn btn-outline-success p-1 m-1"><Link to={"/students/" + item.ID}>Update</Link></td>
        <td className="btn btn-outline-success p-1">Delete</td>
    </tr>
  )
}

export default Student