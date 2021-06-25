import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import TransportFakedata1 from "../../Fakedata1/FakeData1.json";
import Searching from "../Searching/Searching";

import "./Destination.css";

const Destination = () => {
  const { name } = useParams();
  const [showDetails, setShowDetails] = useState(false);
  const [transport, setTransport] = useState([]);
  const [pick, setPick] = useState({
    From: "",
    To: ""
  });
  const handlePick = (e) => {
    const newPick = { ...pick };
    newPick[e.target.name] = e.target.value;
    setPick(newPick);
  };
  useEffect(() => {
    const transportList = TransportFakedata1.filter((td) => {
      return td.name === name;
    });
    setTransport(transportList);
  }, [name]);
  const handleSubmit = (event) => {
    setShowDetails(true);
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="row container">
        <div className="col-md-4 search-area">
          <div>
            {showDetails && (
              <div className="details-area  border bg-primary border-radius-less d-flex justify-content-around align-items-center  ">
                <h4>{pick.From}</h4>
                <h2>to</h2>
                <h4>{pick.To}</h4>
              </div>
            )}
          </div>
          {!showDetails && (
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="">From</label>
              <br />
              <input
                onBlur={handlePick}
                type="text"
                name="From"
                id=""
                required
              />
              <br />
              <br />
              <label htmlFor="">To</label>
              <br />
              <input onBlur={handlePick} type="text" name="To" id="" required />
              <br />
              <br />
              <label htmlFor="">Date</label>
              <br />
              <br />
              <input type="date" name="" id="" />
              <br />
              <button className="searchBtn">Search</button>
            </form>
          )}
          {showDetails &&
            transport.map((vehicleName) => (
              // < transportName={vehicleName}></SearchingPage>
              <Searching transportName={vehicleName}></Searching>
            ))}
        </div>
        <div className="col-md-8 map-area"></div>
      </div>
    </div>
  );
};

export default Destination;
