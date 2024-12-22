import React from "react";

const Card = ({ title, description, imgSrc, buttonLabel, buttonLink }) => {
  return (
    <div className="col-md-3 d-flex align-items-stretch">
      <div className="card h-100">
        <img src={imgSrc} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={buttonLink} className="btn btn-primary">
            {buttonLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;