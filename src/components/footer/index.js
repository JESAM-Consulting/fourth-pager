import React from "react";
import "./footer.scss";
import FooterImage from "../../assets/images/footer-image.svg";
import RightIcon from "../../assets/images/right-arrow.svg";
import FacebookIcon from "../../assets/images/facebook.svg";
import InstaIcon from "../../assets/images/insta.svg";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <div className="footer-design-update">
        <div className="container-md6">
          <div className="grid">
            <div className="grid-items">
              <h2>
                Sicher dir jetzt deinen kostenfreien Erste-Hilfe-Kurs in deiner
                Nähe
              </h2>
              <NavLink to="/recruiting">
                <button>
                  <span>Zum Kurs Anmelden</span>
                  <img src={RightIcon} alt="RightIcon" />
                </button>
              </NavLink>
            </div>
            <div className="grid-items">
              <div className="image-style">
                <img src={FooterImage} alt="FooterImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container-md6">
          <div className="footer-alignment">
            <p>
              Copyright © 2022 JESAM Consulting GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="social-icon">
              <img src={FacebookIcon} alt="FacebookIcon" />
              <img src={InstaIcon} alt="InstaIcon" />
            </div>
            <div>
              <NavLink to="/impressum">Impressum</NavLink>
              <a>|</a>
              <NavLink to="/datenschutz">Datenschutz</NavLink>
              <a>|</a>
              <a>Downloads</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
