import React from "react";
import "./Banner.css";

function Banner() {
  let data = {
    title1: "BRING FUTURE CUSTOMERS",
    title2: "TO YOUR BUSINESS WITH INSIGTH.",
    titleB1: "M BUSINESS",
    titleB2:
      "Marketing solutions for Business  that help you connect and grow your business with our x perspective view from the Mall group.",
  };

  return (
    <>
      <div className="bannerimage" id="Home">
        <div className="container">
          <div className="text-light Banner">
            <h1 className="mb-3">{data.title1}</h1>
            <h3 className="mb-4">{data.title2}</h3>
            <button type="button" className="btn-danger rounded-pill btn-Login">
              Login / Register
            </button>
          </div>

          <div className="card-Banner shadow-Banner">
            <div>
              <h2 className="mb-3">{data.titleB1}</h2>
              <p className="card-Text">{data.titleB2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
