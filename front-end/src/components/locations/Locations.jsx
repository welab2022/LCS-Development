import React, { useState } from 'react'
import MainPage from '../../components/Layout/MainPage'
import { locations } from '../../data.js'
import Location from './Location'

const Locations = () => {
    const [data, setData] = useState(locations);
  return (
        <MainPage>
            <div>
                <h2 className='mt-5'>Locations</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">#Classes</th>
                            <th scope="col">Status</th>
                            <th scope="col">Last view</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, index)=> <Location key={index} item={item}/>)
                        }
                    </tbody>
                </table>
            </div>
        </MainPage>
  )
}

export default Locations