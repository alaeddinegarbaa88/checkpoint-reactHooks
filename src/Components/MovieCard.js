import React from "react";
import "./MovieCard.css";

const MovieCard = ({ title, description, imageUrl, date }) => {
  return (
    <div>
      <div className="card">
        <a href="#">
          <img className="img1" src={imageUrl}></img>
          <img className="img2" src={imageUrl}></img>
          <div className="title">{title}</div>
          <div className="text">{description}</div>
          <a href="#">
            <div class="catagory">
              Series <i class="fas fa-film"></i>
            </div>
          </a>
          <a href="#">
            <div class="views">
              {date} <i class="far fa-eye"></i>{" "}
            </div>
          </a>
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
