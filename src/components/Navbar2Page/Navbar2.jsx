import React from "react";
import { Link } from "react-router-dom";
import LenovoText from "../Lenovo/LenovoText";
import "../Navbar2Page/Navbar2.scss";
const Navbar2 = () => {
  return (
    <div>
      <nav class="nnn navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton3"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Все категории
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Ноутбуки
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Игровые ноутбуки
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Ультрабуки
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Трансформеры
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Ноутбуки для бизнеса
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  ПК
                </a>
              </li>
            </ul>
          </div>
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
            <ul className="uls">
              <li className="lii"><Link to="/" >Главная</Link></li>
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Бренды
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <li>
                    <button class="dropdown-item" type="button">
                      <Link to="/asus">
                      Asus
                      </Link>
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      MSI
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Lenovo
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      HP
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      DELL
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Razer
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Samsung
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Apple
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Acer
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      LG
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      HyperX
                    </button>
                  </li>
                </ul>
              </div>
              <li className="lii">Условия кредита</li>
              <li className="lii">Новости</li>
              <li className="lii">Наши контакты</li>
            </ul>
            <form class="zzz d-flex">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2292/2292011.png"
                alt=""
                style={{ width: "45px", height: "45px", paddingTop: "5px" }}
              />
              <div className="nomers">
                <a href="">+998 (93) 399-22-72</a>
                <p>@Noutuz (Telegram)</p>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
    
  );
};

export default Navbar2;
