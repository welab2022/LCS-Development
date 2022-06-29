import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().max(255).required('Name is required'),
  email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
  password: yup.string().max(255).required('Password is required'),
}).required();

const Register = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);
  return (
    <div className="container-sm  shadow p-5 " >
        <h2>Get started with LCS</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
        <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
              <input {...register("name")} type="text" className="form-control"  required />
              <p>{errors.name?.message}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input {...register("email")} type="email" className="form-control"  aria-describedby="emailHelp"  required/>
              <p>{errors.email?.message}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input {...register("password")} type="password" className="form-control"   required/>
              <p>{errors.password?.message}</p>
            </div>
            <div className="mb-3 d-flex" >
              <button id="submit" type="submit" className="btn btn-outline-success w-100">Login</button>

            </div>
            <div className="mb-3 d-flex justify-content-between" >
              <a href="/login" className="info">Already have an account? Log in</a>
              
            </div>
            
            
          </form>
    </div>
  )
}

export default Register