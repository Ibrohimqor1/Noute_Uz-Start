import React, { useContext, useState } from "react";
import { Context } from "../Context";
import "./admin.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import { typeOf } from "react-read-more-read-less";

const Admin = () => {
  const [image, setImageEdit] = useState(null);
  const [name, setNameEdit] = useState("");
  const [desc, setDescEdit] = useState("");
  // const [category2, setCategory2Edit] = useState("");
  const [category, setCategoryEdit] = useState("");
  const [price, setPriceEdit] = useState(null);
  const [uniq_id, setUniqId] = useState();

  const [open, setOpen] = React.useState(false);
  const handleOpen = (payload) => {
    setOpen(true);
    setUniqId(payload);
  };
  const handleClose = () => setOpen(false);

  const { data } = useContext(Context);
  const api = "https://razer-api.onrender.com/devices/";

  const deleteUserById = (_id) => {
    axios
      .delete(`${api}${_id}`)
      .then((res) => {
        console.log("Delete!!!", res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const PatchElements = async (_id) => {
    await axios.patch(`https://razer-api.onrender.com/devices/${_id}`, {
      name: name,
      image: image,
      price: price,
      desc: desc,
      category: category,
    });
    window.location.reload();
  };
  return (
    <div className="bgg">
      <nav>
        <ul>
          <li>
            <Link to="/post">post</Link>
          </li>
        </ul>
      </nav>
      <div className="products">
        <div className="users bg">
          <h1 className="h1"> ozgartirish </h1>
          <div className="qw1">
            <h6>image</h6>
            <input
              className="inputss"
              onChange={(e) => {
                setImageEdit(e.target.value);
              }}
              value={image}
              type="text"
              id="inputs"
            />
          </div>

          <div className="qw2">
            <h6>name</h6>
            <input
              className="inputss"
              onChange={(e) => {
                setNameEdit(e.target.value);
              }}
              value={name}
              type="text"
              id="inputs"
            />
          </div>

          <div className="qw3">
            <h6>desc</h6>
            <input
              className="inputs"
              type="text"
              onChange={(e) => setDescEdit(e.target.value)}
              value={desc}
              id="inputs"
            />
          </div>

          <div className="qw4">
            <h6>price</h6>
            <input
              className="inputs"
              type="text"
              onChange={(e) => setPriceEdit(e.target.value)}
              value={price}
              id="inputs"
            />
          </div>

          <div className="qw5">
            <h6>category</h6>
            <input
              className="inputs"
              type="text"
              onChange={(e) => setCategoryEdit(e.target.value)}
              value={category}
              id="inputs"
            />
          </div>
        </div>
        

        <div className="maped">
          {data.slice(130, 9999).map((el) => {
            return (
              <div className="container" key={el._id}>
                <div className="cardPlants">
                  <img src={el.image} alt="" />
                  <div className="info">
                    <p>{el.title}</p>
                    <p className="price">${el.price}</p>
                  </div>
                  <button onClick={() => deleteUserById(el._id)}>Delete</button>
                  <button onClick={() => PatchElements(el._id)}>click me</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Admin;
