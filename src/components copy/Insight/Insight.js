import React, { useState } from "react";
import "./Insight.css";

import ads from "../../assets/images/icon/ia_1.svg";
import advertotial from "../../assets/images/icon/ia_2.svg";
import shopping from "../../assets/images/icon/ia_3.svg";

import ia_1 from "../../assets/images/insight-adverstisement/insight-adverstisement_1.svg";
import ia_2 from "../../assets/images/insight-adverstisement/insight-adverstisement_2.svg";
import ia_3 from "../../assets/images/insight-adverstisement/insight-adverstisement_3.svg";

function Insight() {
  let data = {
    title: "INSIGHT & ADVERSTISEMENT",
    title_1: "Sponsored Ads",
    detail_1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    title_2: "Sponsored  Advertorial",
    detail_2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    title_3: "Shopping Insight",
    detail_3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
  };
  const [checkTabs, setCheckTabs] = useState(1);
  return (
    <>
      <div className="insight-bg" id="Benefit">
        <div className="py-5 h-100">
          <div className="container">
            <div className="container-Insight">
              <div className="title-Insight m-5">
                <h1 className="m-0">{data.title}</h1>
              </div>
              <div className="card-Insight-out">
                <div className="card-Insight m-3">
                  <button
                    className={`btn-Insight ${checkTabs === 1 ? "active" : ""}`}
                    onClick={() => {
                      setCheckTabs(1);
                    }}
                  >
                    <div>
                      <img className="img-Insight" src={ads} alt="..." />
                    </div>
                    <p className="card-text">Sponsored Ads</p>
                  </button>
                </div>
                <div className="card-Insight m-3">
                  <button
                    className={`btn-Insight ${checkTabs === 2 ? "active" : ""}`}
                    onClick={() => {
                      setCheckTabs(2);
                    }}
                  >
                    <div>
                      <img
                        className="img-Insight"
                        src={advertotial}
                        alt="..."
                      />
                    </div>
                    <p className="card-text">Sponsored Advertotial</p>
                  </button>
                </div>
                <div className="card-Insight m-3">
                  <button
                    className={`btn-Insight ${checkTabs === 3 ? "active" : ""}`}
                    onClick={() => {
                      setCheckTabs(3);
                    }}
                  >
                    <div>
                      <img className="img-Insight" src={shopping} alt="..." />
                    </div>
                    <p className="card-text">Shopping Insight</p>
                  </button>
                </div>
              </div>
            </div>
            {checkTabs === 1 ? (
              <>
                <div className="row align-items-center">
                  <div className="col-12 col-md-6">
                    <div className="card-Insight-bottom">
                      <div className="card card-Insight-btm shadow-Insight">
                        <h2 className="card-Insight-Text">{data.title_1}</h2>
                        <p className="card-Insight-Text">{data.detail_1}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <img src={ia_1} style={{ width: "160%" }} alt=""></img>
                  </div>
                </div>
              </>
            ) : checkTabs === 2 ? (
              <>
                <div className="row align-items-center">
                  <div className="col-12 col-md-6">
                    <div className="card-Insight-bottom">
                      <div className="card card-Insight-btm shadow-Insight">
                        <h2 className="card-Insight-Text">{data.title_2}</h2>
                        <p className="card-Insight-Text">{data.detail_2}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <img src={ia_2} style={{ width: "160%" }} alt=""></img>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="row align-items-center">
                  <div className="col-12 col-md-6">
                    <div className="card-Insight-bottom">
                      <div className="card card-Insight-btm shadow-Insight">
                        <h2 className="card-Insight-Text">{data.title_3}</h2>
                        <p className="card-Insight-Text">{data.detail_3}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <img src={ia_3} style={{ width: "160%" }} alt=""></img>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Insight;
