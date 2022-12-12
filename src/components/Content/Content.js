import React from "react";
import "./Content.css";

import m from "../../assets/images/5M.png";
import peple from "../../assets/images/peple.png";
import globe from "../../assets/images/globe.png";
import chart from "../../assets/images/chart.png";

function Content() {
  let data = {
    titleB1: "READY TO USE",
    titleB2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
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
      <div className="conimage" id="Service">
        <div className="container">
          <div className="d-flex align-content-center justify-content-center flex-wrap">
            {dataCard.map((item) => (
              <div
                key={item.title1}
                className="card card-Banner-box m-4 shadow-Banner"
                style={{ height: "280px", width: "250px" }}
              >
                <div className="card-body">
                  <div className="card-img mb-3 mt-2">
                    <img src={item.image} alt="..." />
                  </div>
                  <h6 className="text-center">{item.title1}</h6>
                  <p className="px-3">{item.title2}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="title-con">
            <div className="card card-con shadow-con">
              <h2 className="card-context">{data.titleB1}</h2>
              <p className="card-context">{data.titleB2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
