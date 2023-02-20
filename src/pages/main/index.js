import React from "react";

import RequestForm from "../../components/request-form";
import CanImage from "../../components/can-image";

import sevenUpCan from "../../assets/three7up.svg";
import downArrow from "../../assets/downArrow.svg";
import sodaCan from "../../assets/twoSoda.svg";
import arizona from "../../assets/arizona.svg";
import dry from "../../assets/dry.svg";
import gatorade from "../../assets/gatorade.svg";
import cola from "../../assets/cocacola.svg";
import fanta from "../../assets/fanta.svg";
import crush from "../../assets/crush.svg";
import monster from "../../assets/monster.svg";
import lipton from "../../assets/lipton.svg";
import brands from "../../assets/brands.svg";
import intro from "../../assets/intro.svg";
import mapIcon from "../../assets/map.svg";
import style from "./main.module.scss";

const MainPage = () => {
  return (
    <div className={style.wraper}>
      <div className={style.parent_div}>
        <div className={style.textSection}>
          <h1>DrankGoedkoop Online Drankgroothandel</h1>
          <p>
            DrankGoedkoop kan u Zakelijk beleveren van Drank. Wij kunnen u een
            ruim aanbod bieden van 20.000 producten. DrankGoedkoop verkoopt aan
            distributiecentrums en Groothandels.
          </p>
          <a href="#form">
            <img src={downArrow} alt='icon' />
          </a>
        </div>
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

      {/* ///////////form //////////// */}
      <RequestForm />

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

      {/* ////// brands //////// */}
      <img src={brands} style={{ width: "100%" }} alt='icon' />

      {/* ///////////// introduction  ///////////// */}

      <div className={style.intro}>
        <div>
          <img src={intro} style={{ width: "100%" }} alt='icon' />
        </div>
        <div className={style.desc}>
          <p>Who We Are</p>
          <span>
            We are a group of supply chain, international business, and
            marketing professionals committed to bringing the highest quality
            American beverages to international markets. With a dedication to
            quality, we are here to help our international partners expand their
            customer base in a growing market with a low supply of American
            Beverages. We leverage American brand recognition for high-quality
            products to share with international customers. Our vision is to
            become a leading partner providing export solutions to major
            distribution companies/partners. Our mission is to grow
            partnerships, founded on trust and respect, earned through
            consistent delivery of best-in-class services. Focusing on added
            value creation, strong access to export markets, and excellent
            commercial expertise.
          </span>
        </div>
      </div>

      {/* /////////// map section //////////////// */}

      <div className={style.mapSec}>
        <div className={style.mapDesc}>
          <h1>Get our best offers in less than 24 hours</h1>
          <span>
            <b>CALL US:</b> +31612345678
          </span>
          <span>
            <b>EMAIL US:</b> sales@drankgoedkoop.nl
          </span>
          <span style={{ marginTop: "60px" }}>Scholtensoven 23</span>
          <span>7621HA Borne</span>
          <span>The Netherlands</span>
        </div>
        <div>
          <img src={mapIcon} style={{ width: "100%" }} alt='icon' />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
