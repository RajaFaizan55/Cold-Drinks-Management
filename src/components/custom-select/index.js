import React from "react";

import style from "./select.module.scss";

const CustomSelect = () => {
  return (
    <div className={style.customSelect}>
      <select>
        <option value={0}>Select car:</option>
        <option value={1}>Audi</option>
        <option value={2}>BMW</option>
      </select>
    </div>
  );
};

export default CustomSelect;
