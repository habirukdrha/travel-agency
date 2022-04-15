import React from "react";
import { Link } from "react-router-dom";
import "../Card/Card.css";

const CardItem = (props) => {
  const { src, label, description, path } = props;
  return (
    <>
      <li className="cards__item">
        <Link to={path} className="cards__item__link">
          <figure data-category={label} className="cards__item__pic-wrap">
            <img src={src} alt="Travel img" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{description}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;
