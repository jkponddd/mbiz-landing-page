import React, { useState } from "react";
import "./Partners.css";

import adidas from "../../assets/images/adidas.png";
import ape from "../../assets/images/ape.png";
import aiiz from "../../assets/images/aiiz.png";
import anello from "../../assets/images/anello.png";
import aldo from "../../assets/images/aldo.png";
import ax from "../../assets/images/ax.png";
import xl from "../../assets/images/xl.png";
import victoria from "../../assets/images/victoria.png";
import viera from "../../assets/images/viera.png";
import vilebrequin from "../../assets/images/vilebrequin.png";
import warehouse from "../../assets/images/warehouse.png";
import wienna from "../../assets/images/wienna.png";
import wika from "../../assets/images/wika.png";
import xact from "../../assets/images/xact.png";
import veena from "../../assets/images/veena.png";
import yuedpao from "../../assets/images/yuedpao.png";
import zara from "../../assets/images/zara.png";
import zein from "../../assets/images/zein.png";

import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";

function Partners() {
  const [currImg, setCurrImg] = useState(0);
  let data = {
    title1: "M Business Partners",
  };

  let Partners = {
    Partner1: "Fashion",
    Partner2: "Resturant & Cafe",
    Partner3: "Travel",
    Partner4: "Entertainment",
    Partner5: "Health & Welness",
  };

  let dataImage = [
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

  return (
    <>
      <div
        className="bg-light  d-flex "
        id="Partner"
        style={{ height: "auto", width: "100%" }}
      >
        <div className="container">
          <div className="title-Partners flex-column align-items-center ">
            <div className="d-flex mb-5">
              <h1 className="title1-Partners fw-bold">{data.title1}</h1>
              <div className="d-flex flex-wrap justify-content-end">
                <div className="card-Partners m-3 ">
                  <p className="card-text  fw-bold">{Partners.Partner1}</p>
                </div>
                <div className="card-Partners m-3">
                  <p className="card-text ">{Partners.Partner2}</p>
                </div>
                <div className="card-Partners m-3">
                  <p className="card-text">{Partners.Partner3}</p>
                </div>
                <div className="card-Partners m-3">
                  <p className="card-text">{Partners.Partner4}</p>
                </div>
                <div className="card-Partners m-3">
                  <p className="card-text">{Partners.Partner5}</p>
                </div>
              </div>
            </div>
            <div
              className="d-flex  align-items-center justify-content-center flex-wrap my-5 "
              style={{ height: "auto", width: "85%" }}
            >
              {dataImage.map((item) => (
                <div key={item.image} className="img-Partners m-3">
                  <img src={item.image} alt="..." />
                </div>
              ))}
            </div>
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
              style={{ height: "500px", width: "400px" }}
            >
              <div>
                <div class="carousel-item active" data-bs-interval="200000">
                  <img src={image1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item " data-bs-interval="200000">
                  <img src={image2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item " data-bs-interval="200000">
                  <img src={image3} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item " data-bs-interval="200000">
                  <img src={image4} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="200000">
                  <img src={image5} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
