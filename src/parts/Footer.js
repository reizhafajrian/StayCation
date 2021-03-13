import Button from "elements/Button";
import React from "react";
import IconText from "./IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <IconText />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className="col-2 mr-5">
            <h5  className="mt-2 font-weight-bold text-secondary">For Beginners</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href={`/register`}>
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href={`/properties`}>
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href={`/use-payments`}>
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
           <div className="col-2 mr-5">
            <h5 className="mt-2 font-weight-bold text-secondary">Explore Us</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  type="link"
                  href={`/careers`}
                >
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href={`/privacy`}>
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href={`/terms`}>
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h5  className="mt-2 font-weight-bold text-secondary">Connect Us</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href={`mailto:reizha77@gmail.com`}
                >
                  reizha77@gmail.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href={`tel:+6281211897997`}>
                  +6281211897997
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href={`/terms`}>
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
        <div className="col text-center copyrights">
          Copyright 2019 • All rights reserved • Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
