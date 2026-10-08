import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {

    try {

      const response = await axios.get(
        `http://localhost:9999/api/pro/getdata`
      );

      const product = response.data.find(
        (item) => item._id === id
      );

      if (product) {
        setName(product.name);
        setPrice(product.price);
        setCategory(product.category);
        setDescription(product.description);
        setQuantity(product.quantity);
      }

    } catch (error) {
      console.log(error);
    }

  };

  const handleUpdate = async (e) => {

    e.preventDefault();

    try {

      const formData = new FormData();

      formData.append("name", name);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("quantity", quantity);

      if (image) {
        formData.append("image", image);
      }

      const response = await axios.put(
        `http://localhost:9999/api/pro/update/${id}`,
        formData
      );

      alert(response.data.message);

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Product update failed");

    }

  };

  return (
    <div>

      <h2>Update Product</h2>

      <form onSubmit={handleUpdate} className="form-container">

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <br /><br />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <br /><br />

        <button type="submit">
          Update Product
        </button>

      </form>

    </div>
  );
};

export default EditProduct;