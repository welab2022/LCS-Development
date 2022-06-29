import React from 'react'
import MainPage from '../../components/Layout/MainPage';
import { users } from '../../data.js';
import User from './User';
const Users = () => {
  return (
    <MainPage>
            <div>
                <h2 className='mt-5'>Locations</h2>
                <table className='table'>
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Role</th>
                        <th scope="col">Description</th>
                        <th scope="col">Enable</th>
                        <th scope="col">Last Access</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((item, index)=> <User key={index} item={item}/>)
                        }
                    </tbody>
                </table>
            </div>
        </MainPage>
  )
}

export default Users