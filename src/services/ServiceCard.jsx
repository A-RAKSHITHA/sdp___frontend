import React from 'react';
import "./service-card.css";

const ServiceCard = ({ item, onClick }) => {
  const { imgUrl, title, desc } = item;

  return (
    <div className="service__item" onClick={onClick}>
      <div className="service__img">
        <img src={imgUrl} alt="" />
      </div>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
};

export default ServiceCard;
