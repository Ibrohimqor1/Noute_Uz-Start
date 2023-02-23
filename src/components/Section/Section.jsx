import React from "react";
import { Link } from "react-router-dom";
import "../Section/Section.scss"
const Section = () => {
  return (
    <div>
      <div className="Header__pages">
        <Link to="/lenovo" >
        <img src="https://nout.uz/wp-content/uploads/2022/05/lenovo-1.jpg" alt="" />
        </Link>
        <Link to="/asus" >
        <img src="https://nout.uz/wp-content/uploads/2022/05/asus-ban-2.jpg" alt="" />
        </Link>
        <img src="https://nout.uz/wp-content/uploads/2022/05/hp.jpg" alt="" />
        <img src="https://nout.uz/wp-content/uploads/2022/05/msi-2.jpg" alt="" />
        <img src="https://nout.uz/wp-content/uploads/2022/05/dell.jpg" alt="" />
        <img src="https://nout.uz/wp-content/uploads/2022/05/razer-1.jpg" alt="" />
        <img src="https://nout.uz/wp-content/uploads/2022/05/samsung-2.jpg" alt="" />
        <img src="https://nout.uz/wp-content/uploads/2022/05/microsft.jpg" alt="" />
        <img src="https://nout.uz/wp-content/uploads/2022/05/apple-2.jpg" alt="" />
        <img src="https://nout.uz/wp-content/uploads/2022/05/acer-1.jpg" alt="" />
        <img src="https://nout.uz/wp-content/uploads/2022/05/lg-2.jpg" alt="" />
        <img src="https://nout.uz/wp-content/uploads/2022/05/hx_01-%E2%80%94-1970-x-500.jpg" alt="" />
      </div>
    </div>
  );
};

export default Section;
