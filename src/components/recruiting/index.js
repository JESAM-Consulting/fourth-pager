import React, { useEffect, useState } from "react";
import "./recruiting.scss";
import FeLogo from "../../assets/images/FE Construction Bold Logo 2022 1.svg";
import NewLogo from "../../assets/images/new-logo.svg";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

import { ApiGet, ApiPost, ApiPut } from "../../helpers/API/ApiData";

export default function Recruiting() {
  const history = useHistory();
  const [inputValue, setInputValue] = useState({});
  const [errors, setErrors] = useState({});
  const [terms, setTerms] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const bindInput = (value) => {
    var regex = new RegExp("^[^0-9 ]*$");
    var key = String.fromCharCode(
      !value.charCode ? value.which : value.charCode
    );
    if (regex.test(key)) {
      value.preventDefault();
      return false;
    }
  };

  const validateforUserData = () => {
    let isFormValid = true;
    let errors = {};

    if (!inputValue?.fname?.trim() || inputValue?.fname === "") {
      isFormValid = false;
      errors["fname"] = "*Bitte überprüfen Sie ihre Eingabe.";
    }
    if (!inputValue?.lname?.trim() || inputValue?.lname === "") {
      isFormValid = false;
      errors["lname"] = "*Bitte überprüfen Sie ihre Eingabe.";
    }

    if (!inputValue?.postalCode || inputValue?.postalCode === "") {
      isFormValid = false;
      errors["postalCode"] = "*Bitte überprüfen Sie ihre Eingabe.";
    }

    if (
      !inputValue?.email?.trim() ||
      inputValue?.email === "" ||
      regexEmail?.test(inputValue?.email) === false
    ) {
      isFormValid = false;
      errors["email"] = "*Bitte überprüfen Sie ihre Eingabe.";
    }

    if (!inputValue?.phone || inputValue?.phone === "") {
      isFormValid = false;
      errors["phone"] = "*Bitte überprüfen Sie ihre Eingabe.";
    }
    if (!inputValue?.group || inputValue?.group === "") {
      isFormValid = false;
      errors["group"] = "*Bitte überprüfen Sie ihre Eingabe.";
    }
    // if (terms === false) {
    //   isFormValid = false;
    //   errors["check1"] = "*Bitte überprüfen Sie ihre Eingabe.";
    // }

    setErrors(errors);
    return isFormValid;
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const submitContact = (e) => {
    e.preventDefault();
    if (validateforUserData()) {
      ApiPost(`contactForm2/create`, inputValue)
        .then((res) => {
          console.log("errrrrrrrrrssssssss", res);
          toast.success(
            "Vielen Dank, Ihre Daten wurden erfolgreich eingereicht."
          );
          setInputValue({});
          setTimeout(() => {
            history.push("/");
          }, 1500);
          // props.setModalOpen(false);
          // props.setModal2Open(true);
          // setSuccessMessage(true);
        })
        .catch((err) => {
          console.log("errrrrrrrrr", err);
          toast.error("Etwas ist schief gelaufen. Bitte versuche es erneut");
        });
    }
  };
  return (
    <div>
      <div className="main-section-steper-content-alignment">
        <ToastContainer />
        <div className="grid">
          <div className="grid-items">
            <div>
              <div className="common-text">
                <NavLink to="/">zurück zur Website</NavLink>
              </div>
              <div className="box-width">
                <h6>Jetzt Kontakt aufnehmen</h6>
                <input
                  type="text"
                  placeholder="Vorname"
                  id="fname"
                  name="fname"
                  value={inputValue?.fname}
                  onChange={(e) => {
                    handleOnChange(e);
                  }}
                />
                <span
                  style={{
                    color: "red",
                    top: "5px",
                    fontSize: "12px",
                  }}
                >
                  {errors["fname"]}
                </span>
                <input
                  type="text"
                  placeholder="Nachname"
                  id="lname"
                  name="lname"
                  value={inputValue?.lname}
                  onChange={(e) => {
                    handleOnChange(e);
                  }}
                />
                <span
                  style={{
                    color: "red",
                    top: "5px",
                    fontSize: "12px",
                  }}
                >
                  {errors["lname"]}
                </span>
                <input
                  type="text"
                  placeholder="Postleitzahl"
                  id="postalCode"
                  name="postalCode"
                  value={inputValue?.postalCode}
                  onChange={(e) => {
                    handleOnChange(e);
                  }}
                  onKeyPress={bindInput}
                />
                <span
                  style={{
                    color: "red",
                    top: "5px",
                    fontSize: "12px",
                  }}
                >
                  {errors["postalCode"]}
                </span>
                <input
                  type="text"
                  placeholder=" E-Mail"
                  id="email"
                  name="email"
                  value={inputValue?.email}
                  onChange={(e) => {
                    handleOnChange(e);
                  }}
                />
                <span
                  style={{
                    color: "red",
                    top: "5px",
                    fontSize: "12px",
                  }}
                >
                  {errors["email"]}
                </span>
                <input
                  type="text"
                  placeholder="Telefon"
                  id="phone"
                  name="phone"
                  value={inputValue?.phone}
                  onChange={(e) => {
                    handleOnChange(e);
                  }}
                  onKeyPress={bindInput}
                />
                <span
                  style={{
                    color: "red",
                    top: "5px",
                    fontSize: "12px",
                  }}
                >
                  {errors["phone"]}
                </span>
                <select
                  className={`form-control form-control-lg form-control-solid `}
                  onChange={(e) => {
                    handleOnChange(e);
                  }}
                  name="group"
                  defaultValue={inputValue?.group}
                >
                  <option
                    value="Zusammen macht's mehr Spaß: Bringe Kommilitonen mit"
                    selected
                    disabled
                  >
                    Zusammen macht's mehr Spaß: Bringe Kommilitonen mit
                  </option>
                  <option value="group1plus">+1</option>
                  <option value="group2plus">+2</option>
                  <option value="group5plus">Gruppe (5+)</option>
                </select>

                <span
                  style={{
                    color: "red",
                    top: "5px",
                    fontSize: "12px",
                  }}
                >
                  {errors["group"]}
                </span>
                <input
                  type="date"
                  id="trainingDate"
                  name="trainingDate"
                  value={inputValue?.trainingDate}
                  onChange={(e) => {
                    handleOnChange(e);
                  }}
                />
                <span
                  style={{
                    color: "red",
                    top: "5px",
                    fontSize: "12px",
                  }}
                >
                  {errors["trainingDate"]}
                </span>

                <div className="ok-button">
                  <button onClick={(e) => submitContact(e)}>Absenden</button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-items">
            <div>
              <div className="logo-center-alignment">
                <NavLink to="/">
                  <img src={FeLogo} alt="FeLogo" />
                </NavLink>
              </div>

              <div className="text-style">
                <span> Verbraucherschutzkonform nach</span>
              </div>
              <div className="new-image-center-alignment">
                <img src={NewLogo} alt="NewLogo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
