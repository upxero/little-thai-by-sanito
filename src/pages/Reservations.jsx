import React from "react";
import LocationConatiner from "../components/LocationCardItem/LocationConatiner";
import CommonHero from "../components/CommonHero/CommonHero";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import BookingSystem from "../components/BookingSystem/BookingSystem";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import BuildingPhotos from "../components/BuildingPhotos/BuildingPhotos";

export default function Reservations() {
  return (
    <>
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
