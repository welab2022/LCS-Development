import React from 'react'
import { useParams } from "react-router";
import MainPage from '../Layout/MainPage'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { parse, isDate } from "date-fns";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const today = new Date();
const schema = yup.object({
  First_name: yup.string().max(255).required('First name is required'),
  Last_name: yup.string().max(255).required('Last name is required'),
  //DoB: yup.date(),
  // Gender: yup.string().max(10).required('gender name is required'),
  // Email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
  // PhoneNo: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  // Note: yup.string()
}).required();
const StudentForm = () => {
    const params = useParams();
    const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema)
    });
    
    const onSubmit = data => {console.log(data);}
  return (
    <MainPage>
            <div className="container-sm  shadow p-5 " >
        <h2>New Student</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
           <div className="mb-3">
              <label className="form-label">First Name</label>
              <input {...register("First_name")} type="text" className="form-control"  required />
              {/* <p>{errors.First_name?.message}</p> */}
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input {...register("Last_name")} type="text" className="form-control"  required />
              {/* <p>{errors.Last_name?.message}</p> */}
            </div>
            {/* <div className="mb-3">
              <label className="form-label">Date of birth</label>
              <input {...register("DoB")} type="date" className="form-control"  required />
              <p>{errors.Last_name?.message}</p>
            </div>
            <div className="form-check">
              <input {...register("Gender")} className="form-check-input" type="radio" name="gender" id="male" value="male" />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input {...register("Gender")} className="form-check-input" type="radio" name="gender" id="female" value="female"/>
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
            
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input {...register("email")} type="email" className="form-control"  aria-describedby="emailHelp"  required/>
              <p>{errors.email?.message}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">Phone number</label>
              <input {...register("PhoneNo")} type="text" className="form-control"  required />
              <p>{errors.PhoneNo?.message}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">Note</label>
              <input {...register("Note")} type="text" className="form-control"  required />
              <p>{errors.Note?.message}</p>
            </div> */}
            
            <div className="mb-3 d-flex" >
              <button id="submit" type="submit" className="btn btn-outline-success w-100">Save</button>

            </div>
    
            
            
          </form>
    </div>
        </MainPage>
  )
}

export default StudentForm