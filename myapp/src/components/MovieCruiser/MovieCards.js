import React from "react";
import Greetings from "./Greetings";
import "./MovieCards.css";
import MovieCardBlock from "./MovieCardBlock";
const MovieCards = () => {
  const currTime = new Date().toLocaleTimeString();
  const currDate = new Date().toLocaleDateString();
  const currTimeDateStyle = {
    color: "brown",
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 30,
  };
  //   const add =(a,b)=>{
  //     return a+b;
  //   };
  //   const sub =(a,b)=>{
  //     return a-b;
  //   };
  //   const mult =(a,b)=>{
  //     return a*b;
  //   };
  //   const div =(a,b)=>{
  //     return (a/b);
  //   };
  return (
    <>
      <section className="movieBg">
        <div className="header">
          <h1>
            <span>Watch all the latest</span> webseries on netflex!
          </h1>
        </div>
        <div className="movieContainer">
          {/* <div>{add(5,10)}</div>
        <div>{sub(10,20)}</div>
        <div>{mult(10,10)}</div>
        <div>{div(4,13).toFixed(2)}</div> */}
          <div className="container">
            {/* current Date and time */}

            <div
              style={currTimeDateStyle}
              className="currentDateTime"
              id="currTime"
            >
              {`Current Time is ${currTime} and Current Date is ${currDate}`}

              {/* Greeting */}
              <Greetings />
            </div>

            {/* movie cards */}
            <MovieCardBlock/>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieCards;
