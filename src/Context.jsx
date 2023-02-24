import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [mura, setMura] = useState("");

  const api = "https://razer-api.onrender.com/devices/";
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${api}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  const searchText = (event) => {
    setMura(event.target.value);
  };
  
  return (
    <Context.Provider
      value={{
        setData,
        category,
        setCategory,
        data,
        searchText,
        mura,
        api
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };