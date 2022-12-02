import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <div>
      <div className="footer-dark">
        <footer>
          <div className="container ">
            <div className="row d-flex justify-content-center">
              <div className="col-sm-6 col-md-3 item ">
                <img
                  src={Logo}
                  className="rounded mb-2"
                  alt="..."
                  style={{ height: "30px", width: "120px" }}
                />
                <ul>
                  <li>
                    <p className="mb-2 text-muted">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </li>
                  <li>
                    <p className="fw-bold text-muted">
                      Don’t forget to follow us
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>Protection</h3>
                <ul>
                  <li>
                    <a href="/">Security & Safety</a>
                  </li>
                  <li>
                    <a href="/">Mornitoring</a>
                  </li>
                  <li>
                    <a href="/">Management</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>Legals</h3>
                <ul>
                  <li>
                    <a href="/">Refund Policy</a>
                  </li>
                  <li>
                    <a href="/">Licence</a>
                  </li>
                  <li>
                    <a href="/">Privacy</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item text">
                <h3>Contact Us</h3>
                <ul>
                  <li>
                    <a href="/">Email join-@themall.co.th</a>
                  </li>
                  <li>
                    <a href="/">Phone +(66) 8 980 - 3049</a>
                  </li>
                  <li>
                    <a href="/">Address Themall Bangkok</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
