import React, { useEffect, useState } from "react";
import "./CovidDataTable.css";
const CovidDataTable = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const response = await fetch("https://data.covid19india.org/data.json");
      const actualData = await response.json();
      console.log(actualData.statewise);
      setData(actualData.statewise);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <section className="covidData">
        <div className="container">
          <h1>Covid 19 Dashboard</h1>
          <div className="covidTable">
            <table cellSpacing="0" cellPadding="0">
              <thead>
                <tr>
                  <th>State</th>
                  <th>Confirmed</th>
                  <th>Recovered</th>
                  <th>Death</th>
                  <th>Active</th>
                  <th>Updated</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value, index) => {
                  return (
                    <tr>
                      <td>{value.state}</td>
                      <td>{value.confirmed}</td>
                      <td>{value.recovered}</td>
                      <td>{value.deaths}</td>
                      <td>{value.active}</td>
                      <td>{value.lastupdatedtime}</td>
                      <td className="actions">
                        <span>Edit</span>
                        <span>View</span>
                        <span>Delete</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default CovidDataTable;
