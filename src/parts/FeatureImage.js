import React from "react";
import Fade from 'react-reveal/Fade'
export default function FeatureImage({ data }) {
  return (
    <section className="container">
      <div className="container-grid sm">
        {data.map((item, key) => {
          return (
            <div
              key={`FeaturedImage-${key}`}
              className={`item ${key > 0 ? "column-5" : "column-7"}
                        ${key > 0 ? "row-1" : "row-2"}`}>
                <Fade bottom delay={300 * key} >
                    <div className="card h-100">
                        <figure className="img-wrapper">
                            <img src={item.url} alt={item._id} className="img-cover"/>
                        </figure>
                    </div>
                </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
