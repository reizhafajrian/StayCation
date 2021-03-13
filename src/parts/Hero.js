import React from "react";
import Button from "elements/Button";
import ImagesHero from "assets/image/img_banner.png";
import ImagesHeroFrame from "assets/image/img_frame.png";
import ICCities from "assets/icon/ic_cities.svg";
import ICTraveler from "assets/icon/ic_traveler.svg";
import ICTreasure from "assets/icon/ic_treasure.svg";
import numberFormat from "utils/FormatNumber";
import Fade from 'react-reveal/Fade';
export default function Hero(props) {
  function showMostPick() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  } 
  return (
    <Fade bottom>


    <section className="container pt-4">
      <div className="row align-items-center justify-content-between">
        <div className="col-auto pr-5" style={{ width: "550px" }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work,
            <br />
            Start Next Vacation
          </h1>
          <p className="mb-5 font-weight-light text-gray-500 w-75">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button className="btn px-5 border-radius-10" isPrimary hasShadow>
            Show me now
          </Button>
          <div className="row mt-5 justify-content-between">
            <div className="col-auto">
              <img
                width="36"
                src={ICTraveler}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.travelers)}
                <span className="text-gray-500 font-weight-light">
                  Travelers
                </span>
              </h6>
            </div>{" "}
            <div className="col-auto">
              <img
                width="36"
                src={ICTreasure}
                alt={`${props.data.treasures} Treasure`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.treasures)}
                <span className="text-gray-500 font-weight-light">
                  Treasure
                </span>
              </h6>
            </div>{" "}
            <div className="col-auto">
              <img
                width="36"
                src={ICCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.cities)}
                <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-auto-6 pr-5">
          <div className="col-auto" style={{ width: 520, height: 410 }}>
            <img
              src={ImagesHero}
              alt="Room with Couches"
              className="img-fluid position-absolute"
              style={{ zIndex: 2 }}
            />
            <img
              src={ImagesHeroFrame}
              alt="Frame"
              className="img-fluid position-absolute"
              style={{ zIndex: 1, margin: "30px 0 0 30px" }}
            />
          </div>
        </div>
      </div>
    </section>
    </Fade>
  );
}
