import React from 'react'
import { Link } from "react-router-dom";

const Class = ({item}) => {
  return (
    <tr>
        <td>{item.ClassID}</td>
        <td>{item.Course}</td>
        <td>{item.Teacher}</td>
        <td>{item.Location}</td>
        <td>{item.Class_title}</td>   
        <td>{item.Class_date}</td>   
        <td>{item.Class_time}</td>   
        <td className="btn btn-outline-success p-1 m-1"><Link to={"/classes/" + item.ClassID}>Update</Link></td>
        <td className="btn btn-outline-success p-1">Delete</td>
    </tr>
  )
}

export default Class