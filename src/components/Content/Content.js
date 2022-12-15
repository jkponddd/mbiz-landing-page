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
          <div className="d-flex align-content-center justify-content-center flex-wrap pt-5">
            {dataCard.map((item) => (
              <div
                key={item.title1}
                className="card card-con-box m-4 shadow-con"
              >
                <div className="card-body">
                  <div className="card-img mb-3 mt-2">
                    <img src={item.image} alt="..." />
                  </div>
                  <h6 className="text-center">{item.title1}</h6>
                  <p className="m-0 pb-2">{item.title2}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="title-con">
            <div id="mousedown" />
            <div className="card card-con shadow-con mt-5">
              <h2>{data.titleB1}</h2>
              <p>{data.titleB2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
