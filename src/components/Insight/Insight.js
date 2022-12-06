import React from "react";
import "./Insight.css";

import ads from "../../assets/images/ads.png";
import advertotial from "../../assets/images/Advertotial.png";
import shopping from "../../assets/images/Shopping.png";
function Insight() {
  let data = {
    title1: "INSIGHT & ADVERSTISEMENT",
    titleB1: "Sponsored Advertotial",
    titleB2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    titleB3: "labore et dolore magna aliqua.",
    titleB4:
      "Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  };
  return (
    <>
      <div
        className="  d-flex align-items-start flex-column"
        id="Benefit"
        style={{ height: "auto", width: "100%", background: "#EEEEEE" }}
      >
        <div className="container ">
          <div className="title-Insight">
            <h1 className="title1-Insight fw-bold">{data.title1}</h1>
            <div className="d-flex flex-wrap justify-content-end">
              <div className="card-Insight shadow-Insight m-3">
                <div>
                  <div>
                    <img className="img-Insight" src={ads} alt="..." />
                  </div>
                  <p className="card-text fw-bold">Sponsored Ads</p>
                </div>
              </div>
              <div className="card-Insight shadow-Insight m-3">
                <div>
                  <div>
                    <img className="img-Insight" src={advertotial} alt="..." />
                  </div>
                  <p className="card-text">Sponsored Advertotial</p>
                </div>
              </div>
              <div className="card-Insight shadow-Insight m-3">
                <div>
                  <div>
                    <img className="img-Insight" src={shopping} alt="..." />
                  </div>
                  <p className="card-text">Shopping Insight</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-start">
            <div className="card con-Insight card-Insight-btm shadow-Insight">
              <h2 className="card-Insight-Text fw-bold">{data.titleB1}</h2>
              <p className="card-Insight-Text">{data.titleB2}</p>
              <p className="card-Insight-Text">
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

export default Insight;
