import React from "react";
import "./Searching.css";

const SearchingPage = ({ transportName }) => {
  const { name, image, price } = transportName;
  return (
    <div className="container">
      <div>
        <div className=" details-area  border border-radius-less d-flex justify-content-around align-items-center  ">
          <img src={image} alt="" width="60px" />
          <h5>{name}</h5>
          <h4>{price}</h4>
        </div>
      </div>
    </div>
  );
};

export default SearchingPage;
