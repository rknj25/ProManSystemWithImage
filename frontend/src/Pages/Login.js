import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate();
    const [form,setForm]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setForm({...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post(
                "http://localhost:9999/api/auth/login",
            form
            )
            setForm({
                email:"",
                password:""
            })
            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            )
            alert(response.data.message);
            
            navigate('/dashboard')
        }
        catch(error){
            alert(error.response?.data?.message)
        }
    }
  return (
    <div>
        <form className='form-container' onSubmit={handleSubmit}>
            <input type='email' placeholder='Enter your Email' value={form.email} name='email' onChange={handleChange}/><br/><br/>
            <input type='password' placeholder='Enter your Password' value={form.password} name='password' onChange={handleChange}/><br/><br/>
            <button type='submit'>Login</button>
            <Link to='/signup' className='form-control btn btn-success mt-3'>Signup</Link>
        </form>
    </div>
  )
}

export default Login
