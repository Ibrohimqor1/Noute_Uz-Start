import React from "react";
import "../Navbar/Navbar.scss";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              className="mm"
              src="https://nout.uz/wp-content/uploads/2021/03/logotype-nout.svg"
              alt=""
              style={{ width: "200px", margin: "10px" }}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <div className="input">
                  <input
                    className="Nav__inp"
                    type="text"
                    placeholder="Search ???"
                    name=""
                    id=""
                  />
                  <button className="btn1">
                    <img
                      className="img__inp"
                      src="https://www.citypng.com/public/uploads/small/11640084027eqwauegwzmhrbniaualprqoe4jj2jguwobj2t6vnixim3yf2w8xzbb5jdksvrcemxwzv9ncnqzadnjtmwf6eqpadmrmarzhefgxf.png"
                      alt=""
                    />
                  </button>
                </div>
              </li>
            </ul>
            <form class="vvv d-flex">
              <a href="">
                <img
                  src="https://icons.veryicon.com/png/o/miscellaneous/basic-monochrome-icon/refresh-149.png"
                  alt=""
                  style={{ width: "20px" }}
                />
              </a>
              <a href="">
                <img
                  src="https://www.pngmart.com/files/10/User-Account-Person-PNG-File.png"
                  alt=""
                  style={{ width: "20px" }}
                />
              </a>
              <a href="">
                <img
                  src="https://www.pngmart.com/files/7/Cart-PNG-Pic.png"
                  alt=""
                  style={{ width: "20px" }}
                />
              </a>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
