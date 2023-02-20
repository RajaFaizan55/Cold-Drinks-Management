import React from "react";

import CanImage from "./../../components/can-image/index";

import sevenUpCan from "../../assets/three7up.svg";
import sodaCan from "../../assets/twoSoda.svg";
import arizona from "../../assets/arizona.svg";
import dry from "../../assets/dry.svg";
import cola from "../../assets/cocacola.svg";
import fanta from "../../assets/fanta.svg";
import crush from "../../assets/crush.svg";
import monster from "../../assets/monster.svg";
import lipton from "../../assets/lipton.svg";
import capri from "../../assets/capri.svg";
import cola2 from "../../assets/cola2.svg";
import pepper from "../../assets/pepper.svg";
import pepsi from "../../assets/pepsi.svg";
import gatorade from "../../assets/gatorade.svg";
import redbull from "../../assets/redbull.svg";
import sprite from "../../assets/sprite.svg";
import sunkiss from "../../assets/sunkiss.svg";
import style from "./portfolio.module.scss";
import RequestForm from "../../components/request-form";

const PortFolioPage = () => {
  return (
    <div>
      <div className={style.parent_div}>
        <h1>Brand Portfolio</h1>
      </div>
      {/* ////// image sec 1 ////////// */}
      <div className={style.canSec}>
        <CanImage
          bgColor="linear-gradient(86.72deg, #156643 1.52%, #14773E 98.24%)"
          text={"7up"}
          imgSrc={sevenUpCan}
        />
        <CanImage
          bgColor="linear-gradient(81.31deg, #CFAA68 1.64%, #E9E2CA 96.43%)"
          text={"A&W"}
          imgSrc={sodaCan}
        />
      </div>

      {/* /////////////  img 2 /////////// */}
      <div className={style.canSec2}>
        <CanImage
          bgColor="linear-gradient(81.85deg, #3C9F9D 2.43%, #7ACDCB 97.03%)"
          text={"Arizona"}
          imgSrc={arizona}
        />
        <CanImage
          bgColor="linear-gradient(86.11deg, #CA3833 -14.38%, #FAA9AC 131.42%)"
          text={"Canada Dry"}
          imgSrc={dry}
        />
      </div>
      {/* ////// image sec 3 ////////// */}
      <div className={style.canSec}>
        <CanImage
          bgColor="linear-gradient(86.72deg, #DB1F0C 1.52%, #B61C0B 98.24%)"
          text={"Coca Cola"}
          imgSrc={cola}
        />
        <CanImage
          bgColor="linear-gradient(81.31deg, #F78317 1.64%, #F1A258 96.43%)"
          text={"Fanta"}
          imgSrc={fanta}
        />
      </div>
      {/* //////img sec 4/////////// */}
      <div className={style.canSec2}>
        <CanImage
          bgColor="linear-gradient(80.12deg, #A94360 4.01%, #BF5E7A 97.91%)"
          text={"Crush"}
          imgSrc={crush}
        />
        <CanImage
          bgColor="linear-gradient(86.11deg, #F77608 -14.38%, #F7B681 131.42%)"
          text={"Gatorade"}
          imgSrc={gatorade}
        />
      </div>

      {/* ////// image sec 5 ////////// */}
      <div className={style.canSec}>
        <CanImage
          bgColor="linear-gradient(84.09deg, #0B090A 1.05%, #241E21 99.47%)"
          text={"Monster"}
          imgSrc={monster}
        />
        <CanImage
          bgColor="linear-gradient(82.75deg, #1759A7 4.07%, #4175CB 96.21%)"
          text={"Lipton"}
          imgSrc={lipton}
        />
      </div>

      {/* //////img sec 6/////////// */}
      <div className={style.canSec2}>
        <CanImage
          bgColor="linear-gradient(71.72deg, #40A1D9 -4.07%, #084C96 87.49%)"
          text={"Capri Sun"}
          imgSrc={capri}
        />
        <CanImage
          bgColor="linear-gradient(86.72deg, #DB1F0C 1.52%, #B61C0B 98.24%)"
          text={"Coca Cola Mexico"}
          imgSrc={cola2}
        />
      </div>
      {/* //////img sec 7/////////// */}
      <div className={style.canSec}>
        <CanImage
          bgColor="linear-gradient(84.09deg, #1E5460 1.05%, #326771 99.47%)"
          text={"Dr.Pepper"}
          imgSrc={pepper}
        />
        <CanImage
          bgColor="linear-gradient(82.75deg, #1759A7 4.07%, #4175CB 96.21%)"
          text={"Pepsi"}
          imgSrc={pepsi}
        />
      </div>
      {/* //////img sec 8/////////// */}
      <div className={style.canSec2}>
        <CanImage
          bgColor="linear-gradient(80.12deg, #1C3E71 4.01%, #5071AB 97.91%)"
          text={"Red Bull"}
          imgSrc={redbull}
        />
        <CanImage
          bgColor="linear-gradient(86.11deg, #298520 -14.38%, #62BF6A 131.42%)"
          text={"Sprite"}
          imgSrc={sprite}
        />
      </div>
      {/* //////img sec /////////// */}
      <CanImage
        bgColor="linear-gradient(84.09deg, #D67B18 1.05%, #E49432 99.47%)"
        text={"Sun Kist"}
        imgSrc={sunkiss}
      />

      {/* ///////////form //////////// */}
      <RequestForm />
    </div>
  );
};

export default PortFolioPage;
