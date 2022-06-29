import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  password: yup.string().max(255).required('Password is required'),
  passwordConfirmation: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match')
}).required();
const ResetPassword = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);
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
              <p>{errors.passwordConfirmation?.message}</p>
            </div>
            
            <div className="mb-3 d-flex justify-content-between" >
              <button type="submit" className="btn btn-outline-success w-100">Login</button>
            </div>
            
          </form>
    </div>
  )
}

export default ResetPassword