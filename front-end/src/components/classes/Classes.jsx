import React ,{ useState } from 'react'
import MainPage from '../../components/Layout/MainPage'
import { classes } from '../../data.js'
import Class from './Class'
import { Link } from "react-router-dom";

const Classes = () => {
    const [data, setData] = useState(classes);
    console.log(data);
  return (
    <MainPage>
            <div>
                <h2 className='mt-3'>Students</h2>
                <Link to="/classes/new" className="btn btn-outline-success p-1">New class</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Course</th>
                            <th scope="col">Teacher</th>
                            <th scope="col">Location</th>
                            <th scope="col">Title</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {       
                            data?.map((item, index)=> <Class key={index} item={item}/>)
                        }
                    </tbody>
                </table>
            </div>
        </MainPage>
  )
}

export default Classes