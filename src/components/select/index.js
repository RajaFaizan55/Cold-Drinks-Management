import React from "react";

import icon from "../../assets/downArrow.svg";
import style from "./select.module.scss";

const Select = ({
  label,
  options,
  name,
  onChange,
  onBlur,
  selectClass,
  inputRef,
  className,
  placeHolder,
  star,
  errorMessage,
  error,
  disabled,
}) => {
  return (
    <div className={`${style.generalSettingsInputContainer} ${className}`}>
      {label && (
        <label>
          {label} <span style={{ color: "red" }}>{star}</span>
        </label>
      )}
      <div
        style={{
          position: "relative",
          borderRadius: "5px",
        }}
      >
        <select
          name={name}
          className={`${style.select} ${selectClass}`}
          ref={inputRef}
          disabled={disabled}
          onChange={onChange}
          style={{
            border: error ? "1px solid #ff5050" : " 1px solid #d9d9d9",
            backgroundColor: "#0B0E20",
          }}
        >
          {placeHolder && <option value="">{placeHolder}</option>}
          {options.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <img src={icon} alt="arrow icon" className={style.img} />
      </div>
      {error && errorMessage && (
        <span className={style.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};

export default Select;
