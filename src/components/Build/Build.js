import React from "react";
import "./Build.css";

import EarnBurn from "../../assets/images/Earn & Burn.png";
import MStamp from "../../assets/images/MStamp.png";
import MCoupon from "../../assets/images/MCoupon.png";
function Build() {
  let data = {
    title1: "BUILD SALE & ENGAGEMENT",
    titleB1: "M Stamp",
    titleB2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    titleB3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  };
  return (
    <>
      <div
        className=" d-flex align-items-start flex-column"
        style={{ height: "auto", width: "100%", background: "#EEEEEE" }}
      >
        <div className="container">
          <div className="title-Build ">
            <h1 className="title1-Build fw-bold">{data.title1}</h1>
            <div className="d-flex flex-wrap justify-content-end">
              <div className="card-Build shadow-Build m-3">
                <div>
                  <div>
                    <img className="img-Build" src={EarnBurn} alt="..." />
                  </div>
                  <p className="card-text fw-bold">M Point Earn & Burn</p>
                </div>
              </div>
              <div className="card-Build shadow-Build m-3">
                <div>
                  <div>
                    <img className="img-Build" src={MStamp} alt="..." />
                  </div>
                  <p className="card-text ">M Stamp</p>
                </div>
              </div>
              <div className="card-Build shadow-Build m-3">
                <div>
                  <div>
                    <img className="img-Build" src={MCoupon} alt="..." />
                  </div>
                  <p className="card-text ">M Coupon</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <div className="card con-Build card-Build-btm shadow-Build">
              <h2 className="card-Build-Text fw-bold">{data.titleB1}</h2>
              <p className="card-Build-Text">{data.titleB2}</p>
              <p className="card-Build-Text">{data.titleB3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Build;
