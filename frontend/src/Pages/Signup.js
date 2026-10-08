import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate=useNavigate();
    const [form,setForm]=useState({
        name:"",
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
                "http://localhost:9999/api/auth/sign"
                ,form
            );
            alert(response.data.message)
            setForm({
                name:"",
                email:"",
                password:""
            })
            navigate('/')
        }
        catch(error){
            alert(error.response?.data?.message)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='form-container'>
            <input type='text' name='name' placeholder='Enter your Name' value={form.name} onChange={handleChange}/><br/><br/>
            <input type='text' name='email' placeholder='Enter your Email' value={form.email} onChange={handleChange}/><br/><br/>
            <input type='text' name='password' placeholder='Enter your Password' value={form.password} onChange={handleChange}/><br/><br/>
            <button type='submit'>Register</button>
            <Link to='/login' className='form-control btn btn-success mt-3'>Login</Link>
        </form>
    </div>
  )
}

export default Signup
