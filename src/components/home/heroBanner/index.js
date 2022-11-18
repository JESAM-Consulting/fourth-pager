import React from "react";
import "./heroBanner.scss";
import FeLogo from "../../../assets/images/logo.svg";
import FeLogoWhite from "../../../assets/images/white-logo.svg";
import { NavLink } from "react-router-dom";
export default function HeroBanner() {
  return (
    <div>
      <div className="hero-banner-design">
        <div className="logo">
          <img src={FeLogo} alt="FeLogo" />
          <img src={FeLogoWhite} alt="FeLogoWhite" />
        </div>
        <div className="hero-banner-text">
          <div className="container-md">
            <div className="text-style">
              <h1>
                Kostenloser Erste-Hilfe-Kurs für Deinen Start{" "}
                <span>ins Referendariat</span>
              </h1>
              <p>
                Du startest bald als Lehrkraft durch? Dann sicher dir jetzt
                deinen kostenlosen Erste-Hilfe-Kurs!
              </p>
              <div className="button">
                <NavLink to="/recruiting">
                  <button>
                    Sicher dir jetzt Deinen kostenfreien Erste Hilfe Kurs in
                    wenigen Sekunden
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
