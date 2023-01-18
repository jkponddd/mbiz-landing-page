import React, { useState } from "react";

import adidas from "../../assets/images/partner/partner_1.svg";
import ape from "../../assets/images/partner/partner_2.svg";
import aiiz from "../../assets/images/partner/partner_3.svg";
import anello from "../../assets/images/partner/partner_4.svg";
import aldo from "../../assets/images/partner/partner_5.svg";
import ax from "../../assets/images/partner/partner_6.svg";
import xl from "../../assets/images/partner/partner_7.svg";
import victoria from "../../assets/images/partner/partner_8.svg";
import viera from "../../assets/images/partner/partner_9.svg";
import vilebrequin from "../../assets/images/partner/partner_10.svg";
import warehouse from "../../assets/images/partner/partner_11.svg";
import wienna from "../../assets/images/partner/partner_12.svg";
import wika from "../../assets/images/partner/partner_13.svg";
import xact from "../../assets/images/partner/partner_14.svg";
import veena from "../../assets/images/partner/partner_15.svg";
import yuedpao from "../../assets/images/partner/partner_16.svg";
import zara from "../../assets/images/partner/partner_17.svg";
import zein from "../../assets/images/partner/partner_18.svg";

import image1 from "../../assets/images/testimonial/testimonial_1.jpg";
import image2 from "../../assets/images/testimonial/testimonial_2.jpg";
import image3 from "../../assets/images/testimonial/testimonial_3.jpg";
import image4 from "../../assets/images/testimonial/testimonial_4.jpg";
import image5 from "../../assets/images/testimonial/testimonial_5.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Partners() {
  let data = {
    title: "M-Business Partners",
  };

  let Partners = {
    Partner1: "Fashion",
    Partner2: "Resturant & Cafe",
    Partner3: "Travel",
    Partner4: "Entertainment",
    Partner5: "Health & Welness",
  };

  let dataFashion = [
    {
      image: adidas,
    },
    {
      image: ape,
    },
    {
      image: aiiz,
    },
    {
      image: anello,
    },
    {
      image: aldo,
    },
    {
      image: ax,
    },
    {
      image: xl,
    },
    {
      image: victoria,
    },
    {
      image: viera,
    },
    {
      image: vilebrequin,
    },
    {
      image: warehouse,
    },
    {
      image: wienna,
    },
    {
      image: wika,
    },
    {
      image: xact,
    },
    {
      image: veena,
    },
    {
      image: yuedpao,
    },

    {
      image: zara,
    },
    {
      image: zein,
    },
  ];

  let dataResturantCafe = [
    {
      image: adidas,
    },
    {
      image: ape,
    },
    {
      image: aiiz,
    },
    {
      image: anello,
    },
    {
      image: aldo,
    },
    {
      image: ax,
    },
    {
      image: xl,
    },
    {
      image: victoria,
    },
  ];

  let dataTravel = [
    {
      image: adidas,
    },
    {
      image: wika,
    },
    {
      image: xact,
    },
    {
      image: veena,
    },
  ];

  let dataEntertainment = [
    {
      image: adidas,
    },
    {
      image: ape,
    },
    {
      image: aiiz,
    },
    {
      image: anello,
    },
    {
      image: aldo,
    },
    {
      image: ax,
    },
    {
      image: veena,
    },
    {
      image: yuedpao,
    },

    {
      image: zara,
    },
    {
      image: zein,
    },
  ];

  let dataHealthWelness = [
    {
      image: victoria,
    },
    {
      image: viera,
    },
    {
      image: vilebrequin,
    },
    {
      image: warehouse,
    },
    {
      image: wienna,
    },
    {
      image: wika,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop1: {
      breakpoint: { max: 3000, min: 1320 },
      items: 4,
    },
    desktop2: {
      breakpoint: { max: 1320, min: 960 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 960, min: 720 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 720, min: 0 },
      items: 1,
    },
  };

  const [checkTabs, setCheckTabs] = useState(1);
  return (
    <>
      <div
        className="bg-Partners"
        id="Partner"
        style={{ height: "auto", width: "100%" }}
      >
        <div className="container">
          <div className="Partners flex-column align-items-center ">
            <div className="box-title-insight">
              <div>
                <h1 className="box-text-insight">{data.title}</h1>
              </div>
              <div className="btn-container-Partners">
                <button
                  className={`card-Partners mx-2 mt-3 btn-Partners ${
                    checkTabs === 1 ? "active" : ""
                  }`}
                  onClick={() => {
                    setCheckTabs(1);
                  }}
                >
                  <p className="card-text">{Partners.Partner1}</p>
                </button>
                <button
                  className={`card-Partners mx-2 mt-3 btn-Partners ${
                    checkTabs === 2 ? "active" : ""
                  }`}
                  onClick={() => {
                    setCheckTabs(2);
                  }}
                >
                  <p className="card-text">{Partners.Partner2}</p>
                </button>
                <button
                  className={`card-Partners mx-2 mt-3 btn-Partners ${
                    checkTabs === 3 ? "active" : ""
                  }`}
                  onClick={() => {
                    setCheckTabs(3);
                  }}
                >
                  <p className="card-text">{Partners.Partner3}</p>
                </button>
                <button
                  className={`card-Partners mx-2 mt-3 btn-Partners ${
                    checkTabs === 4 ? "active" : ""
                  }`}
                  onClick={() => {
                    setCheckTabs(4);
                  }}
                >
                  <p className="card-text">{Partners.Partner4}</p>
                </button>
                <button
                  className={`card-Partners mx-2 mt-3 btn-Partners ${
                    checkTabs === 5 ? "active" : ""
                  }`}
                  onClick={() => {
                    setCheckTabs(5);
                  }}
                >
                  <p className="card-text">{Partners.Partner5}</p>
                </button>
              </div>
            </div>
            {checkTabs === 1 ? (
              <>
                <div
                  className="d-flex  align-items-center justify-content-center flex-wrap my-5 "
                  style={{ height: "auto", width: "85%" }}
                >
                  {dataFashion.map((item) => (
                    <div key={item.image} className="img-Partners m-3 ">
                      <img src={item.image} alt="..." />
                    </div>
                  ))}
                </div>
              </>
            ) : checkTabs === 2 ? (
              <>
                <div
                  className="d-flex  align-items-center justify-content-center flex-wrap my-5 "
                  style={{ height: "auto", width: "85%" }}
                >
                  {dataResturantCafe.map((item) => (
                    <div key={item.image} className="img-Partners m-3 ">
                      <img src={item.image} alt="..." />
                    </div>
                  ))}
                </div>
              </>
            ) : checkTabs === 3 ? (
              <>
                <div
                  className="d-flex  align-items-center justify-content-center flex-wrap my-5 "
                  style={{ height: "auto", width: "85%" }}
                >
                  {dataTravel.map((item) => (
                    <div key={item.image} className="img-Partners m-3 ">
                      <img src={item.image} alt="..." />
                    </div>
                  ))}
                </div>
              </>
            ) : checkTabs === 4 ? (
              <>
                <div
                  className="d-flex  align-items-center justify-content-center flex-wrap my-5 "
                  style={{ height: "auto", width: "85%" }}
                >
                  {dataEntertainment.map((item) => (
                    <div key={item.image} className="img-Partners m-3 ">
                      <img src={item.image} alt="..." />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div
                  className="d-flex  align-items-center justify-content-center flex-wrap my-5 "
                  style={{ height: "auto", width: "85%" }}
                >
                  {dataHealthWelness.map((item) => (
                    <div key={item.image} className="img-Partners m-3 ">
                      <img src={item.image} alt="..." />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <div style={{ marginBottom: "100px" }}>
          <Carousel
            swipeable={false}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={[
              "superLargeDesktop",
              "desktop1",
              "desktop2",
              "tablet",
              "mobile",
            ]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="d-flex justify-content-center">
              <img className="box-carousel-image" src={image1} alt="..." />
            </div>
            <div className="d-flex justify-content-center">
              <img className="box-carousel-image" src={image2} alt="..." />
            </div>
            <div className="d-flex justify-content-center">
              <img className="box-carousel-image" src={image3} alt="..." />
            </div>
            <div className="d-flex justify-content-center">
              <img className="box-carousel-image" src={image4} alt="..." />
            </div>
            <div className="d-flex justify-content-center">
              <img className="box-carousel-image" src={image5} alt="..." />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Partners;
