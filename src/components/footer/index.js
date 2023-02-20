import React from "react";

import style from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={style.wraper}>
      <span>© 2022 Drankgoedkoop B.V.</span>
      <span>Terms of Serivce</span>
      <span>Privacy Policy</span>
    </div>
  );
};

export default Footer;
