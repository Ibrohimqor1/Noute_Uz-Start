import React, { useContext, useState } from "react";
import { Context } from "../Context";
import "./admin.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
// import { typeOf } from "react-read-more-read-less";

const Admin = () => {
  const [image, setImageEdit] = useState(null);
  const [title, setTitleEdit] = useState("");
  const [describe, setDescribeEdit] = useState("");
  const [category2, setCategory2Edit] = useState("");
  const [category, setCategoryEdit] = useState(null);
  const [price, setPriceEdit] = useState(null);
  const [uniq_id, setUniqId] = useState();

  const [open, setOpen] = React.useState(false);
  const handleOpen = (payload) => {
    setOpen(true);
    setUniqId(payload);
  };
  const handleClose = () => setOpen(false);

  const { data } = useContext(Context);
  const api = "https://razer-api.onrender.com/";

  const deleteUserById = (id) => {
    axios
      .delete(`${api}devices/${id}`)
      .then((res) => {
        console.log("Delete!!!", res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const EditPost = async (id) => {
    const formData = new FormData()
    
    if (typeof image !== 'string') {
        formData.append("image", image)
    }
    formData.append("title", title)
    formData.append("describe", describe)
    formData.append("category2", category2)
    formData.append("price", price)
    try {
      const response = await axios({
        url: `https://razer-api.onrender.com/devices/${id}/`,
        method: 'PUT',
        data: formData
      })
       
        .then((response) => {
          console.log(response.data);
        });
    } catch (error) {
      alert(error);
    }
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
        <div className="maped">
          {data.map((el) => {
            return (
              <div className="container">
                <div className="cardPlants" key={el.id}>
                  <img src={el.image} alt="" />
                  <div className="info">
                    <p>{el.title}</p>
                    <p className="price">${el.price}</p>
                  </div>
                  <button onClick={() => deleteUserById(el.id)}>Delete</button>
                  <button onClick={() => handleOpen(el.id)}>Update</button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box className="box">
                      <div className="users bg">
                        <h1 className="h1"> ozgartirish </h1>
                        <div className="qw1">
                          <h6>image</h6>
                          <input
                            className="inputss"
                            onChange={(e) => {
                              setImageEdit(e.target.files[0]);
                            }}
                         
                            type="file"
                            id="inputs"
                          />
                        </div>

                        <div className="qw2">
                          <h6>title</h6>
                          <input
                            className="inputss"
                            onChange={(e) => {
                              setTitleEdit(e.target.value);
                            }}
                            value={title}
                            type="text"
                            id="inputs"
                          />
                        </div>

                        <div className="qw3">
                          <h6>describe</h6>
                          <input
                            className="inputs"
                            type="text"
                            onChange={(e) => setDescribeEdit(e.target.value)}
                            value={describe}
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
                            onChange={(e) => setCategory2Edit(e.target.value)}
                            value={category2}
                            id="inputs"
                          />
                        </div>
                      </div>
                      <button onClick={() => EditPost(uniq_id)}>click me</button>
                    </Box>
                  </Modal>
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
