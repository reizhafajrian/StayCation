import Button from "elements/Button";
import React from "react";
import Fade from "react-reveal/Fade";
export default function MostPicked(props) {
  return (
    <section className="container">
      <Fade bottom>
        <div>
        <h4 class="mb-3">Most Picked</h4>
        <div className="container-grid">
          {props.data.map((item, key) => {
            return (
              <div className={`item column-4 ${key === 0 ? "row-2" : "row-1"}`}>
                <Fade bottom delay={key *300}>
                  <div className="card">
                  <div class="card card-featured">
                    <div className="tag">
                      {item.price}
                      <span className="font-wight-light">per {item.unit}</span>
                    </div>
                    <figure className="figure img-wrapper">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        href={`/properties/${item._id}`}
                        className="stretched-link d-block">
                        <h5>{item.name}</h5>
                      </Button>
                      <span>
                        {item.city},{item.country}
                      </span>
                    </div>
                  </div>
                  
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
        </div>
      </Fade>
    </section>
  );
}
