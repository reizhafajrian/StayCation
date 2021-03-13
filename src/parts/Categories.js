import Button from "elements/Button";
import React from "react";
import Fade from "react-reveal/Fade";
export default function Categories({ data }) {
  return data.map((category, key1) => {
    return (
      <Fade bottom>
      <section className="container" key={`category-${key1}`}>
        <h4 className="mb-3 font-weight-medium">{category.name}</h4>
        <div className="div container-grid">
          {category.items.length === 0 ? (
            <div className="row">
              <div className="col-auto align-items-center">
                There is no property at this category
              </div>
            </div>
          ) : (
            category.items.map((item, key2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${key1}-item-${key2}`}
                >
                      <Fade bottom delay={key2 *300}>
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular<span className="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure
                      className="img-wrapper"
                     
                    >
                      <img src={item.imageUrl} alt={item.name} className="img-cover"/>
                    </figure>
                    <div className="meta-wrapper">
                      <Button type="link" href={`properties/${item._id}`} className="stretched-link d-block text-gray-800">
                        <h5 className="h4">{item.name}</h5>
                      </Button>
                      <span className="text-gray-500">
                        {item.city},{item.city}
                      </span>
                    </div>
                  </div>
                  </Fade>
                </div>
              );
            })
          )}
        </div>
      </section>
      </Fade>
    );
  });
}
