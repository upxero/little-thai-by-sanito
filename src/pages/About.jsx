import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ import Helmet
import AboutContent from "../components/AboutContent/AboutContent";
import CommonHero from "../components/CommonHero/CommonHero";
import Testimonial from "../components/Testimonial/Testimonial";
import OpeningHoursInfo from "../components/OpenIngHour/OpeningHoursInfo";
import Videos from "../components/VideoPopUp/Videos";

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About Us - Little Thai By Sanito</title>
        <meta name="description" content="Learn more about Little Thai By Sanito, our story, and our passion for authentic Thai cuisine in Antwerp." />
        <meta name="robots" content="index, follow" />

        {/* JSON-LD Structured Data for About page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Little Thai By Sanito",
            "url": "https://littlethaibysanito.be",
            "logo": "https://littlethaibysanito.be/logo.jpg",
            "sameAs": [
              "https://www.facebook.com/littlethaibysanito",
              "https://www.instagram.com/littlethaibysanito"
            ]
          })}
        </script>
      </Helmet>

      <CommonHero title={"About Us"} link={"/"} />
      <AboutContent />
      {/* <Testimonial /> */}
      <OpeningHoursInfo typeTwo={true} />
      <Videos videoId={"WVfjXKldI-0"} />
    </div>
  );
}
