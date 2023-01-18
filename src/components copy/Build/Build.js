import React from "react";
import "./Build.css";

import EarnBurn from "../../assets/images/Earn & Burn.png";
import MStamp from "../../assets/images/MStamp.png";
import MCoupon from "../../assets/images/MCoupon.png";
function Build() {
  let data = {
    title1: "BUILD SALE & ENGAGEMENT",
    titleB1: "M-Stamp",
    titleB2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    titleB3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  };
  return (
    <>
      <div className="buildimage" id="Benefit">
        <div className="container ">
          <div className="container-Build">
            <div className="title-Build m-5">
              <h1 className="fw-bold m-0">{data.title1}</h1>
            </div>
            <div className="card-Build-out">
              <div className="card-Build m-3">
                <button className="btn-Build">
                  <div>
                    <img className="img-Build" src={EarnBurn} alt="..." />
                  </div>
                  <p className="card-text">M-Point Earn & Burn</p>
                </button>
              </div>
              <div className="card-Build  m-3">
                <button className="btn-Build">
                  <div>
                    <img className="img-Build" src={MStamp} alt="..." />
                  </div>
                  <p className="card-text">M-Stamp</p>
                </button>
              </div>
              <div className="card-Build m-3">
                <button className="btn-Build">
                  <div>
                    <img className="img-Build" src={MCoupon} alt="..." />
                  </div>
                  <p className="card-text">M-Coupon</p>
                </button>
              </div>
            </div>
          </div>
          <div className="card-Build-bottom">
            <div className="card card-Build-btm shadow-Build">
              <h2 className="card-Build-Text">{data.titleB1}</h2>
              <p className="card-Build-Text">{data.titleB2}</p>
              <p className="card-Build-Text">
                {data.titleB3}
                <br />
                {data.titleB4}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Build;
