import axios from "axios";
import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [num, setNum] = useState(" ");
  const [name, setName] = useState("");
  const [move, setMoves] = useState([]);
  useEffect(() => {
    try {
      const apiFun = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${num}`;
        const response = await axios.get(url);
        // console.log(response);
        setName(response.data.name);
        setMoves(response.data.moves?.length);
      };
      apiFun();
    } catch (error) {
      console.log(error);
    }
  },[num]);
  return (
    <>
      <section>
        <div className="container">
          <h1>API Data</h1>
          <div className="dropdownSelect">
            <select
              id="selectbox"
              onChange={(e) => {
                setNum(e.target.value);
              }}
              value={num}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={25}>25</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <p>{name}</p>
            <p>{move}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pokemon;
