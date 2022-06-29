import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
}).required();

const ForgotPassword = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);
  return (
    <div className="container-sm  shadow p-5 " >
        <h2>LCS</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input {...register("email")} type="email" className="form-control"  aria-describedby="emailHelp"/>
              <p>{errors.email?.message}</p>
            </div>
       
            <div className="mb-3 d-flex" >
              <button id="submit" type="submit" className="btn btn-outline-success w-100">Send</button>

            </div>
          
            
            
          </form>
    </div>
  )
}

export default ForgotPassword