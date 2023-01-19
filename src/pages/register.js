import React, { useState, useEffect } from "react";

import Logo from "../assets/images/logo.svg";
import iconShow from "../assets/images/icon/show.svg";
import iconHidden from "../assets/images/icon/hidden.svg";

function Register() {
  const [active, setActive] = useState(false);
  const handleActiveLink = (number) => {
    if (number) {
      setActive(true);
    }
  };

  const toggleNavbar = () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;

      document.getElementById("navbar").style.backgroundColor = "transparent";
      if (prevScrollpos > currentScrollPos) {
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
      prevScrollpos = currentScrollPos;
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

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="bannerimage-register position-relative">
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
                    <a
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
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
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
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
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
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
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
                    </a>
                  </li>
                  <li className="nav-item me-2">
                    <a
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
                    </a>
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
        <div className="container">
          <div className="d-flex flex-column gap-5 register-padding">
            <label className="text-header-form text-center">
              ลงทะเบียนร้านค้าใหม่
            </label>
            <form className="row g-3 needs-validation" novalidate>
              <div className="col-12 col-md-6 position-relative">
                <label className="text-title-form mb-3">
                  ลงทะเบียนร้านค้าใหม่
                </label>
                <div className="row">
                  <div className="col-12 mb-3">
                    <input
                      type="email"
                      className="form-control form-input-custom"
                      placeholder="อีเมล"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <div className="input-group has-validation">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control form-input-custom"
                        placeholder="รหัสผ่าน (a-z, A-Z, 0-9 -หรือ_ อย่างน้อย 6 ตัว)"
                        autoComplete="new-password"
                        required
                      />
                      <span
                        className="input-group-text"
                        type="button"
                        onClick={() => {
                          toggleShowPassword();
                        }}
                        style={{ borderRadius: "0px 10px 10px 0px" }}
                      >
                        <img
                          src={showPassword ? iconHidden : iconShow}
                          alt="..."
                        />
                      </span>
                      <div className="invalid-tooltip"></div>
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="input-group has-validation">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control form-input-custom"
                        placeholder="ยืนยันรหัสผ่าน (a-z, A-Z, 0-9 -หรือ_ อย่างน้อย 6 ตัว)"
                        autoComplete="new-password"
                        required
                      />
                      <span
                        className="input-group-text"
                        type="button"
                        onClick={() => {
                          toggleShowPassword();
                        }}
                        style={{ borderRadius: "0px 10px 10px 0px" }}
                      >
                        <img
                          src={showPassword ? iconHidden : iconShow}
                          alt="..."
                        />
                      </span>
                      <div className="invalid-tooltip"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 position-relative">
                <label className="text-title-form mb-3">ข้อมูลผู้ติดต่อ</label>
                <div className="row">
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control form-input-custom"
                      placeholder="ชื่อผู้ติดต่อ"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control form-input-custom"
                      placeholder="ชื่อร้านค้าหรือบริษัท (TH)"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control form-input-custom"
                      placeholder="ชื่อร้านค้าหรือบริษัท (EN)"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <textarea
                      type="text"
                      className="form-control form-input-custom"
                      placeholder="ที่อยู่บริษัท"
                      rows={4}
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="email"
                      className="form-control form-input-custom"
                      placeholder="ฮีเมลร้านค้าหรือบริษัท"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control form-input-custom"
                      placeholder="เบอร์โทรศัพท์"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="text-light Banner">
                  <button
                    className="btn btn-danger rounded-pill btn-get w-100"
                    type="button"
                  >
                    <b>ส่งข้อมูล</b>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
