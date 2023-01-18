import React from "react";

import Logo from "../../assets/images/logo.svg";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row d-flex justify-content-between pt-5 pb-5">
              <div className="col-sm-6 col-md-3 item text ">
                <img
                  src={Logo}
                  className="rounded mb-2"
                  alt="..."
                  style={{ height: "35px", width: "150px" }}
                />
                <ul>
                  <li className="mb-3">
                    <p className="mb-2">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </li>
                  <li className="mb-3">
                    <p className="fw-bold">Don’t forget to follow us</p>
                  </li>
                </ul>
                <div className="col item social mt-3">
                  <a href="/">
                    <i className="icon-footer">
                      <FaFacebookF />
                    </i>
                  </a>
                  <a href="/">
                    <i className="icon-footer">
                      <FaInstagram />
                    </i>
                  </a>
                  <a href="/">
                    <i className="icon-footer">
                      <FaYoutube />
                    </i>
                  </a>
                  <a href="/">
                    <i className="icon-footer">
                      <FaTiktok />
                    </i>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>Protection</h3>
                <ul>
                  <li className="mb-3">
                    <a href="/">Security & Safety</a>
                  </li>
                  <li className="mb-3">
                    <a href="/">Mornitoring</a>
                  </li>
                  <li className="mb-3">
                    <a href="/">Management</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>Legals</h3>
                <ul>
                  <li className="mb-3">
                    <a href="/">Refund Policy</a>
                  </li>
                  <li className="mb-3">
                    <a href="/">Licence</a>
                  </li>
                  <li className="mb-3">
                    <a href="/">Privacy</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item text">
                <h3>Contact Us</h3>
                <ul>
                  <li className="mb-3">
                    <a href="/">Email join-@themall.co.th</a>
                  </li>
                  <li className="mb-3">
                    <a href="/">Phone +(66) 8 980 - 3049</a>
                  </li>
                  <li className="mb-3">
                    <a href="/">Address Themall Bangkok</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-top border-dark">
            <div className="container">
              <div className="foot-end item text m-0">
                <p>© 2022 Mbusiness. All rights reserved.</p>
                <div className="foot-text item text m-0">
                  <p>Term and Conditions</p>
                  <p>|</p>
                  <p>Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
