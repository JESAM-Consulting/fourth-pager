import React from "react";
import "./heroBanner.scss";
import FeLogo from "../../../assets/images/logo.svg";
import FeLogoWhite from "../../../assets/images/white-logo.svg";
import { NavLink } from "react-router-dom";
export default function HeroBanner() {
  return (
    <div>
      <div className="hero-banner-design">
        <div className="navbar-container">
          <div className="container-logo">
            <div className="logo">
              <img src={FeLogo} alt="FeLogo" />
              <img src={FeLogoWhite} alt="FeLogoWhite" />
            </div>
          </div>
          <div className="button button-top">
            <NavLink to="/recruiting">
              <button>Zum kostenfreien Erste Hilfe Kurs</button>
            </NavLink>
          </div>
        </div>
        <div className="hero-banner-text">
          <div className="container-md">
            <div className="text-style">
              <h1>Kostenloser Erste-Hilfe-Kurs</h1>
              <h2 className="subtitle">für Deinen Start ins Referendariat</h2>
              <p>
                Du startest bald als Lehrkraft durch? Dann sicher dir jetzt
                deinen kostenlosen Erste-Hilfe-Kurs!
              </p>
              <div className="button">
                <NavLink to="/recruiting">
                  <button>Zum kostenfreien Erste Hilfe Kurs</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
