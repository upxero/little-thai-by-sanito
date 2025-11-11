import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ import Helmet
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
      <Helmet>
        <title>Little Thai By Sanito - Home</title>
        <meta name="description" content="Authentic Thai food in Antwerp. Reserve a table online or check our menu." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://littlethaibysanito.be/" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Little Thai By Sanito",
            "image": "https://littlethaibysanito.be/logo.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bolivarplaats 2",
              "addressLocality": "Antwerpen",
              "postalCode": "2000",
              "addressCountry": "BE"
            },
            "telephone": "+32473175116",
            "servesCuisine": "Thai",
            "url": "https://littlethaibysanito.be"
          })}
        </script>
      </Helmet>

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
