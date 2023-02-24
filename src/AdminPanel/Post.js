import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './admin.scss'

const Post = () => {

  const navigate = useNavigate();


    const [image, setImage] = useState(null)
    const [title, setTitle] = useState(null)
    const [desc, setDesc] = useState(null)
    const [category2, setCategory2] = useState(null)
    const [price, setPrice] = useState(null)


    const addNewStudent = async () => {
        let formField = new FormData()
        formField.append('title',title)
        formField.append('desc',desc)
        formField.append('category2',category2)
        formField.append('price',price)

        if(image !== null) {
          formField.append('image', image)
        }

        await axios({
          method: 'post',
          url:'https://razer-api.onrender.com/devices/',
          data: formField
        }).then((response)=>{
          console.log(response.data);
          navigate.push('/admin')
        })
    }
   
    return (
        <div className="container">
            <div className="container3">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Product</h2>
        

        <div className="form-group">
        <label>Image</label>
             <input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])}/>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={category2}
              onChange={(e) => setCategory2(e.target.value)}
            />
          </div>
          <button className="btn btn-primary btn-block" onClick={addNewStudent}>Add Student</button>
       
      </div>
    </div>
        </div>
    );
};

export default Post;