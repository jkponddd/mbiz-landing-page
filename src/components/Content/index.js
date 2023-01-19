import React from "react";

import device_1 from "../../assets/images/device/device_1.svg";
import device_2 from "../../assets/images/device/device_2.svg";

import star_1 from "../../assets/images/star/star_1.svg";
import star_2 from "../../assets/images/star/star_2.svg";

import content_1 from "../../assets/images/icon/content_1.svg";
import content_2 from "../../assets/images/icon/content_2.svg";
import content_3 from "../../assets/images/icon/content_3.svg";
import content_4 from "../../assets/images/icon/content_4.svg";

function Content() {
  let data = {
    titleB1: "READY TO USE",
    titleB2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  };

  let dataCard = [
    {
      image: content_1,
      title1: "Users",
      title2: "Lorem ipsum dolor sit amet, consecteturelit, sed do eiusmod ",
    },
    {
      image: content_2,
      title1: "Continue Active Users",
      title2: "Lorem ipsum dolor sit amet, consecteturelit, sed do eiusmod ",
    },
    {
      image: content_3,
      title1: "Worldwide Users",
      title2: "Lorem ipsum dolor sit amet, consecteturelit, sed do eiusmod ",
    },
    {
      image: content_4,
      title1: "Verious Segment",
      title2: "Lorem ipsum dolor sit amet, consecteturelit, sed do eiusmod ",
    },
  ];

  return (
    <>
      <div id="Service"></div>
      <div className="box-bg-content">
        <img className="box-star-1" src={star_1} alt="..." />
        <img className="box-star-2" src={star_2} alt="..." />
      </div>
      <div className="box-content-margin box-bg-line-1" id="mousedown">
        <div
          className="d-flex flex-column justify-content-between"
          style={{ marginTop: "80px" }}
        >
          <div className="container box-content-margin">
            <div className="d-flex flex-wrap gap-3">
              {dataCard.map((item, index) => (
                <div
                  key={item.title1}
                  className="card card-con-box shadow-con w-100"
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
          </div>
        </div>
        <div className="container">
          <div className="d-flex align-items-center box-content-ready py-5">
            <img className="box-device_1" src={device_1} alt="..." />
            <img className="box-device_2" src={device_2} alt="..." />
          </div>
        </div>
        <div className="container px-3 p-sm-0">
          <div className="box-content-margin-ready card card-con shadow-con mt-5 p-5">
            <h2>{data.titleB1}</h2>
            <p>{data.titleB2}</p>
            <div className="text-light Banner">
              <button type="button" className="btn-danger rounded-pill btn-get">
                <a href="/" style={{ textDecoration: "none", color: "#fff" }}>
                  Download Mbiz
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
