import React, { useContext, useState } from "react";

import { Context } from "../../Context";

const Allplants = () => {
  const { data } = useContext(Context);
  const [state, setState] = useState(data);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  console.log(data);

  return (
    <div className="allplants">
      <div className="products">
        <div className="maped">
          {data?.slice(0,130)?.map((el) => {
            return (
              <div className="container">
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
