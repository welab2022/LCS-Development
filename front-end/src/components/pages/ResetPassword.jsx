import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useParams } from "react-router-dom";
import { resetPassword } from '../../api/resetPassword';


const schema = yup.object({
  password: yup.string().max(255).required('Password is required'),
  passwordConfirmation: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match')
}).required();
const ResetPassword = () => {
  let params = useParams()
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    try{
      resetPassword({params: params, password: data.password})
    }catch(err){
        console.log("khong thanh cong")
    }
    
  }
  return (
    <div className="container-sm  shadow p-5 "  >
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input {...register("password")} type="password" className="form-control"  required/>
              <p>{errors.password?.message}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
              <input {...register("passwordConfirmation")} type="password" className="form-control"  required/>
              <p style={{color: "red"}}>{errors.passwordConfirmation?.message}</p>
            </div>
            
            <div className="mb-3 d-flex justify-content-between" >
              <button type="submit" className="btn btn-outline-success w-100" >Reset password</button>
            </div>
            
          </form>
    </div>
  )
}

export default ResetPassword