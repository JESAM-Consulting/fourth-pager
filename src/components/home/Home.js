import React, { useEffect, useState } from "react";
import Footer from "../footer";
import "../home/home.scss";
import DuStehstSection from "./duStehstSection";
import FeFinance from "./feFinance";
import HeroBanner from "./heroBanner";
import LauftSection from "./lauftSection";
import NeofairSection from "./neofairSection";
import SichereSection from "./sichereSection";
import SliderSection from "./sliderSection";
export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <HeroBanner />
      <DuStehstSection />
      <LauftSection />
      <SichereSection />
      <NeofairSection />
      <SliderSection />
      <FeFinance />
      <Footer />
    </div>
  );
}
