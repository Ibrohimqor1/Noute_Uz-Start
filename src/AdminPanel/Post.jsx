import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./admin.scss";

const Post = () => {
  // const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(null);

  const addNewStudent = async () => {
    
      
      axios
        .post("https://razer-api.onrender.com/devices/", {
          name: name,
      image: image,
      price: price,
      desc: desc,
      category: category,
        })
        .then((res) => {
          console.log(res.data);
          
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <div className="container">
      <div className="container3">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A Product</h2>
          <div className="form-group">
            <label>Image</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="description"
              name="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="categoriy"
              name="address"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <button className="btn btn-primary btn-block" onClick={addNewStudent}>
            Add Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
