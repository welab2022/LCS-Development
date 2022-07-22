import React ,{ useState } from 'react'
import MainPage from '../../components/Layout/MainPage'
import { students } from '../../data.js'
import Student from './Student'
import { Link } from "react-router-dom";

const Students = () => {
    const [data, setData] = useState(students);
    console.log(data);
  return (
    <MainPage>
            <div>
                <h2 className='mt-3'>Students</h2>
                <Link to="/students/new" className="btn btn-outline-success p-1">New student</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date of birth</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Note</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {       
                            data?.map((item, index)=> <Student key={index} item={item}/>)
                        }
                    </tbody>
                </table>
            </div>
        </MainPage>
  )
}

export default Students