import React, { useState, useEffect } from "react";

import Logo from "../../assets/images/logo.svg";
import { Link } from "react-scroll";
import { BsMouse } from "react-icons/bs";

function Banner() {
  const [active, setActive] = useState(false);
  const handleActiveLink = (number) => {
    if (number) {
      setActive(true);
    }
  };
  let data = {
    title1: "BRING FUTURE CUSTOMERS",
    title2: "TO YOUR BUSINESS WITH INSIGTH.",
    titleB1: "M-BUSINESS",
    titleB2:
      "ครบวงจร ใช้งานง่าย รองรับทุกแพลตฟอร์ม ครอบคลุมฐานข้อมูลลูกค้ากว่า 5 ล้านคน ตอบโจทย์ทุกความต้องการของธุรกิจคุณ  ด้วย 4 บริการหลัก",
  };

  const toggleNavbar = () => {
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;

      document.getElementById("navbar").style.backgroundColor = "transparent";
      if (currentScrollPos < 500) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.boxShadow = "unset";
      } else {
        if (window.innerWidth < 992) {
          document.getElementById("navbar").style.backgroundColor = "#000000";
        }
        document.getElementById("navbar").style.backgroundColor = "#000000";
        document.getElementById("navbar").style.boxShadow =
          "-5px -5px 20px #F2F3F7, 5px 5px 15px #3a3a3a7e";
      }
    };
  };

  const toggleShowNavbar = () => {
    document.getElementById("navbar").style.backgroundColor = "#000000";
  };

  const toggleRemoveNavbar = () => {
    document.getElementById("navbarSupportedContent").classList.remove("show");
  };

  useEffect(() => {
    toggleNavbar();
  }, []);

  return (
    <>
      <div className="bannerimage position-relative">
        <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
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
              onClick={() => {
                toggleShowNavbar();
              }}
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
                      onClick={() => {
                        handleActiveLink(1);
                        toggleRemoveNavbar();
                      }}
                      href="/"
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
                      onClick={() => {
                        handleActiveLink(2);
                        toggleRemoveNavbar();
                      }}
                      href="/"
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
                      onClick={() => {
                        handleActiveLink(3);
                        toggleRemoveNavbar();
                      }}
                      href="/"
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
                      onClick={() => {
                        handleActiveLink(4);
                        toggleRemoveNavbar();
                      }}
                      href="/"
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
                      onClick={() => {
                        handleActiveLink(5);
                        toggleRemoveNavbar();
                      }}
                      href="/"
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
              <button type="button" className="btn-danger rounded-pill btn-get">
                <a
                  href="https://uat.mcardbiz.com/login"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
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
                href="/"
              >
                <BsMouse className="icon-mousedown mb-2"></BsMouse>
                <p className="writing-mode">More Info</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center position-absolute w-100 px-3 px-lg-0 bottom-custom">
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
    </>
  );
}

export default Banner;
