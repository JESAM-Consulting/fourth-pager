import React from "react";
import Slider from "react-slick";

import "./sliderSection.scss";
import Icon07 from "../../../assets/images/07.svg";
import UnionIcon from "../../../assets/images/Union.svg";
import LeftIcon from "../../../assets/images/left.svg";
import RightIcon from "../../../assets/images/right.svg";
import Icon010 from "../../../assets/images/010.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="right-icon-alignment" onClick={onClick}>
      <img src={RightIcon} alt="RightIcon" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="left-arrow-alignment" onClick={onClick}>
      <img src={LeftIcon} alt="LeftIcon" />
    </div>
  );
}

export default function SliderSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="slider-section-all-content-alignment">
        <div className="container-md4">
          <div className="section-title">
            <h2>Zufriedene Kunden berichten über uns</h2>
          </div>
          <div className="left-icon">
            <img src={Icon07} alt="Icon07" />
          </div>
          <div className="slider-all-section-content-alignment">
            <Slider {...settings}>
              <div>
                <div className="slider-text-style">
                  <h5>Jason Sasse</h5>
                  <div className="rating-icon-alignment">
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                  </div>
                  <p>
                    Mein Versicherungsmakler steht mir immer zur Verfügung wenn
                    ich fragen habe und ist super toll zum zusammenarbeiten.
                    Hier bleibe ich gerne, denn hier wird sich gekümmert und
                    wirklich das Interesse des Versicherten im Auge behalten.
                    Außerdem sind alle nett und freundlich.
                  </p>
                  <a>VERIFIZIERTE GOOGLE BEWERTUNG</a>
                </div>
              </div>
              <div>
                <div className="slider-text-style">
                  <h5>Jason Sasse</h5>
                  <div className="rating-icon-alignment">
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                  </div>
                  <p>
                    Mein Versicherungsmakler steht mir immer zur Verfügung wenn
                    ich fragen habe und ist super toll zum zusammenarbeiten.
                    Hier bleibe ich gerne, denn hier wird sich gekümmert und
                    wirklich das Interesse des Versicherten im Auge behalten.
                    Außerdem sind alle nett und freundlich.
                  </p>
                  <a>VERIFIZIERTE GOOGLE BEWERTUNG</a>
                </div>
              </div>
              <div>
                <div className="slider-text-style">
                  <h5>Jason Sasse</h5>
                  <div className="rating-icon-alignment">
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                  </div>
                  <p>
                    Mein Versicherungsmakler steht mir immer zur Verfügung wenn
                    ich fragen habe und ist super toll zum zusammenarbeiten.
                    Hier bleibe ich gerne, denn hier wird sich gekümmert und
                    wirklich das Interesse des Versicherten im Auge behalten.
                    Außerdem sind alle nett und freundlich.
                  </p>
                  <a>VERIFIZIERTE GOOGLE BEWERTUNG</a>
                </div>
              </div>
              <div>
                <div className="slider-text-style">
                  <h5>Jason Sasse</h5>
                  <div className="rating-icon-alignment">
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                  </div>
                  <p>
                    Mein Versicherungsmakler steht mir immer zur Verfügung wenn
                    ich fragen habe und ist super toll zum zusammenarbeiten.
                    Hier bleibe ich gerne, denn hier wird sich gekümmert und
                    wirklich das Interesse des Versicherten im Auge behalten.
                    Außerdem sind alle nett und freundlich.
                  </p>
                  <a>VERIFIZIERTE GOOGLE BEWERTUNG</a>
                </div>
              </div>
            </Slider>
          </div>
          <div className="new-right-icon">
            <img src={Icon010} alt="Icon010" />
          </div>
        </div>
      </div>
    </div>
  );
}
