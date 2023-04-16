import React from "react";
import { Link } from "react-router-dom";

const Card = ({id, title, year, imageUrl }) => {
  return (
    <div>
      <Link to={`/play/${id}`} style={{ textDecoration: "none" }}>
        <div className="bg-black px-2">
          <img src={imageUrl} alt="Card" />
            <div className="text-white" >{title}</div>
            <p className="text-secondary">{year}</p>
        </div>
    </Link>
    </div>
  );
};

export default Card;
