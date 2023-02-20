import React from "react";

import style from "./can.module.scss";

const CanImage = ({ bgColor, text, imgSrc }) => {
  return (
    <div style={{ background: bgColor }} className={style.canImg}>
      <span>{text}</span>
      <img src={imgSrc} alt={"img"} />
    </div>
  );
};

export default CanImage;
