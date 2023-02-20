import React from "react";
import style from "./input.module.scss";

const Input = ({
  label,
  onChange,
  value,
  name,
  list,
  onClick,
  onBlur,
  type,
  placeholder,
  error,
  errorMessage,
  icon,
  files,
  inputClass,
  iconClass,
  containerClass,
  register,
  readOnly,
  isDisable,
  required,
  id,
  step,
  star,
  extension,
  ...restOfProps
}) => {
  return (
    <>
      <div className={`${style.inputContainer} ${containerClass}`}>
        {label && (
          <label>
            {label}
            <span style={{ color: "red" }}>{star}</span>
          </label>
        )}
        <div style={{ position: "relative" }}>
          <input
            className={inputClass}
            list={list}
            style={{
              border: error ? "1px solid #ff5050" : " 1px solid #d9d9d9",
              color: error ? "#fff" : "#fff",
              backgroundColor: "#0B0E20",
            }}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            ref={register}
            readOnly={readOnly || false}
            disabled={isDisable || false}
            step={step}
            onBlur={onBlur}
            required={required && required}
            accept={extension}
            {...register(name)}
          />
          {icon && (
            <img
              className={`${style.icon} ${iconClass}`}
              style={{ cursor: "pointer" }}
              src={icon}
              alt=""
              onClick={onClick}
            />
          )}
        </div>
        {errorMessage && (
          <span className={style.errorMessage}>{errorMessage}</span>
        )}
      </div>
    </>
  );
};

export default Input;
