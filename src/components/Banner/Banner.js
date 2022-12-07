import React from "react";
import "./Banner.css";

import m from "../../assets/images/5M.png";
import peple from "../../assets/images/peple.png";
import globe from "../../assets/images/globe.png";
import chart from "../../assets/images/chart.png";

function Banner() {
  let data = {
    title1: "BRING FUTURE CUSTOMERS",
    title2: "TO YOUR BUSINESS WITH INSIGTH.",
    titleB1: "M BUSINESS",
    titleB2:
      "Marketing solutions for Business  that help you connect and grow your business with our x perspective view from the Mall group.",
  };

  let dataCard = [
    {
      image: m,
      title1: "Users",
      title2: "Lorem ipsum dolor sit amet, consecteturelit, sed do eiusmod ",
    },
    {
      image: peple,
      title1: "Continue Active Users",
      title2: "Lorem ipsum dolor sit amet, consecteturelit, sed do eiusmod ",
    },
    {
      image: globe,
      title1: "Worldwide Users",
      title2: "Lorem ipsum dolor sit amet, consecteturelit, sed do eiusmod ",
    },
    {
      image: chart,
      title1: "Verious Segment",
      title2: "Lorem ipsum dolor sit amet, consecteturelit, sed do eiusmod ",
    },
  ];
  return (
    <>
      <div className="bannerimage" id="Home">
        <div className="container">
          <div className="title text-light">
            <h1>{data.title1}</h1>
            <h3 className="mb-3">{data.title2}</h3>
            <button
              type="button"
              className="btn btn-danger rounded-pill btn-Login"
            >
              Login / Register
            </button>
          </div>
          <div className="card-Banner shadow-Banner">
            <div>
              <h2 className="card-title fw-bold">{data.titleB1}</h2>
              <p className="card-Text">{data.titleB2}</p>
            </div>
          </div>
          <div className="d-flex align-content-center justify-content-center flex-wrap my-3">
            {dataCard.map((item) => (
              <div
                key={item.title1}
                className="card card-Ban m-4 shadow-Banner"
                style={{ height: "250px", width: "230px" }}
              >
                <div className="card-body text-center">
                  <div className="card-img mb-3 mt-2">
                    <img src={item.image} alt="..." />
                  </div>
                  <h6 className="card-Title">{item.title1}</h6>
                  <p className="card-text">{item.title2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
