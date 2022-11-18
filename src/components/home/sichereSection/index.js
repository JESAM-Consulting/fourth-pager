import React from "react";
import { NavLink } from "react-router-dom";
import "./sichereSection.scss";
export default function SichereSection() {
  return (
    <div>
      <div className="sichere-section-green-banner">
        <div className="container">
          <div className="button-style">
            <NavLink to="/recruiting">
              <button>Sichere dir deinen Erste Hilfe Kurs</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
