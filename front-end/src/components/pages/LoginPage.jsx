import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector  } from 'react-redux';
import { fetchLogin, } from '../../freatures/auth/authSlice';
import { useNavigate  } from 'react-router-dom';


const schema = yup.object({
  email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
  password: yup.string().max(255).required('Password is required'),
}).required();

const LoginPage = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const loginStatus = useSelector(state=>state.auth.status);
  const currentUser = useSelector(state=>state.auth.currentUser);
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  useEffect(()=>{
    if(loginStatus == "succeeded"){
      localStorage.setItem('username',currentUser.username)
      return navigate("/");
    }
    
  },[loginStatus])
  const onSubmit = (data) => {
    dispatch(fetchLogin(JSON.stringify(data)));
  };
  return (
    <div className="container-sm  shadow p-5 " >
        <h2>LCS</h2>
        {(loginStatus == "failed")?<p style={{color: "red"}}>Incorrect email or password!</p>:"" }
        <form onSubmit={handleSubmit(onSubmit)} >
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
              <button id="submit" type="submit" className="btn btn-outline-success w-100">{loginStatus=='loading'?'Logging...':'Login'}</button>

            </div>
            <div className="mb-3 d-flex justify-content-between" >
              <a href="/forgotpassword" className="info">Forgot password</a>
              <a href="/register" className="info">Create an account</a>
            </div>
            
            
          </form>
    </div>
  )
}

export default LoginPage