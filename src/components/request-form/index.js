import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../input";
import Select from "../select";

import style from "./form.module.scss";

const RequestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <div className={style.wraper} id={"form"}>
      <div className={style.sec1}>
        <p>Request Product</p>
        <p>Portfolio & Pricing</p>
        <span>
          We serve our customers 24/7 and will respond more likely within 1
          hour.
        </span>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.sec2}>
            <Input
              label={"Company Name"}
              name="company"
              placeholder="Drankgoedkoop B.V."
              register={register}
              errorMessage={errors?.company?.message}
            />
            <Input
              label={"Phone"}
              name={"phone"}
              placeholder="+3112345678"
              register={register}
              errorMessage={errors?.phone?.message}
            />
            <Input
              label={"Name"}
              name={"name"}
              placeholder="Bob Schippers"
              register={register}
              errorMessage={errors?.name?.message}
            />
            <Input
              label={"Email"}
              name={"email"}
              placeholder="info@drankgoedkoop.nl"
              register={register}
              errorMessage={errors?.email?.message}
            />
          </div>
          <Select
            label="Country"
            name={"currentCountry"}
            options={options}
            // errorMessage={errors?.currentCountry?.message}
            // register={register}
            // onChange={() => {
            //   getData("currentCountryData", {
            //     country: watch().currentCountry,
            //   });
            // }}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;

const options = ["1 - 12", "1 - 11", "1 - 10"];

const schema = yup.object().shape({
  email: yup.string().email().required("Email is a required field"),
  name: yup.string().required("Name is a required field"),
  company: yup.string().required("Company is a required field"),
  phone: yup
    .number()
    .required()
    .typeError("phone is a required field")
    .min(1111111111, "Phone number consist of 10 digits")
    .max(9999999999, "Phone number consist of 10 digits"),
});
