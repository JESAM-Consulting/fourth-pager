import React from "react";
import "./lauftSection.scss";
import Image1 from "../../../assets/images/card1.png";
import Image001 from "../../../assets/images/001.png";
import Image2 from "../../../assets/images/2.svg";
import Image002 from "../../../assets/images/002.png";
import Image3 from "../../../assets/images/3.svg";
import Image003 from "../../../assets/images/003.png";
import Image4 from "../../../assets/images/4.svg";
import Image004 from "../../../assets/images/004.png";
export default function LauftSection() {
  return (
    <div>
      <div className="lauft-section-all-content-alignment">
        <div className="container-md">
          <div className="section-title">
            <h2>Step by Step - so sicherst du dir deinen Erste-Hilfe-Kurs</h2>
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="image-rounded">
                <img src={Image1} alt="Image1" />
                <img src={Image001} alt="Image001" />
              </div>
              <div className="card-details">
                <div className="counter">1</div>
                <h2>Melde dich über den Button bei uns</h2>
                <p>
                  Nimm jetzt Kontakt mit uns auf und profitiere von echter
                  Expertise von Profis, die sich auf die Absicherung von
                  Lehrkräften spezialisiert haben
                </p>
              </div>
            </div>
            <div className="grid-items">
              <div className="image-rounded">
                <img src={Image2} alt="Image2" />
                <img src={Image002} alt="Image002" />
              </div>
              <div className="card-details">
                <div className="counter">2</div>
                <h2>Du bekommst eine kostenfreie Beratung</h2>
                <p>
                  Kostenfrei Beratung zu Versicherungs- und Finanzfragen durch
                  Menschen, die Dich und deine Situation als Lehrer:in verstehen
                </p>
              </div>
            </div>
            <div className="grid-items">
              <div className="image-rounded">
                <img src={Image3} alt="Image3" />
                <img src={Image003} alt="Image003" />
              </div>
              <div className="card-details">
                <div className="counter">3</div>
                <h2>Du suchst dir einen passenden Termin</h2>
                <p>
                  Erste-Hilfe-Kurs in deiner Nähe. Unsere Kurse werden dank
                  unserer zertifizierten Partner in ganz Deutschland angeboten.
                  Gemeinsam finden wir für dich einen passenden Termin.
                </p>
              </div>
            </div>
            <div className="grid-items">
              <div className="image-rounded">
                <img src={Image4} alt="Image4" />
                <img src={Image004} alt="Image004" />
              </div>
              <div className="card-details">
                <div className="counter">4</div>
                <h2>Nach dem Kurs erhältst du dein Zertifikat</h2>
                <p>
                  Glückwunsch, sobald du den Kurs erfolgreich absolviert hast,
                  erhältst du ein Zertifikat und kannst sorgenfrei in dein
                  Referendariat starten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
