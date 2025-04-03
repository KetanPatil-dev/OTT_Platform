import React  from "react";
import "./Titlecards.css";
import card_data from "../../assets/cards/Cards_data";

const Titlecards = ({title,category}) => {
  
  return (
    <div className="title-cards">
      <h2>{title?title:"Popular on CloneFlix"}</h2>
      <div className="card-list">
        {card_data.map((card, index) => {
          return (
            <div key={index + 1} className="card">
              <img src={card.image}  alt="card-img"/>
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Titlecards;
