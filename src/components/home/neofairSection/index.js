import React from "react";
import "./neofairSection.scss";
import Image6 from "../../../assets/images/icon6.svg";
import Image01 from "../../../assets/images/01.svg";
import Image02 from "../../../assets/images/02.svg";
import Image03 from "../../../assets/images/03.svg";
import Image04 from "../../../assets/images/04.svg";
import Image05 from "../../../assets/images/05.svg";
import Image06 from "../../../assets/images/06.svg";
import Image08 from "../../../assets/images/08.svg";
import Image09 from "../../../assets/images/09.svg";
import Image010 from "../../../assets/images/mobile-05.svg";
import Image5 from "../../../assets/images/5.svg";

import RightIcon from "../../../assets/images/button-right.svg";
import { NavLink } from "react-router-dom";
export default function NeofairSection() {
  return (
    <div>
      <div className="neo-fair-section-all-content-alignment">
        <div className="container-md3">
          <div className="section-title">
            <h4>FE Finance - gemeinsam für deine Zukunft.</h4>
            <p>
              Weil Du zählst! „Beamte haben es gut“ - das ist in Deutschland
              geltende Meinung. Doch sind wir ehrlich: Bevor man verbeamtet ist,
              muss man durch ein hartes Studium, das Staatsexamen bestehen und
              sich dem fordernden Referendariat stellen. In dieser Zeit ist
              Lernen oberstes Gebot. Zukunft- und Versicherungsfragen treten in
              den Hintergrund. Dabei brauchst Du als Studierende:r oder
              Referendar:in GENAU JETZT eine individuelle Beratung. Eine
              Beratung durch ein empathisches Expertenteam, das sich auf die
              Absicherung von angehenden oder frischgebackenen Lehrer:innen
              spezialisiert hat. Kurz gesagt: Du brauchst uns – den Financial
              Guide.
            </p>
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="image-style">
                <img src={Image5} alt="Image5" />
                <img src={Image010} alt="Image010" />
              </div>
            </div>
            <div className="grid-items">
              <div className="white-box">
                <h3>Wir lieben das was wir tun</h3>
                <div className="all-icon-text-grid-alignment">
                  <div className="main-content">
                    <div className="icon-grid">
                      <div className="icon-grid-items">
                        <div className="icon-design">
                          <img src={Image6} alt="Image6" />
                        </div>
                      </div>
                      <div className="icon-grid-items">
                        <h4>300+ zufriedene Kunden</h4>
                      </div>
                    </div>
                    <div className="text-style">
                      <p>
                        Haben sich bereits von unserem Service überzeugen
                        lassen.
                      </p>
                    </div>
                  </div>
                  <div className="main-content">
                    <div className="icon-grid">
                      <div className="icon-grid-items">
                        <div className="icon-design">
                          <img src={Image08} alt="Image08" />
                        </div>
                      </div>
                      <div className="icon-grid-items">
                        <h4>97% Empfehlen unseren Service weiter</h4>
                      </div>
                    </div>
                    <div className="text-style">
                      <p>
                        Alle waren so zufrieden mit uns, das sie uns direkt
                        weiterempfohlen haben
                      </p>
                    </div>
                  </div>
                  <div className="main-content">
                    <div className="icon-grid">
                      <div className="icon-grid-items">
                        <div className="icon-design">
                          <img src={Image09} alt="Image09" />
                        </div>
                      </div>
                      <div className="icon-grid-items">
                        <h4>
                          5/5 Sterne - verifizierte Bewertungen auf Google
                        </h4>
                      </div>
                    </div>
                    <div className="text-style">
                      <p>
                        Wir sind überglücklich, dass ihr unsere Arbeit so gut
                        bewertet. Vielen Dank.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="zun-button">
            <div className="button">
              <NavLink to="/recruiting">
                <button>
                  Zum Erste Hilfe Kurs
                  <img src={RightIcon} alt="RightIcon" />
                </button>
              </NavLink>
            </div>
          </div>
          <div className="icon-image-center-alignment">
            <div>
              <img src={Image01} alt="Image01" />
            </div>
            <div>
              <img src={Image02} alt="Image02" />
            </div>
            <div>
              <img src={Image03} alt="Image03" />
            </div>
            <div>
              <img src={Image04} alt="Image04" />
            </div>
          </div>
          <div className="two-icon-alignment">
            <div>
              <img src={Image05} alt="Image05" />
            </div>
            <div>
              <img src={Image06} alt="Image06" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
