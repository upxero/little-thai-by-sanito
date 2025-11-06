import React from "react";
import AboutContent from "../components/AboutContent/AboutContent";
import FoodMenuHome from "../components/FoodMenu/FoodMenu";
import BestItem from "../components/BestItem/BestItem";
import Testimonial from "../components/Testimonial/Testimonial";
import BookingSystemTwo from "../components/BookingSystem/BookingSystemTwo";
import MovingText from "../components/MovingText/MovingText";
import HeroSiderTwo from "../components/Silders/HeroSiderTwo";
import PortfolioSlider from "../components/PortfolioSlider/PortfolioSlider";
import OpeningHoursInfo from "../components/OpenIngHour/OpeningHoursInfo";
import AnnouncementPopup from "../components/AnnouncementPopup/AnnouncementPopup";

export default function Home() {
  return (
    <>
      <AnnouncementPopup />
      <HeroSiderTwo />
      <MovingText />
      <AboutContent />
      <OpeningHoursInfo />
      {/* <PortfolioSlider /> */}
      {/* <FoodMenuHome styleTwo={false} bgimgremove={true} /> */}
      <BestItem />
      {/* <Testimonial />*/}
      <BookingSystemTwo videoId={"WVfjXKldI-0"} />
    </>
  );
}
