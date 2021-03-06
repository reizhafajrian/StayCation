import React, { Component } from "react";
import BreadCrumbs from "elements/BreadCrumbs/index.js";
import Fade from "react-reveal/Fade"
export default function PagetDetailTitle({data,breadcrumb}) {

  return (
    <section className="container spacing-sm">
      <Fade baottom>

      <div
        className="row align-items-center"
      >
        <div className="col">
          <BreadCrumbs data={breadcrumb} />
        </div>
        <div className="col-auto text-center">
            <h1 className="h2">{data.name}</h1>
            <span className="text-gray-400">
                {data.city},{data.country}
            </span>
        </div>
        <div className="col"></div>
      </div>
      </Fade>
    </section>
  );
}
