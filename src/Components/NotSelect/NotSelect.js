import React from "react";
import { Link } from "react-router-dom";

const NotSelect = () => {
  return (
    <>
      <div className="pt-5">
        <h2 className="pt-1"> If you see destination page, </h2>
        <h2>You at first select any transport for home menu</h2>
        <h3>Please Go to the Home</h3>
        <Link to="/home">
          <button className="btn btn-primary">Home</button>
        </Link>
      </div>
    </>
  );
};

export default NotSelect;
