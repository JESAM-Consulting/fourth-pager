import React from "react";
import "./duStehstSection.scss";
import CheckIcon from "../../../assets/images/check.svg";
import { NavLink } from "react-router-dom";
export default function DuStehstSection() {
  return (
    <div>
      <div className="de-stechst-section-all-content-alignment">
        <div className="container-md2">
          <div className="section-title">
            <h2>
              Dein Mehrwert: Gelassen in die Zukunft blicken. Während du dich
              entspannen kannst, kümmern wir uns um den Rest.
            </h2>
          </div>
          <div className="three-content-alignment">
            <div className="content-text">
              <div className="icon-grid">
                <div className="icon-grid-items">
                  <img src={CheckIcon} alt="CheckIcon" />
                </div>
                <div className="icon-grid-items">
                  <span>
                    Zertifizierte Ausbildung zum Ersthelfer (9
                    Unterrichtseinheiten)
                  </span>
                </div>
              </div>
            </div>
            <div className="content-text">
              <div className="icon-grid">
                <div className="icon-grid-items">
                  <img src={CheckIcon} alt="CheckIcon" />
                </div>
                <div className="icon-grid-items">
                  <span> Dir entstehen zu 100% keine Kosten</span>
                </div>
              </div>
            </div>
            <div className="content-text">
              <div className="icon-grid">
                <div className="icon-grid-items">
                  <img src={CheckIcon} alt="CheckIcon" />
                </div>
                <div className="icon-grid-items">
                  <span>Dein Bonus: Kostenfreies Beratungsgespräch</span>
                </div>
              </div>
            </div>
          </div>
          <p>
            Gemeinsam sorgen wir dafür, dass Deiner Zukunft als Lehrkraft nichts
            mehr im Weg steht. Wir unterstützen dich dabei, die richtigen
            Entscheidungen vor, während und nach dem Referendariat zu treffen.
          </p>
          <div className="button">
            <NavLink to="/recruiting">
              <button>
                Sicher dir jetzt Deinen kostenfreien Erste Hilfe Kurs in wenigen
                Sekunden
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
