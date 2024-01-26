import React from "react";
// import MovieImage from "../../images/netflix-webseries.jpg";
import MovieCruiser from "./MovieCruiser";
const MovieCardBlock = () => {
  return (
    <>
      <div className="movieRow">
        {MovieCruiser.map((value, index) => {
          return (
            <div className="movieCard" key={index}>
              <div className="movieImg">
                <a href={value.movieUrl} target={"blank"}>
                  <img src={value.movieImage} alt={value.movieImage} />
                </a>
              </div>
              <div className="movieContent">
                <h2>{value.movieName}</h2>
                <p>{value.movieDescription}</p>
                <a href={value.movieUrl} target={"blank"}>
                  {"View Movie"}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieCardBlock;
