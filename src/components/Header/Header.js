import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-scroll";

function Header() {
  const [active, setActive] = useState(false);
  const handleSetActive = () => setActive(false);
  return (
    <div className="header">
      <div className="container">
        <nav
          className="navbar navbar-expand-lg navbar-light p-0"
          style={{ background: "none" }}
        >
          <div className="container-fluid position-absolute top-0 my-3">
            <a className="navbar-brand" href="#">
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
                  <li className="nav-item">
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
                </ul>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
