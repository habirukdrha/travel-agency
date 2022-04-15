import React from "react";
import CardItem from "../CardItem/cardItem";
import "./Card.css";

const Card = () => {
  return (
    <div className="cards">
      <h1>Check out these Epic Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              label="Adventure"
              description="Explore the hidden watefall deep inside the Amazon jungle"
              path="/services"
            />

            <CardItem
              src="images/img-1.jpg"
              label="Nature"
              description="Explore the Nature deep inside the Mountains"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-2.jpg"
              label="Island"
              description="Explore the Nature deep inside the Mountains"
              path="/services"
            />

            <CardItem
              src="images/img-5.jpg"
              label="Downtown"
              description="Explore the Nature deep inside the Mountains"
              path="/services"
            />

            <CardItem
              src="images/img-6.jpg"
              label="Downtown"
              description="Explore the Nature deep inside the Mountains"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
