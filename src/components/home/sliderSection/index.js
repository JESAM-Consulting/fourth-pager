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
                  <div className="rating-icon-alignment">
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                  </div>
                  <p>
                    ”Ardian ist wirklich ein super Berater für angehende Lehrer
                    und Lehrerinnen! Er konnte mir bei meinen Fragen und
                    Bedenken sehr gut helfen. Er nimmt sich zudem sehr viel Zeit
                    und Erklärt alles anschaulich und verständlich. Alle
                    Einzelheiten, Klauseln, Abkürzungen und das Kleingedruckte
                    wurden geduldig besprochen. So konnten wir relativ schnell
                    zu einer guten Lösung für mich kommen.”
                  </p>
                </div>
              </div>
              <div>
                <div className="slider-text-style">
                  <div className="rating-icon-alignment">
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                  </div>
                  <p>
                    “Danke für die Geduld und die super Beratung! Ardian hat
                    sich sehr viel Zeit für mich genommen. Alles lief
                    verständlich und Schritt für Schritt. Es gab keine "dummen"
                    Fragen. Das fand ich toll, weil ich mit dem ganzen
                    "Versicherungskram" echt ein wenig überfordert war. Er hat
                    mir alle Klauseln und Abläufe sehr einfach erklärt sodass
                    ich sie als Laie auch verstehen konnte. Wir konnten trotz
                    einiger Vorerkrankungen die passenden Versicherungen für
                    mich finden. Nachdem ich Horror Geschichten von Kommilitonen
                    gehört hatte war ich wirklich sehr froh das alles so easy
                    abgelaufen ist. Danke nochmal!”
                  </p>
                </div>
              </div>
              <div>
                <div className="slider-text-style">
                  <div className="rating-icon-alignment">
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                  </div>
                  <p>
                    “Anfangs war ich erstmal skeptisch, weil man ja immer im
                    denkt, dass Versicherungsverteter etwas verkaufen wollen.
                    Dabei wusste ich garnicht das es da auch noch Unterschiede
                    gibt. Ich bin durch das Webinar aufmerksam geworden und
                    dachte mir: kann ja nichts schief gehen, wenn es kostenlos
                    ist. Alles ist vollkommen unverbindlich und ich fühle mich
                    bei Ardian immer top beraten. Es wird einem nichts
                    aufgedrängt und neben der Berücksichtigung individueller
                    Wünsche hat Ardian für mich das Preis-Leistungstechnisch
                    beste Angebot gefunden.. egal ob Dienstunfähigkeit,
                    Krankenversicherung, Haftpflicht. Ich kann ihn nur weiter
                    empfehlen! “
                  </p>
                </div>
              </div>
              <div>
                <div className="slider-text-style">
                  <div className="rating-icon-alignment">
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                    <img src={UnionIcon} alt="UnionIcon" />
                  </div>
                  <p>
                    “Alles Top! Habe mir sehr viel Zeit und Stress erspart.
                    Dadurch das Henning Versicherungsmakler ist und somit
                    unabhängig ist habe ich mir sehr viel Zeit gespart mit
                    Angeboten vergleichen. Er konnte mir sehr unkompliziert und
                    schnell Angebote von verschiedenen Versicherungen einholen.
                    Fast schon wie ein Vergleichsportal nur besser und
                    persönlicher. So darf es in Zukunft gerne bleiben. Danke
                    Kennet und bis bald!”
                  </p>
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
