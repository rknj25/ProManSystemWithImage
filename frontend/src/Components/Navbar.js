import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate=useNavigate();

  const user=JSON.parse(localStorage.getItem("user"));
  const logout=()=>{
    localStorage.removeItem("user")
    navigate('/login')
  }
  return (
    
      <nav>
        <h2>Product Management</h2>
        <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/add-product">Add Product</Link>
        <span className='text-danger'>Welcome {user?.name}</span>
        <button onClick={logout} className='btn btn-primary ms-2'>Logout</button>
        </div>
      </nav>
    
  )
}

export default Navbar
