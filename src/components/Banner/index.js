import React, { useState } from "react";

import Logo from "../../assets/images/logo.svg";
import { Link } from "react-scroll";
import { BsMouse } from "react-icons/bs";

function Banner() {
  const [active, setActive] = useState(false);
  const handleSetActive = () => setActive(false);
  let data = {
    title1: "BRING FUTURE CUSTOMERS",
    title2: "TO YOUR BUSINESS WITH INSIGTH.",
    titleB1: "M-BUSINESS",
    titleB2:
      "ครบวงจร ใช้งานง่าย รองรับทุกแพลตฟอร์ม ครอบคลุมฐานข้อมูลลูกค้ากว่า 5 ล้านคน ตอบโจทย์ทุกความต้องการของธุรกิจคุณ  ด้วย 4 บริการหลัก",
  };

  return (
    <>
      <div className="bannerimage">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container my-3">
            <a className="navbar-brand" href="/">
              <img src={Logo} className="rounded float-start" alt="..." />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <div>
                <ul className="d-flex navbar-nav gap-0 gap-lg-3">
                  <li className={active ? "nav-item active" : "nav-item"}>
                    <Link
                      className="nav-link text-light"
                      to="Home"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      onSetActive={handleSetActive}
                      href="#"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-light"
                      to="Service"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      onSetActive={handleSetActive}
                      href="#"
                    >
                      Service
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-light"
                      to="Benefit"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      onSetActive={handleSetActive}
                      href="#"
                    >
                      Benefit
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-light"
                      to="Partner"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      onSetActive={handleSetActive}
                      href="#"
                    >
                      Partner
                    </Link>
                  </li>
                  <li className="nav-item me-2">
                    <Link
                      className="nav-link text-light"
                      to="FAQs"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      onSetActive={handleSetActive}
                      href="#"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li className="d-flex gap-3 flex-fill d-lg-block">
                    <a
                      href="/register"
                      type="button"
                      className="btn btn-outline-light rounded-pill btn-nav me-0 me-lg-4"
                    >
                      Register
                    </a>
                    <a
                      href="https://uat.mcardbiz.com/login"
                      type="button"
                      className="btn btn-danger rounded-pill btn-nav"
                    >
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="container" id="Home">
          <div className="d-flex flex-column gap-5 box-content">
            <div
              className="text-light Banner"
              style={{ textShadow: "#00000080 2px 2px 6px" }}
            >
              <h1 className="mb-3">{data.title1}</h1>
              <h3>{data.title2}</h3>
            </div>
            <div className="text-light Banner">
              {" "}
              <button type="button" className="btn-danger rounded-pill btn-get">
                <a href="#" style={{ textDecoration: "none", color: "#fff" }}>
                  Get Started
                </a>
              </button>
            </div>
            <div className="mousedown">
              <Link
                className="nav-link text-light"
                to="mousedown"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
                href="#"
              >
                <BsMouse className="icon-mousedown mb-2"></BsMouse>
                <p className="writing-mode">More Info</p>
              </Link>
            </div>

            <div className="box-card-banner">
              <div className="row">
                <div>
                  <h1 className="title-card-banner mb-2">{data.titleB1}</h1>
                  <p className="card-Text">{data.titleB2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
