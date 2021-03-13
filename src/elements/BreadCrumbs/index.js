import React from "react";
import propTypes from "prop-types";
import Button from "elements/Button";
export default function BreadCrumbs(props) {
  const className = ["breadcrumb", props.className];
  return (
    <nav className="aria-label breadcrumb">
      <ul className={className.join(" ")}>
        {props.data.map((item, key) => {
        
          return (
            <li
              key={`breadcrumb-${key}`}
              className={`breadcrumb-item${
                key === props.data.length - 1 ? " active" : ""
              }`}
            >
              {key === props.data.length - 1 ? (
                item.pageTitle
              ) : (
                <Button type="link" href={item.pageHref}>
                  {item.pageTitle}
                </Button>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
BreadCrumbs.propTypes = {
  data: propTypes.array,
  className: propTypes.string,
};
