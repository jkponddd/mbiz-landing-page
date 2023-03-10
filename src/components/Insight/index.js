import React, { useState } from "react";

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
      <div id="Benefit"></div>
      <div className="box-content-margin box-bg-line-2">
        <div className="container" style={{ marginTop: "40px" }}>
          <div className="container box-insight-padding">
            <div className="box-title-insight">
              <div>
                <h1 className="box-text-insight">{data.title}</h1>
              </div>
              <div className="card-Insight-out">
                <div className="card-Insight my-3 ms-0 ms-lg-3">
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
                <div className="card-Insight my-3 ms-0 ms-lg-3">
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
                <div className="card-Insight my-3 ms-0 ms-lg-3">
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
          </div>
          <div
            className="container mt-3 pb-3 pb-lg-0"
            style={{ overflow: "hidden" }}
          >
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
                    <img
                      className="box-build-image"
                      src={ia_1}
                      style={{ width: "160%" }}
                      alt="..."
                    ></img>
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
                    <img
                      className="box-build-image"
                      src={ia_2}
                      style={{ width: "160%" }}
                      alt="..."
                    ></img>
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
                    <img
                      className="box-build-image"
                      src={ia_3}
                      style={{ width: "160%" }}
                      alt="..."
                    ></img>
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
