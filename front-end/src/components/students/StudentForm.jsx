import React ,{ useState }from 'react'
import { useParams } from "react-router";
import MainPage from '../Layout/MainPage'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { updateStudent,createStudent } from '../../api/studentApi.js';


const StudentForm = () => {
    const params = useParams();
    const { register, handleSubmit } = useForm();
    const [status, setStatus] = useState(0);// 0 not respone, 1 successfull, 2 failed
    const onSubmit = data => {
      if(params.id ==="new"){
        createStudent(data).then(respone =>{
          setStatus(2);
         
          setTimeout(() => {
            setStatus(0)
          }, 500);
          })
        .catch(e=>{
          setStatus(2);
         
          setTimeout(() => {
            setStatus(0)
          }, 500);
        }

        );
      }
      else{
        updateStudent(data).
        then(respone =>{
          setStatus(2);
         
          setTimeout(() => {
            setStatus(0)
          }, 500);
          })
        .catch(e=>{
          setStatus(2);
         
          setTimeout(() => {
            setStatus(0)
          }, 500);
        }

        );
      }
      
    }
  return (
    <MainPage>
      <Link to="/students" className="btn btn-outline-success p-1">Back</Link>
      <div className="container-sm  shadow p-5 " >
        <div className="mx-auto" style={{color: "red ",width:"100px"}}>
        {status== 1?  "Successful!":(status==2?"Failed!": "")}
        </div>
        <h2>{params.id =="new"?"New student": "update student"}</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
           <div className="mb-3">
              <label className="form-label">First Name</label>
              <input {...register("First_name")} type="text" className="form-control" defaultValue={params.id ==="new"?"":"Thanh"}  required />
             
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input {...register("Last_name")} type="text" className="form-control" defaultValue={params.id ==="new"?"":"Nguyen Van"}  required />
            </div>
            <div className="mb-3">
              <label className="form-label">Birthday</label>
              <input {...register("birthday")} type="date" className="form-control" defaultValue={params.id ==="new"?"":"2001-01-01"}
           min="1950-01-01" max="2018-12-31"  required />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Gender</label>
                <select {...register("gender")} className="form-select" defaultValue={params.id ==="new"?"":"male"} >  
             
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                
                </select>
              
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input {...register("email")} type="email" className="form-control" defaultValue={params.id ==="new"?"":"Vanthanh@gmail.com"} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input {...register("phone")} type="tel" className="form-control" pattern="[0-9]{10}" defaultValue={params.id ==="new"?"":"0333738005"}  required />
            </div>
            <div className="mb-3">
              <label className="form-label">Note</label>
              <input {...register("note")} type="text" className="form-control" />
             
            </div>
            
            <div className="mb-3 d-flex" >
              <button id="submit" type="submit" className="btn btn-outline-success w-100">Save</button>

            </div>
            
            
            
          </form>
    </div>
        </MainPage>
  )
}

export default StudentForm