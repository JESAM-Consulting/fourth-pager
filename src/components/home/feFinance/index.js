import React, { useState } from "react";
import "./feFinance.scss";
import FragenIcon from "../../../assets/images/fragen.png";
import CloseIcon from "../../../assets/images/close.svg";
export default function FeFinance() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [modalOpen4, setModalOpen4] = useState(false);
  const [modalOpen5, setModalOpen5] = useState(false);

  return (
    <div>
      <div className="fe-finance-all-content-alignment">
        <div className="container-md5">
          <div className="section-title">
            <span>FE FINANCE</span>
            <p>Die häufigsten Fragen</p>
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="left-side-text-alignment">
                <div
                  className="plus-text-icon-alignment-for-page"
                  onClick={() => setModalOpen(!modalOpen)}
                >
                  <p>Wo finden die Erste-Hilfe-Kurse statt?</p>
                  <i class="fa-solid fa-plus"></i>
                </div>
                <div
                  className="plus-text-icon-alignment-for-page"
                  onClick={() => setModalOpen2(!modalOpen2)}
                >
                  <p className="sec-question-top-align">
                    Wie läuft das Beratungsgespräch ab?
                  </p>
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="image-design">
                <img src={FragenIcon} alt="FragenIcon" />
              </div>
            </div>
            <div className="grid-items">
              <div className="right-text">
                <div
                  className="plus-text-icon-alignment-for-page"
                  onClick={() => setModalOpen3(!modalOpen3)}
                >
                  <p>Kann die Beratung auch online stattfinden?</p>
                  <i class="fa-solid fa-plus"></i>{" "}
                </div>
                <div
                  className="plus-text-icon-alignment-for-page"
                  onClick={() => setModalOpen4(!modalOpen4)}
                >
                  <p>Warum FE Finance?</p>
                  <i class="fa-solid fa-plus"></i>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fe-finace-modal-wrapper">
          <div className="fe-finace-modal">
            <div
              className="close-right-alignment"
              onClick={() => setModalOpen(!modalOpen)}
            >
              <img src={CloseIcon} alt="CloseIcon" />
            </div>
            <h2>Wo finden die Erste-Hilfe-Kurse statt?</h2>
            <p>
              Unsere Kurse finden in ganz Deutschland bei unseren zertifizierten
              Partnern statt. Dazu gehören beispielsweise das Deutsche Rote
              Kreuz, Malteser und M-A-U-S gGmbH.
            </p>
          </div>
        </div>
      )}

      {modalOpen2 && (
        <div className="fe-finace-modal-wrapper">
          <div className="fe-finace-modal">
            <div
              className="close-right-alignment"
              onClick={() => setModalOpen2(!modalOpen2)}
            >
              <img src={CloseIcon} alt="CloseIcon" />
            </div>
            <h2>Wie läuft das Beratungsgespräch ab?</h2>
            <p>
              An der Universität hast Du viel gelernt. Aber bei den Themen
              Vorsorge und Versicherungen sieht es auf dem Lehrplan mau aus.
              Doch jetzt sind wir für dich da und zeigen dir, worauf es wirklich
              ankommt.
            </p>
          </div>
        </div>
      )}

      {modalOpen3 && (
        <div className="fe-finace-modal-wrapper">
          <div className="fe-finace-modal">
            <div
              className="close-right-alignment"
              onClick={() => setModalOpen3(!modalOpen3)}
            >
              <img src={CloseIcon} alt="CloseIcon" />
            </div>
            <h2> Kann die Beratung auch online stattfinden?</h2>
            <p>
              Du kannst dich sowohl persönlich als auch online beraten lassen.
              Wenn du hierzu Fragen hast, komme gerne auf uns zu.
            </p>
          </div>
        </div>
      )}

      {modalOpen4 && (
        <div className="fe-finace-modal-wrapper">
          <div className="fe-finace-modal">
            <div
              className="close-right-alignment"
              onClick={() => setModalOpen4(!modalOpen4)}
            >
              <img src={CloseIcon} alt="CloseIcon" />
            </div>
            <h2> Warum FE Finance?</h2>
            <p>
              Mit FE Finance kannst du gelassen in deine Zukunft als Lehrkraft
              blicken. Denn von uns bekommst du alles mit an die Hand, was du
              für einen sorgenfreien Start ins Referendariat benötigst.
            </p>
            <br />
            <h4>Unsere Mehrwerte auf einen Blick:</h4>
            <div className="text-grid">
              <div className="text-grid-items">
                <i class="fa-solid fa-check"></i>
              </div>
              <div className="text-grid-items">
                <span>
                  {" "}
                  Individuelle Beratung für Student*innen, Referendar*innen und
                  Lehrer*innen
                </span>
              </div>
            </div>
            <div className="text-grid">
              <div className="text-grid-items">
                <i class="fa-solid fa-check"></i>
              </div>
              <div className="text-grid-items">
                <span>
                  {" "}
                  Maßgeschneiderte Versicherungen und Sparlösungen für Deinen
                  Lifestyle
                </span>
              </div>
            </div>
            <div className="text-grid">
              <div className="text-grid-items">
                <i class="fa-solid fa-check"></i>
              </div>
              <div className="text-grid-items">
                <span>
                  Unabhängige Lösungen ohne Bindung an konkrete
                  Versicherungsgesellschaften
                </span>
              </div>
            </div>
            <div className="text-grid">
              <div className="text-grid-items">
                <i class="fa-solid fa-check"></i>
              </div>
              <div className="text-grid-items">
                <span>
                  Smarte Empfehlungen, die Dir eine Menge Geld einsparen
                </span>
              </div>
            </div>
            <div className="text-grid">
              <div className="text-grid-items">
                <i class="fa-solid fa-check"></i>
              </div>
              <div className="text-grid-items">
                <span>
                  {" "}
                  Echte Expertise von Profis, die sich auf die Absicherung von
                  Lehrkräften spezialisiert haben
                </span>
              </div>
            </div>
            <div className="text-grid">
              <div className="text-grid-items">
                <i class="fa-solid fa-check"></i>
              </div>
              <div className="text-grid-items">
                <span> Verbraucherschutzkonform nach DIN 77230</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
