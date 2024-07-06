import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-04">
      <div className="footer-container">
        <div className="row d-flex">
          <div className="col-md-12 text-center">
            <h2 className="footer-heading">
              <a href="/home" className="logo">
                ScrubsNepal.com
              </a>
            </h2>
            <div className="menu">
              <a href="#">Home</a>
              <a href="#">Agent</a>
              <a href="#">About</a>
              <a href="#">Listing</a>
              <a href="#">Blog</a>
              <a href="/contact">Contact</a>
            </div>
            <ul className="ftco-footer-social p-0">
              {[
                { href: "https://twitter.com", icon: "icons8-twitterx.svg" },
                { href: "https://facebook.com", icon: "icons8-facebook.svg" },
                { href: "https://instagram.com", icon: "icons8-instagram.svg" },
              ].map((item, index) => (
                <li key={index} className="ftco-animate">
                  <a
                    href={item.href}
                    data-toggle="tooltip"
                    data-placement="top"
                    title={item.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={item.icon}
                      alt={`${item.title} Icon`}
                      className="social-icon"
                      width="40"
                      height="40"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="copyright">
              Copyright © {new Date().getFullYear()} All rights reserved | This
              template is made with{" "}
              <i className="ion-ios-heart" aria-hidden="true"></i> by{" "}
              <a
                href="https://scrubsnepal.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ScrubsNepal.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
