import React from "react";
import { Helmet } from "react-helmet-async";
import LocationConatiner from "../components/LocationCardItem/LocationConatiner";
import CommonHero from "../components/CommonHero/CommonHero";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import BookingSystem from "../components/BookingSystem/BookingSystem";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import BuildingPhotos from "../components/BuildingPhotos/BuildingPhotos";

export default function Reservations() {
  return (
    <>
      <Helmet>
        <title>Reservations - Little Thai By Sanito</title>
        <meta
          name="description"
          content="Book your table online at Little Thai By Sanito. Enjoy authentic Thai cuisine in Antwerp. Reserve now!"
        />
        <meta name="robots" content="index, follow" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Little Thai By Sanito",
            "url": "https://littlethaibysanito.be/reservations",
            "image": "https://littlethaibysanito.be/logo.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bolivarplaats 2",
              "addressLocality": "Antwerpen",
              "postalCode": "2000",
              "addressCountry": "BE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.205135,
              "longitude": 4.385821
            },
            "telephone": "+32 123 456 789",
            "reservation": {
              "@type": "Reservation",
              "bookingTime": new Date().toISOString(),
              "partySize": "Specify number of guests in form"
            }
          })}
        </script>
      </Helmet>

      <CommonHero title={"Reservation"} link={"/"} />
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container-fluid">
        <div className="ak-booking-system-map-from">
          <div className="booking-system-map">
            <GoogleMap addressLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.7566801580465!2d4.3858211755844!3d51.20513503274111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f694daf685dd%3A0x34651dc572b364dc!2sBolivarplaats%202%2C%202000%20Antwerpen%2C%20Belgi%C3%AB!5e0!3m2!1snl!2sth!4v1762397365705!5m2!1snl!2sth" />
            <div className="booking-system-map-second">
              <div className="booking-system-heading">
                <SectionTitle
                  title={"Reservations"}
                  subTitle={"Reservations"}
                  animTwo={true}
                />
                <div className="ak-height-60 ak-height-lg-30"></div>
                <BookingSystem />
              </div>
            </div>
          </div>
        </div>
        <BuildingPhotos />
      </div>
    </>
  );
}
