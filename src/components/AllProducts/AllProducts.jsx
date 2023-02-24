import React, { useContext, useState } from "react";

import { Context } from "../../Context";
// import SeorchBar from "./SeorchBar/SeorchBar";
import "./Product.scss";
const Allplants = () => {
  const { data } = useContext(Context);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  console.log(data);

  return (

    <div className="allplants">
      {/* <SeorchBar/> */}
      <div className="products">
        <div className="maped">
          {data.slice(130,99999).map((el) => {
            return (
              <div className="card">
                <div className="cardPlants" key={el.id}>
                  <img src={el.image} alt="" />
                  <div className="info">
                    <p>{el.name}</p>
                    <p className="price">${el.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Allplants;
