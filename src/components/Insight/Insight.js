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
      <div className="insightimage" id="Benefit">
        <div className="container ">
          <div className="container-Insight">
            <div className="title-Insight m-5">
              <h1 className="fw-bold m-0">{data.title1}</h1>
            </div>
            <div className="card-Insight-out">
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
          <div className="card-Insight-bottom">
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
