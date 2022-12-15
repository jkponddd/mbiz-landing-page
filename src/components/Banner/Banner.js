import React, { useState } from "react";
import "./Banner.css";

import Logo from "../../assets/images/logo.png";
import { Link } from "react-scroll";
import { BsMouse } from "react-icons/bs";

function Banner() {
  const [active, setActive] = useState(false);
  const handleSetActive = () => setActive(false);
  let data = {
    title1: "BRING FUTURE CUSTOMERS",
    title2: "TO YOUR BUSINESS WITH INSIGTH.",
    titleB1: "M BUSINESS",
    titleB2:
      "Marketing solutions for Business  that help you connect and grow your business with our x perspective view from the Mall group.",
  };

  return (
    <>
      <div className="bannerimage">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container  mt-3">
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
              className="collapse navbar-collapse justify-content-end "
              id="navbarSupportedContent"
            >
              <form className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
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

                  <li>
                    <button
                      type="button"
                      class="btn btn-outline-light  rounded-pill btn-nav me-3"
                    >
                      Register
                    </button>

                    <button
                      type="button"
                      class="btn btn-danger rounded-pill btn-nav"
                    >
                      Login
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </nav>
        <div className="container" id="Home">
          <div className="container-Banner">
            <div className="text-light Banner">
              <h1 className="mb-3">{data.title1}</h1>
              <h3 className="mb-4">{data.title2}</h3>
              <button type="button" className="btn-danger rounded-pill btn-get">
                Get Started
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
                <p className="writing-mode ms-1">More Info</p>
              </Link>
            </div>
            <div className="card-Banner shadow-Banner ">
              <div>
                <h2 className="mb-2">{data.titleB1}</h2>
                <p className="card-Text">{data.titleB2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
