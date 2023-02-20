import React from "react";
import { Link } from "react-router-dom";


import logo from "../../assets/logo.svg";
import style from "./header.module.scss";

const Header = () => {
  return (
    <div className={style.wraper}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <Link
          to={"/portfolio"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <span>Brand Portfolio</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
