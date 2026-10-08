import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate=useNavigate();
  const user=JSON.parse(
    localStorage.getItem("user")
  )
  const [formData,setFormData]=useState({
    name:"",
    price:"",
    category:"",
    description:"",
    quantity:""
  })
  const [image,setImage]=useState(null);

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const data=new FormData();
      data.append("name",formData.name);
      data.append("price",formData.price);
      data.append("category",formData.category);
      data.append("description",formData.description);
      data.append("quantity",formData.quantity);
      data.append("userId",user.id);
      data.append("image",image);

      // const response=await axios.post("http://localhost:9999/api/pro",data);
      // alert("Product Added successfully");
//       const response = await axios.post(
//     `${API_URL}/api/pro`,
//     formData
// );
const response = await axios.post(
    `${API_URL}/api/pro`,
    formData
);

alert(response.data.message);
      navigate("/dashboard");
    }
    catch(error){
      alert(error.response?.data?.message)
    }
  }
  return (
    <div>
      <Navbar/>
      <form className='form-container' onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter the Name' value={formData.name} onChange={handleChange} name='name'/><br/><br/>
        <input type='text' placeholder='Enter the Price' value={formData.price} onChange={handleChange} name='price'/><br/><br/>
        <input type='text' placeholder='Enter the Category' value={formData.category} onChange={handleChange} name='category'/><br/><br/>
        <input type='text' placeholder='Enter the Description' value={formData.description} onChange={handleChange} name='description'/><br/><br/>
        <input type='text' placeholder='Enter the Quantity' value={formData.quantity} onChange={handleChange} name='quantity'/><br/><br/>
        <input type='file' accept='image/*' onChange={(e)=>setImage(e.target.files[0])} /><br/><br/>
        <button type='submit'>Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct

