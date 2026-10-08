// // import React, { useEffect, useState } from 'react'
// // import Navbar from '../Components/Navbar'
// // import axios from 'axios';



// // const Dashboard = () => {
// //   const [product,setProduct]=useState([]);
  
// //   const getpro=async()=>{
// //     try{
// //       const response=await axios.get("http://localhost:9999/api/pro/getdata");
// //       setProduct(response.data)
// //     }
// //     catch{
// //       console.log("No Data");
// //     }
// //   }

// //   useEffect(()=>{
// //     getpro();
// //   },[])

// //   const handleDelete=async(id)=>{
// //     try{
// //       const response=await axios.delete(`http://localhost:9999/api/pro/delete/${id}`)
// //       alert(response.data.message)
// //       getpro();
// //     }
// //     catch{
// //       alert("product not Deleted");
// //     }
// //   }
// //   return (
// //     <div>
// //         <Navbar/>
// //         {/* <div className='product-container'>
// //               {product.map((item)=>(
// //                 <div className='product-card'>
// //                   <h3>{item.name}</h3>
// //                   <img src={`http://localhost:9999/uploads/${item.image}`} />
// //               </div>
// //           ))}
// //         </div> */}
// //         <table className='table mt-5'>
// //             <tr>
// //               <th>Name</th>
// //               <th>Price</th>
// //               <th>Category</th>
// //               <th>Description</th>
// //               <th>Quantity</th>
// //               <th>Image</th>
// //               <th colSpan={2}>Action</th>
// //             </tr>
// //             {product.map((item)=>(
// //                 <>
// //                 <tr>
// //                   <th>{item.name}</th>
// //                   <th>{item.price}</th>
// //                   <th>{item.category}</th>
// //                   <th>{item.description}</th>
// //                   <th>{item.quantity}</th>
// //                   <th><img src={`http://localhost:9999/uploads/${item.image}`} width={'100px'}/></th>
                  
// //                   {/* <th><a href=''>Edit</a></th> */}
// //                   <th><button onClick={()=>{handleDelete(item._id)}}>Delete</button></th>
// //                   <th><button>Update</button></th>
// //                 </tr>
                  
// //                 </>
// //             ))}
// //         </table>

// //     </div>
// //   )
// // }

// // export default Dashboard

// import React, { useEffect, useState } from "react";
// import Navbar from "../Components/Navbar";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const [product, setProduct] = useState([]);
// const navigate = useNavigate();
//   const getpro = async () => {
//     try {
//       const response = await axios.get(
//         "https://promansystemwithimage.onrender.com/api/pro/getdata"
//       );

//       setProduct(response.data);
//     } catch (error) {
//       console.log("No Data");
//     }
//   };

//   useEffect(() => {
//     getpro();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.delete(
//         `https://promansystemwithimage.onrender.com/api/pro/delete/${id}`
//       );

//       alert(response.data.message);

//       // Refresh product list
//       getpro();

//     } catch (error) {
//       console.log(error);
//       alert("Product deletion failed");
//     }
//   };

//   return (
//     <div>
//       <Navbar />

//       <table className="table mt-5">

//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Category</th>
//             <th>Description</th>
//             <th>Quantity</th>
//             <th>Image</th>
//             <th colSpan={2}>Action</th>
//           </tr>
//         </thead>

//         <tbody>

//           {product.map((item) => (

//             <tr key={item._id}>

//               <td>{item.name}</td>

//               <td>{item.price}</td>

//               <td>{item.category}</td>

//               <td>{item.description}</td>

//               <td>{item.quantity}</td>

//               <td>
//                 <img
//                   src={`http://localhost:9999/uploads/${item.image}`}
//                   width="100px"
//                   alt={item.name}
//                 />
//               </td>

//               <td>
//                 <button
//                   onClick={() => handleDelete(item._id)}
//                 >
//                   Delete
//                 </button>
//               </td>

//               <td>
//                <button onClick={() =>navigate(`/edit-product/${item._id}`)}>  Update</button>
//               </td>

//             </tr>

//           ))}

//         </tbody>

//       </table>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://promansystemwithimage.onrender.com";

const Dashboard = () => {
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getpro = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/api/pro/getdata`
        );

        setProduct(response.data);
      } catch (error) {
        console.log("No Data");
      }
    };

    getpro();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${API_URL}/api/pro/delete/${id}`
      );

      alert(response.data.message);

      // Refresh product list
      const result = await axios.get(
        `${API_URL}/api/pro/getdata`
      );

      setProduct(result.data);

    } catch (error) {
      console.log(error);
      alert("Product deletion failed");
    }
  };

  return (
    <div>
      <Navbar />

      <table className="table mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Image</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
          {product.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>

              <td>{item.price}</td>

              <td>{item.category}</td>

              <td>{item.description}</td>

              <td>{item.quantity}</td>

              <td>
                <img
                  src={`${API_URL}/uploads/${item.image}`}
                  width="100px"
                  alt={item.name}
                />
              </td>

              <td>
                <button
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </td>

              <td>
                <button
                  onClick={() =>
                    navigate(`/edit-product/${item._id}`)
                  }
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;