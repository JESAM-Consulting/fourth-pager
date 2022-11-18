import React, { useState } from "react";
import "./feFinance.scss";
import FragenIcon from "../../../assets/images/fragen.svg";
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
                <div>
                  <p onClick={() => setModalOpen(!modalOpen)}>
                    Wo bietet ihr Erste-Hilfe-Kurse an?
                  </p>
                </div>
                <div>
                  <p onClick={() => setModalOpen2(!modalOpen2)}>
                    Wie finden die Termine statt?
                  </p>
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
                <div>
                  <p onClick={() => setModalOpen3(!modalOpen3)}>
                    Wie garantiert ihr eine unabhängige und individuelle
                    Beratung?
                  </p>
                </div>
                <div>
                  <p onClick={() => setModalOpen4(!modalOpen4)}>
                    Mit welchem Partner Arbeitet ihr zusammen?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bottom-text"
            onClick={() => setModalOpen5(!modalOpen5)}
          >
            <p>Was sind Inhalte der Beratung zum Start ins Referendariat?</p>
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
            <h2>Wo bietet ihr Erste-Hilfe-Kurse an?</h2>
            <p>
              Lorem ipsum dolor sit amet. Non consequatur molestiae rem debitis
              voluptatibus sed blanditiis commodi sit maiores repellat. Nam
              provident rerum qui illo eaque vel pariatur totam sed quia quaerat
              et veritatis quos et eligendi atque cum eaque soluta! Sed dolores
              eaque eum voluptate aliquam vel harum nihil sed porro magni est
              rerum natus rem necessitatibus veniam aut explicabo dicta. Et
              illum accusantium cum omnis rerum ut eius optio qui consequatur
              maiores qui ducimus internos.
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
            <h2>Wie finden die Termine statt?</h2>
            <p>
              Lorem ipsum dolor sit amet. Non consequatur molestiae rem debitis
              voluptatibus sed blanditiis commodi sit maiores repellat. Nam
              provident rerum qui illo eaque vel pariatur totam sed quia quaerat
              et veritatis quos et eligendi atque cum eaque soluta! Sed dolores
              eaque eum voluptate aliquam vel harum nihil sed porro magni est
              rerum natus rem necessitatibus veniam aut explicabo dicta. Et
              illum accusantium cum omnis rerum ut eius optio qui consequatur
              maiores qui ducimus internos.
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
            <h2>
              {" "}
              Wie garantiert ihr eine unabhängige und individuelle Beratung?
            </h2>
            <p>
              Lorem ipsum dolor sit amet. Non consequatur molestiae rem debitis
              voluptatibus sed blanditiis commodi sit maiores repellat. Nam
              provident rerum qui illo eaque vel pariatur totam sed quia quaerat
              et veritatis quos et eligendi atque cum eaque soluta! Sed dolores
              eaque eum voluptate aliquam vel harum nihil sed porro magni est
              rerum natus rem necessitatibus veniam aut explicabo dicta. Et
              illum accusantium cum omnis rerum ut eius optio qui consequatur
              maiores qui ducimus internos.
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
            <h2> Mit welchem Partner Arbeitet ihr zusammen?</h2>
            <p>
              Lorem ipsum dolor sit amet. Non consequatur molestiae rem debitis
              voluptatibus sed blanditiis commodi sit maiores repellat. Nam
              provident rerum qui illo eaque vel pariatur totam sed quia quaerat
              et veritatis quos et eligendi atque cum eaque soluta! Sed dolores
              eaque eum voluptate aliquam vel harum nihil sed porro magni est
              rerum natus rem necessitatibus veniam aut explicabo dicta. Et
              illum accusantium cum omnis rerum ut eius optio qui consequatur
              maiores qui ducimus internos.
            </p>
          </div>
        </div>
      )}
      {modalOpen5 && (
        <div className="fe-finace-modal-wrapper">
          <div className="fe-finace-modal">
            <div
              className="close-right-alignment"
              onClick={() => setModalOpen5(!modalOpen5)}
            >
              <img src={CloseIcon} alt="CloseIcon" />
            </div>
            <h2> Was sind Inhalte der Beratung zum Start ins Referendariat?</h2>
            <p>
              Lorem ipsum dolor sit amet. Non consequatur molestiae rem debitis
              voluptatibus sed blanditiis commodi sit maiores repellat. Nam
              provident rerum qui illo eaque vel pariatur totam sed quia quaerat
              et veritatis quos et eligendi atque cum eaque soluta! Sed dolores
              eaque eum voluptate aliquam vel harum nihil sed porro magni est
              rerum natus rem necessitatibus veniam aut explicabo dicta. Et
              illum accusantium cum omnis rerum ut eius optio qui consequatur
              maiores qui ducimus internos.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
